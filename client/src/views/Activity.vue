<template>
  <div class = "content">
  
Your Daily Progress:
  <progress class="progress is-link" value="30" max="100">30%</progress>

  <a class= "button is-link"> Add Workout </a>

  <br>
  <br>

  Your Weekly Progress:
  <progress class="progress is-link" value="30" max="100">30%</progress>

  <div class="steps">
    <article class="message">
      <div class="message-header">
        <p>Total Steps</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        <img src="../assets/images/steps.png">
       <h6 class = "title"> Steps </h6> 
      </div>
    </article>
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
  
  .steps
  {
    text-align: center;
  }
  
.steps .message-header
{
  text-align: center;
}

.title
{
  font-family: 'Times New Roman', Times, serif;
    
}
</style>