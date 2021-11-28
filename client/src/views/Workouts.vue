<template>
  <div class = "content">
  
<br>
<div class = "search"> 
    <h3 class="heading"> Workouts </h3>
    <button type="submit">Submit</button>
    <input type="text" placeholder="Search">
</div>
<br>

<div>
Your Weekly Progress:
  <progress class="progress is-link" value="30" max="100">30%</progress>

  <br>

  <div class="steps">
    <article class="message">
      <div class="message-header">
        <p>Total Steps</p>
        <button class="delete" aria-label="delete"></button>
      </div>


      <div class="message-body">
       <img src="../assets/images/steps.png" width="50" height="50">
       <h6 class = "title"> Steps </h6> 
      </div>
    </article>
  </div>
  </div>
<br>
<br>
<!---<div class = "workout" v-for=" (w) in workouts" :key="w.src"> 

<workouts :new-workout="newWorkout" @add="add()" /> --->
    <div class ="arms" > 
       <h3 class="title">Arms </h3> 

        <figure class="workout-image">
           <!-- <img :src= "images.bicep" width= "200px" length= "300px"> -->
            <figcaption>Bicep Curl</figcaption>
          </figure>
        
         <figure class="workout-image">
            <img :src= "'https://thumbs.dreamstime.com/z/bench-press-exercise-chest-man-doing-workout-bench-press-exercise-chest-man-doing-workout-barbell-bodybuilder-157558597.jpg'" width= "200px" length= "300px">
            <figcaption>Bench Press</figcaption>
          </figure>

          <figure class="workout-image">
            <img src= "@/assets/images/workouts/TricepExtension.png" width= "200px" length= "300px">
            <figcaption>Tricep Extension</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/ReverseFly.webp" width= "200px" length= "300px">
            <figcaption>Reverse Fly</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/PullUps.jpg" width= "200px" length= "300px">
            <figcaption>Pull Ups</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/PushUps.jpg" width= "200px" length= "300px">
            <figcaption>Push Ups</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/TricepDips.jpg" width= "200px" length= "300px">
            <figcaption>Tricep Dips</figcaption>
          </figure>
    </div>
    
    <br>
    
    <div class ="back-and-shoulders"> 
        <h3 class="title">Back & Shoulders </h3>
        <figure class="workout-image">
            <img src="../assets/images/workouts/LatPullDown.jpg" width= "200px" length= "300px">
            <figcaption>Lat PullDown</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/ShoulderPress.jpg" width= "200px" length= "300px">
            <figcaption>Shoulder Press</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/Shrugs.jpg" width= "200px" length= "300px">
            <figcaption>Shoulder Shrugs</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/BackFly.webp" width= "200px" length= "300px">
            <figcaption>Back Fly</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/Rows.jpg" width= "200px" length= "300px">
            <figcaption>Rows</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/FrontRaise.jpg" width= "200px" length= "300px">
            <figcaption>Front Raise</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="../assets/images/workouts/LateralRaise.jpg" width= "200px" length= "300px">
            <figcaption>Lateral Raise</figcaption>
          </figure>
          
    </div>
    
    <br>
    
    <div class ="abs"> 
        <h3 class="title"> Abs </h3>
        <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Crunches</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Sit Ups</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Bicycle Crunches</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Russian Twists</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Plank</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Plank Leg Raises</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Scissors</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Reverse Crunch</figcaption>
          </figure>
    </div>

    <br>
    
    <div class ="butt"> 
        <h3 class="title"> Legs & Butt </h3>
        <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Donkey Kicks</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Squats</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Sumo Squats</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Lunges</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Side Legs Raises</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Calf Raise</figcaption>
          </figure>

          <figure class="workout-image">
            <img src="https://bulma.io/images/placeholders/128x128.png">
            <figcaption>Glute Bridge</figcaption>
          </figure>
    </div>

</div>


</template>

<script>
/*
import Workouts from '../services/workouts'
import { GetWorkoutWall } from '../services/workouts'
import session from '../services/session'
export default {
  components: {
        Workouts
    },
  data: ()=> ({
    workouts: []
  }),
  async mounted(){
    this.workouts = await GetWorkoutWall(session.user.handle)
  },
} */


</script>

<style>
.img {  
    max-width: 20%;  
    padding: 0px;
    height: auto;  
  }  

  .header
{
    font-family: 'Times New Roman', Times, serif;
    font-size: 50px;
    padding: none;
}

  .search
  {
    overflow: hidden;
    background-color: gainsboro;
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


.title
{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}
.workout-image
{
    display:inline-block;
    margin-right:5px;
}
</style>