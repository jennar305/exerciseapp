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

.search button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 10px;
  background: aqua;
  font-size: 17px;
  border: none;
}
</style>