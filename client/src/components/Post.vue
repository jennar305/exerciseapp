<template>
 <div class="columns">
        <div class="column is-one-third is-offset-one-third">
      <div class="card card5">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="post.src" :alt="post.alt">
      <button class="delete" @click="$emit('remove')"></button>
    </figure>
  </div>
  <div class="card-content">
    <div class="media media5">
      <div class="media-content">
        <p class="subtitle is-4">{{post.user_handle}}</p>
        <p class="subtitle is-6"><br>{{post.category}}<br></p>
      </div>
    </div>

    <div class="content">
      {{post.caption}}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Like</a>
    <a href="#" class="card-footer-item">Comment</a>
    <a href="#" class="card-footer-item">Share</a>
  </footer>
</div>    
</div> 
</div>
</template>

<script>
export default {
  props: {
        post: Object
    }
}
</script>

<style>
.card5 .media5 p{
  font-family: 'Times New Roman', Times, serif;
}
button.delete{
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>