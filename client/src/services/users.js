const list = [
    { 
        firstName: 'Jenna',
        lastName: 'Rodriguez',
        username: 'jenna',
        pic: '../assets/me.jpg',
        password: 'hi',
        isAdmin: true,
        emails: [
            "rodriguj94@newpaltz.edu"
        ]
    },
    { 
        firstName: 'Debra',
        lastName: 'Coffey',
        username: '@debbs314',
        pic: '',
        password: 'hello',
        isAdmin: true,
        emails: [
            "debbs314@gmail.com"
        ]
    },
    { 
        firstName: 'John',
        lastName: 'Smith',
        username: '@johnsmith',
        pic: '',
        password: 'bye',
        isAdmin: true,
        emails: [
            "john@smith.com"
        ]
    },

];

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetByUsername(username) { return ({ ...list.find( x => x.username == username ), password: undefined }); } 

export function Add(user) {
    if(!user.firstName){
        throw { code: 422, msg: "First Name is required" }
    }
     list.push(user);
     return { ...user, password: undefined };
}


export function Update(user_id, user) {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.username){
        oldObj.username = user.username;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    return { ...oldObj, password: undefined };
}

export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

export function Login (username, password){
    console.log({ username, password})
    const user = list.find(x=> x.username == username);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that username" };

    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}