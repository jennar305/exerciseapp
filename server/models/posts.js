const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    { 
        src: "https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/club-photos/978/Manhattan__Tribeca___NY_photo_8_0.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.self.com%2Fstory%2Ftrainers-to-follow-instagram-actually-doable-at-home-workouts&psig=AOvVaw17J6L4d88L6bDseoUwc0bl&ust=1637907937218000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODI-trwsvQCFQAAAAAdAAAAABAD",
        alt: "Planet Fitness",
        caption: "At the gym...",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        src: "https://media1.popsugar-assets.com/files/thumbor/oStCU38qB6hu1AHCJ5CyLBQ6TAY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/27/986/n/1922729/6982a2275c7711f34ee2e8.35687035_/i/Why-Women-Work-Out.jpg",
        alt: "Gym Day",
        caption: "Gym Day!",
        time: Date(),
        user_handle: "@janedoe",
        isPublic: true,
    },
    { 
        src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZ3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        alt: "working out",
        caption: "Never be afraid to try something new. The ark was built by amateurs and the Titanic by professionals",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        src: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/p180x540/242759506_10102663165018030_5506732176336636339_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=LJFWaOTJXvUAX-skiU3&_nc_ht=scontent-lga3-2.xx&oh=e6a03799ccf969c3b3fe62a7b266b8b9&oe=618C38F8",
        alt: "The family",
        caption: "The whole family. All the kids hiking together. Sukkot Vacation.",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        src: "https://dynl.mktgcdn.com/p/cx85lTqfBjQASje8vMC-VZwg2a1MAJYKc9NKafKVDr4/537x450.jpg",
        alt: "Blink Fitness",
        caption: "Blink.",
        time: Date(),
        user_handle: "@jenna",
        isPublic: true,
    },
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}


module.exports.GetFeed_ = function GetFeed_(handle) {
    //  The "SQL" way to do things
    const query = Users.collection.aggregate([
        {$match: { handle }},
        {"$lookup" : {
            from: "posts",
            localField: 'following.handle',
            foreignField: 'user_handle',
            as: 'posts'
        }},
        {$unwind: '$posts'},
        {$replaceRoot: { newRoot: "$posts" } },
    // @ts-ignore
    ].concat(addOwnerPipeline));
    return query.toArray();

}

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     // @ts-ignore
     ].concat(addOwnerPipeline));
    return query.toArray();
}


module.exports.Get = function Get(post_id) { return collection.findOne({_id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    const response = await collection.insertOne(post);
    
    post.id = response.insertedId;

    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id) }, 
        { $set: post },
        { returnDocument: 'after'}
    );

    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(post_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}