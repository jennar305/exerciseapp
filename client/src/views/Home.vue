<template>
  <div class = "content">
  
  <div class="notification is-link is-light">
    <button class="delete" v-if="!Session.user"></button>
    <div v-else>
        Welcome Back {{this.Session.user.firstName}}!
    </div>
  </div>


Your Daily Progress
  <progress class="progress is-link" value="30" max="100">30%</progress>

  <br>
  
  <button class="button is-link">Add Workout</button>
  
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
    methods: {
        login(){
            // @ts-ignore
            this.$router.push('/login');
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            // @ts-ignore
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}

</script>