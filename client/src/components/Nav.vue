<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/exercise.gif" height="100">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu " :class="{'is-active': isActive }">
    <div class="navbar-start">
      <router-link class="navbar-item is-tab" to="/" active-class="is-active">
        Home
      </router-link>
       
      <router-link class="navbar-item is-tab" to="/activity" active-class="is-active">
        Activity
      </router-link>

      <router-link class="navbar-item is-tab" to="/workouts" active-class="is-active">
        Workouts
      </router-link>

      <router-link class="navbar-item is-tab" to="/meals" active-class="is-active">
        Meals
      </router-link>

      <router-link class="navbar-item is-tab" to="/profile" active-class="is-active">
        Profile
      </router-link>

      <router-link class="navbar-item is-tab" to="/friends" active-class="is-active">
        Friends
      </router-link>
    </div> 

    <div class="navbar-end">
      <div class="navbar-item">
        <login-badge />
        <logout-badge />
        <signup-badge />
      </div>
    </div>
  </div>
</nav>

</template>

<script>
import LoginBadge from './LoginBadge';
import LogoutBadge from './LogoutBadge.vue'
import SignupBadge from './SignupBadge';

export default {
    data(){
        return {
            isActive: false
        }
    },
    components: {
        LoginBadge,
        LogoutBadge, 
        SignupBadge
    }
}
</script>

<style>
</style>