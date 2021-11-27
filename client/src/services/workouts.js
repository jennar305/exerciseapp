import { api } from "./myFetch";


export function GetAll() { return api('exerciseName'); }

// @ts-ignore
export function Get(exerciseName) { return api('exerciseName/' + exerciseName); }

export function GetByHandle(handle) { return  api('exerciseName/byhandle/' + handle); }

export function GetWorkoutWall(handle) {
    return api('workout/wall/' + handle);
}

export function Add(exerciseName) {
    return api('exerciseName', exerciseName);
}

export function Delete(exerciseName) {
    // @ts-ignore
    return api('exerciseName/' + exerciseName, {}, "DELETE");
}