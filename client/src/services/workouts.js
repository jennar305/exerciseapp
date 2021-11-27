import { api } from "./myFetch";


export function GetAll() { return api('workouts'); }

export function GetWorkoutWall(handle) {
    return api('workouts/wall/' + handle);
}

export function Get(workouts_id) { return api('workouts/' + workouts_id); }

export function GetByHandle(handle) { return  api('workouts/byhandle/' + handle); }

export function Add(workouts) {
    return api('workouts', workouts);
}

export function Update(workouts_id, workouts) {
    return api('workouts/' + workouts_id, workouts, 'PATCH');
}

export function Delete(workouts_id) {
    return api('workouts/' + workouts_id, {}, "DELETE");
}