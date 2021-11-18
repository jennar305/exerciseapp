<template>
  <div>
      <div class = "content">
    Search Users
      </div>     
<div class = "search"> 
    <input type="text" placeholder="Search">
      <button type="submit">Submit</button>
          </div>
<br>
<br>

<div class = "content">
  
My Friends

<p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
        <p class="subtitle is-6">{{post.user.handle}}</p>

        <div class="post" v-for=" (p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>
</div> 
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Delete, GetFeed } from "../services/posts";
export default {
    components: {
        Post
    },
    data: ()=> ({
        posts: []
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post.id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        }
    }
}
</script>

<style>
.img {  
    max-width: 20%;  
    padding: 0px;
    height: auto;  
  }  

  .search
  {
    overflow: hidden;
    background-color: #EDEAE9;
    padding: 5px;
  }
  .search input[type=text] {
  float: right;
  padding: 8px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}


</style>