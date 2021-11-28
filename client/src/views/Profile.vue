<template>
  <div class="container">
        <h1 class="title is-8"> Profile </h1>
          <div class="columns">
        <div class="column is-two-thirds">
            <div class="cards">
                <div class="card-content">
                      <form @submit.prevent="update()">
                        <div class="field">
                            <label class="label">Profile Picture</label>
                            <div class="control">
                              <input class="input" placeholder="Enter your username" v-model="users.pic">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Username: </label>
                            <div class="control">
                              <input class="input" placeholder="Enter your username" v-model="users.handle">
                            </div>
                          </div>
                       <div class="field">
                        <label class="label">Bio: </label>
                        <div class="control">
                          <textarea class="textarea" placeholder="Tell us about yourself!" v-model="users.bio"></textarea>
                        </div>
                     </div>
                     <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="users.isPublic" :value="true" />
                            Public Account
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="users.isPublic" :value="false" />
                            Private Account
                        </label>
                    </div>
                     </div>
                        <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-link">Enter New Information</button>
                          </div>
                        </div>
                        </form>
                    </div> 
            </div>
          </div>
        </div>
      </div>
 
</template>

<script>
import session from '../services/session'
import router from "../router";
import { GetByHandle } from '../services/users'
import { Update } from '../services/users'

export default {
    data: ()=> ({
      user: [],
      users: [],
      toRoute: '/profile'
  }),
  async mounted(){
    this.users = await GetByHandle(session.user.handle)
  },
  methods: {
    async Update(){
      const response = await Update(session.user.user_id, this.user);
      console.log({response});
      if(response){
          router.push(this.toRoute);
      }
    }
  },
  computed:{
        name(){
            // @ts-ignore
            return this.Session.user.handle;
        }
    }
}
</script>

<style>
.cards {
    margin-top: 20px;
    margin-left: 450px;
  }
.container h1 {
    font-family: 'Times New Roman', Times, serif;
    color: plum;
    font-size: 75px;
    text-align: center;
  }
.button{
  align-items: center;
}

.img {  
    max-width: 20%;  
    padding: 0px;
    height: auto;  
  }  
  
.button:hover, a:hover {
  opacity: 0.5;
}
    
</style>