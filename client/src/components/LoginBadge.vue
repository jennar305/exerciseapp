<template>
    <div class="buttons" v-if="!Session.user">
          <a class="button is-link">
            <strong>Sign up</strong>
          </a>
          <a class="button is-link" @click="login">
            Log in
          </a>
    </div>
    <div v-else>
        Welcome Back {{name}} !
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
            this.$router.push('/login');
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
</style>
