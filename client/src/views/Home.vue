<template>
  <div class = "content">
  
  <div class="notification is-link is-light">
    <button class="delete" v-if="!Session.user"></button>
    <div v-else>
        Welcome Back {{this.Session.user.firstName}}!
    </div>
  </div>


   <h4> Your Daily Progress </h4>
  <progress class="progress is-link" value="30" max="100">30%</progress>

  <br>

  <router-link class="button is-link" to="/workouts" active-class="is-active">
        Add Workout
      </router-link>

      <br>
      <br>
      <br>
      

     <h4> Check out what your friends are up to today! </h4>

      <router-link class="button is-link" to="/friends" active-class="is-active">
       Friends Feed
      </router-link>

  
</div> 

</template>

<script>

import Session from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
   /* methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        }
    }, */
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}

</script>

<style>
h4 
{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}
</style>