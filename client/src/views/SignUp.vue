<template>
<div class="signup">
      <div class="columns">
        <div class="column is-two-thirds">
            <div class="cards">
                <div class="card-content">
                            <p class="title">Sign up</p>

                            <div class="field">
                            <label class="label">Profile Picture</label>
                            <div class="control">
                              <input class="input" placeholder="Enter your username" v-model="user.pic">
                            </div>
                        </div>
                    <div class="content">
                      <form @submit.prevent="signup()">
                        <div class="field">
                            <label class="label">First Name: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter your first name" v-model="user.firstName">
                            </div>
                          </div>
                        <div class="field">
                            <label class="label">Last Name: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter your last name" v-model="user.lastName">
                            </div>
                          </div>
                        <div class="field">
                            <label class="label">Username: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter a username" v-model="user.handle">
                            </div>
                          </div>
                        <div class="field">
                            <label class="label">Password: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter a password" v-model="user.password">
                            </div>
                          </div>
                        <div class="field">
                            <label class="label">Email Address: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter your email" v-model="user.email">
                            </div>
                          </div>
                          <div class="field">
                            <label class="label">Bio:</label>
                            <div class="control">
                              <textarea class="textarea" placeholder="Tell us about yourself!" v-model="user.bio"></textarea>
                            </div>
                          </div>
                          <div class="field">
                            <div class="control">
                                <label class="radio">
                                <input type="radio" name="question" v-model="user.isPublic" :value="true" />
                                    Public Account
                                </label>
                            <label class="radio">
                            <input type="radio" name="question" v-model="user.isPublic" :value="false" />
                            Private Account
                            </label>
                            </div>
                            </div>
                        <footer class="card-footer">
                          <button class="button is-link card-footer-item" type="submit">Sign Up!</button>
                        </footer>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import router from "../router";
import { Add } from '../services/users';
export default {
  data: ()=> ({
        user: [],
        toRoute: '/login'
    }),
    methods: {
        async signup(){
            const response = await Add(this.user);
            console.log({response});
            if(response){
                this.user.unshift(this.user);
                router.push(this.toRoute);
            }
        }
    }
}
</script>

<style>

</style>