<template>
  <div class = "content">
<br>
<br>
<br>
  <div class="profile">
    <img src="https://bulma.io/images/placeholders/128x128.png">
    <h1> username </h1>
    <p>Bio</p>
    
    <p><button>Edit Profile</button></p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.img {  
    max-width: 20%;  
    padding: 0px;
    height: auto;  
  }  
  
  .profile {
  max-width: 500px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}


.button:hover, a:hover {
  opacity: 0.5;
}

</style>