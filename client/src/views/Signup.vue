<template>
<div>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

    <div class="field">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
    </div>

    <div class="field">
        <div class="control">
        <button class="button is-link is-light">Cancel</button>
    </div>
</div>


</template>

<script>
import { Add } from '../services/users';
import router from "../router";
export default {
  data: ()=> ({
        user: [],
        toRoute: '/login'
    }),
    methods: {
        async register(){
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
.card2{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
    }
    .title1{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title1 span{
      color: darkcyan;
      font-size: 60px;
    }
    .card2 .media2 .media-content{
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>