const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('workouts');
module.exports.collection = collection;


const list = [
    { 
        workouts: 'Bicep Curl',
        type: 'Arms',
        calories: '100',
        pic: 'https://image.shutterstock.com/image-vector/man-doing-standing-dumbbell-bicep-260nw-1850250391.jpg',
    },
    { 
        workouts: 'Bench Press',
        type: 'Arms',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/z/bench-press-exercise-chest-man-doing-workout-bench-press-exercise-chest-man-doing-workout-barbell-bodybuilder-157558597.jpg',
    },
    { 
        workouts: 'Tricep Extension',
        type: 'Arms',
        calories: '100',
        pic: 'hhttps://media.istockphoto.com/vectors/tricep-extension-exercise-vector-id1165642752?k=20&m=1165642752&s=170667a&w=0&h=mkYe58nurtfBUjv9SzI49hjTX4ovSfEDfnPikMqYpbs=',
    },
    { 
        workouts: 'Reverse Fly',
        type: 'Arms',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/bentover-reverse-fly-dumbbell-moves-manga-gym-set-illustration-vector-id1178535282?k=20&m=1178535282&s=612x612&w=0&h=z8Wy7oVEs7sOZDJM-unq_6NAIlOARq1cVrib9KwBokg=',
    },
    { 
        workouts: 'Pull Ups',
        type: 'Arms',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/b/man-green-doing-pull-up-exercise-three-steps-flat-isolated-vector-illustration-man-green-doing-pull-up-exercise-three-156392312.jpg',
    },
    { 
        workouts: 'Push Ups',
        type: 'Arms',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/step-to-instruction-in-push-up-vector-id578104104?k=20&m=578104104&s=612x612&w=0&h=kGbvAeYgHEY0W_yb94ol-5M4YVGv8MDxQ5IHAgehKB4=',
    },
    { 
        workouts: 'Tricep Dips',
        type: 'Arms',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/b/man-doing-bench-tricep-dips-flat-vector-man-doing-bench-tricep-dips-flat-vector-illustration-isolated-white-background-215404254.jpg',
    },

    { 
        workouts: 'Lat Pull Down',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1105-mv-latpull-1441032989.jpg',
    },
    { 
        workouts: 'Shoulder Press',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/0906-shoulder-press-1441032989.jpg',
    },
    { 
        workouts: 'Shoulder Shrugs',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/b/dumbbell-moves-eps-file-format-shoulder-shrug-manga-gym-set-illustration-202922025.jpg',
    },
    { 
        workouts: 'Back Fly',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://eunicakes.files.wordpress.com/2016/02/1104-reversefly.jpg?w=604',
    },
    { 
        workouts: 'Rows',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://cdn4.vectorstock.com/i/1000x1000/80/43/woman-doing-bent-over-barbell-rows-exercise-vector-38468043.jpg',
    },
    { 
        workouts: 'Front Raise',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://cdn5.vectorstock.com/i/1000x1000/34/84/shoulder-exercises-front-raise-vector-25453484.jpg',
    },
    { 
        workouts: 'Lateral Raise',
        type: 'Back and Shoulders',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/b/lateral-raise-top-body-workout-upper-exercises-flat-vector-illustration-151445856.jpg',
    },

    { 
        workouts: 'Crunches',
        type: 'Abs',
        calories: '100',
        pic: 'https://cdn2.vectorstock.com/i/1000x1000/28/21/woman-doing-crunches-in-gym-flat-cartoon-vector-26872821.jpg',
    },
    { 
        workouts: 'Bicycle Crunches',
        type: 'Abs',
        calories: '100',
        pic: 'https://cdn2.vectorstock.com/i/1000x1000/85/56/man-doing-abdominal-workout-with-bicycle-crunch-vector-34248556.jpg',
    },
    { 
        workouts: 'Sit Ups',
        type: 'Abs',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/woman-who-was-fat-doing-sit-up-on-mat-vector-id848741194?k=20&m=848741194&s=170667a&w=0&h=ZxAy2cNuxch0c38Oh75rO_AV4s-T_a5wjhOJcySAw5I=',
    },
    { 
        workouts: 'Russian Twists',
        type: 'Abs',
        calories: '100',
        pic: 'https://image.shutterstock.com/image-vector/woman-doing-russian-twist-exercise-260nw-1316827436.jpg',
    },
    { 
        workouts: 'Plank',
        type: 'Abs',
        calories: '100',
        pic: 'https://image.shutterstock.com/image-illustration/man-doing-plank-fitness-exercise-260nw-1177542880.jpg',
    },
    { 
        workouts: 'Plank Leg Raises',
        type: 'Abs',
        calories: '100',
        pic: 'https://st4.depositphotos.com/4293685/24249/v/1600/depositphotos_242494232-stock-illustration-exercise-guide-woman-doing-plank.jpg',
    },
    { 
        workouts: 'Scissors',
        type: 'Abs',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/scissors-body-workout-exercise-set-manga-cartoon-vector-vector-id1281366894?k=20&m=1281366894&s=170667a&w=0&h=mGkmUOSc74k9xntaazE6hPcPB7zZXxKy0VqmetAvba0=',
    },
    { 
        workouts: 'Reverse Crunch',
        type: 'Abs',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/exercise-men-workout-fitness-aerobic-and-exercises-vector-vector-id1266226877?k=20&m=1266226877&s=170667a&w=0&h=EtKYPaDvqpl6bVDESQ7qcA8Tryu798_8V4rn_wFcjB4=',
    },

    { 
        workouts: 'Squats',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://media.istockphoto.com/vectors/correct-step-to-doing-workout-with-squat-posture-vector-id851859966?k=20&m=851859966&s=612x612&w=0&h=Yl-zzNtqBOhOXX4BhxBqSy3VNlje5rKzOoahGhnmov4=',
    },
    { 
        workouts: 'Sumo Squats',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://cdn4.vectorstock.com/i/1000x1000/91/73/man-doing-bodyweight-sumo-wide-stance-squats-vector-38309173.jpg',
    },
    { 
        workouts: 'Donkey Kicks',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://thumbs.dreamstime.com/z/donkey-kicks-sport-exersice-silhouettes-woman-doing-exercise-workout-training-donkey-kicks-sport-exersice-silhouettes-woman-134685814.jpg',
    },
    { 
        workouts: 'Side Leg Raises',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://us.123rf.com/450wm/logo3in1/logo3in11805/logo3in1180500010/102689857-woman-doing-straight-leg-raises-to-the-outside-illustration-about-step-of-thigh-workout-.jpg?ver=6',
    },
    { 
        workouts: 'Lunges',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://us.123rf.com/450wm/artinspiring/artinspiring1903/artinspiring190300466/124593050-woman-making-lunges-doing-sport-exercises-in-gym-leg-workout-muscle-building-healthy-and-active-life.jpg?ver=6',
    },
    { 
        workouts: 'Glute Bridge',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://st4.depositphotos.com/4293685/19868/v/600/depositphotos_198689614-stock-illustration-woman-doing-exercise-hip-lift.jpg',
    },
    { 
        workouts: 'Calf Raises',
        type: 'Legs and Butt',
        calories: '100',
        pic: 'https://cdn5.vectorstock.com/i/1000x1000/80/79/man-doing-jumping-calf-raises-presses-exercise-vector-34708079.jpg',
    },
    
];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get = workouts_id => collection.findOne({_id: new ObjectId(workouts_id) });

module.exports.GetTrackWall = function GetTrackWall(handle) {
    // @ts-ignore
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.GetByHandle = (handle) => collection.findOne({handle});

module.exports.Add = async function Add(workouts) {
    const response = await collection.insertOne(workouts);
    const workouts_id = response.insertedId;
    return { ...workouts };
}

module.exports.Update = async function Update(workouts_id, workouts) {
    const result = await collection.findOneAndUpdate(
        {_id: new ObjectId(workouts_id)},
        {$set: workouts},
        {returnDocument: 'after'}
    );

    return result.value;
}

module.exports.Delete = async function Delete(workouts_id) {
    const result = await collection.findOneAndDelete({_id: new ObjectId(workouts_id)});
    return result.value;
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}

function addOwnerPipeline(addOwnerPipeline) {
    throw new Error('Function not implemented.');
}

