import { api } from "./myFetch";

export function Update(profile_id, profile) {
    return api('profile/' + profile_id, profile, 'PATCH');
}

export function GetAll() {
    return api('profile');
 }

export function Get(profile_id) { return api('profiles/' + profile_id); }
export function Edit(profile) {
  
  
        return api('profile', profile);
    }