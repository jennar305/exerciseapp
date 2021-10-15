<template>
<div>
  <div class = "content">
    <br>
    <div class = "search"> 
        <button type="submit">Submit</button>
        <input type="text" placeholder="Search">
    </div>
    <br>
    
<h2 class ="title"> Daily Calorie Intake: </h2>
  <progress class="progress is-link" value="50" max="100">50%</progress>

  <br>
  
  <button class="button is-link">Add Meal</button>
</div>

  <div class = "meal-ideas">
    <h3 class ="title"> Recipe Ideas </h3> 

    <div class ="breakfast"> 
       <h3 class="title"> Breakfast </h3> 

        <figure class="meal-image">
            <img src="../assets/images/breakfast/AvocadoToast.webp" width= "200px" length= "300px">
            <figcaption>Avocado Toast</figcaption>
          </figure>
        
          <figure class="meal-image">
            <img src="../assets/images/breakfast/FruitSmoothie.jpg" width= "200px" length= "300px">
            <figcaption>Fruit Smoothie</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/OvernightChiaSeedOatmeal.webp" width= "200px" length= "300px">
            <figcaption>Chia Seed Oatmeal</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/AcaiBowl.jpg" width= "200px" length= "300px">
            <figcaption>Acai Bowl</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/HoneyAppleToast.webp" width= "200px" length= "300px">
            <figcaption>Honey Apple Toast</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/SpinachandFetaBreakfastWrap.webp" width= "200px" length= "300px">
            <figcaption>Breakfast Wrap</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/CinnamonPancakes.webp" width= "200px" length= "300px">
            <figcaption>Cinnamon Pankcakes</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/OatmealPumpkin.webp" width= "200px" length= "300px">
            <figcaption>Oatmeal Pumpmkin Muffins</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/BerryParfait.jpg" width= "200px" length= "300px">
            <figcaption>Berry Yogurt Parfait</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/HashBrowns.jpg" width= "200px" length= "300px">
            <figcaption>Sweet Potato Hashbrowns</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/EnglishMuffinPizzas.jpg" width= "200px" length= "300px">
            <figcaption>English Muffin Breakfast Pizzas</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/breakfast/BreakfastBananaSplit.webp" width= "200px" length= "300px">
            <figcaption>Breakfast Banana Split</figcaption>
          </figure>
    </div>
    
    <br>
    <br>
    
    <div class ="lunch"> 
        <h3 class="title">Lunch</h3>
        <figure class="meal-image">
            <img src="../assets/images/lunch/MediterraneanGrilledChicken.jpg" width= "200px" length= "300px">
            <figcaption>Mediterranean Grilled Chicken Salad</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/PeaSoup.jpg" width= "200px" length= "300px">
            <figcaption>Slow Cooker Split Pea Soup</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/ChickenWrap.jpg" width= "200px" length= "300px">
            <figcaption>Asian Chicken Lettuce Wraps</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/AvocadoChickenSalad.jpg" width= "200px" length= "300px">
            <figcaption>Avocado Chicken Salad</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/SpicySalmon.jpg" width= "200px" length= "300px">
            <figcaption>Spicy Salmon Bowl</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/TunaMelt.jpg" width= "200px" length= "300px">
            <figcaption>Tuna Melt Sandwich</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/EggSalad.jpg" width= "200px" length= "300px">
            <figcaption>Egg Salad Sandwich</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/ZucchiniSushi.jpg" width= "200px" length= "300px">
            <figcaption>Zucchini Sushi</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/ChickenBurger.jpg" width= "200px" length= "300px">
            <figcaption>Chicken Burger</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/StrawberrySpinachSalad.jpg" width= "200px" length= "300px">
            <figcaption>Strawberry Spinach Salad</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/ShrimpSalad.jpg" width= "200px" length= "300px">
            <figcaption>Shrimp Salad Stuffed Avocado</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/lunch/ReubenWraps.jpg" width= "200px" length= "300px">
            <figcaption>Reuben Wraps</figcaption>
          </figure>
    </div>
    
    <br>
    <br>
    
    <div class ="dinner"> 
        <h3 class="title"> Dinner </h3>
        <figure class="meal-image">
            <img src="../assets/images/dinner/BlackBeanBurger.jpg" width= "200px" length= "300px">
            <figcaption>Black Bean Burger</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/LemonChicken.jpg" width= "200px" length= "300px">
            <figcaption>Lemon Chicken</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/PanFriedTilapia.jpg" width= "200px" length= "300px">
            <figcaption>Pan-Fried Tilapia</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/ItalianSausageZucchini.jpg" width= "200px" length= "300px">
            <figcaption>Italian Sausage Stuffed Zucchini</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/ChickenParmPepper.jpg" width= "200px" length= "300px">
            <figcaption>Chicken Parm Stuffed Peppers</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/TuscanButterRoastChicken.jpg" width= "200px" length= "300px">
            <figcaption>Tuscan Butter Roast Chicken</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/HoneyWalnutShrimp.jpg" width= "200px" length= "300px">
            <figcaption>Honey Walnut Shrimp</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/ZucchiniLatticeLasagna.jpg" width= "200px" length= "300px">
            <figcaption>Zucchini Lattice Lasagna</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/ChickenCasserole.jpg" width= "200px" length= "300px">
            <figcaption>Chicken Casserole</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/CilantroLimeSalmonBowls.jpg" width= "200px" length= "300px">
            <figcaption>Cilantro Lime Salmon Bowls</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/CapreseZoodles.jpg" width= "200px" length= "300px">
            <figcaption>Caprese Zoodles</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dinner/CauliflowerGrilledCheese.jpg" width= "200px" length= "300px">
            <figcaption>Cauliflower Grilled Cheese</figcaption>
          </figure>
    </div>
    
    <br>
    <br>
    
    <div class ="dessert"> 
        <h3 class="title"> Dessert </h3>
        <figure class="meal-image">
            <img src="../assets/images/dessert/PeanutButterOatmealBars.jpg" width= "200px" length= "300px">
            <figcaption>Peanut Butter Oatmeal Bars</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/ChocolatePudding.jpg" width= "200px" length= "300px">
            <figcaption>Dark Chocolate Pudding</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/ChocolateCoveredBananas.jpg" width= "200px" length= "300px">
            <figcaption>Chocolate Covered Bananas</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/OatmealCookies.jpg" width= "200px" length= "300px">
            <figcaption>Oatmeal Cookies</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/ChocolateZucchiniCake.jpg" width= "200px" length= "300px">
            <figcaption>Chocolate Zucchini Cake</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/ChickpeaCookieDough.jpg" width= "200px" length= "300px">
            <figcaption>Chickpea Cookie Dough</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/RoastedPeaches.jpg" width= "200px" length= "300px">
            <figcaption>Roasted Peaches</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/PumpkinMonsterCookies.jpg" width= "200px" length= "300px">
            <figcaption>Pumpkin Monster Cookies</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/ChocolateHummus.jpg" width= "200px" length= "300px">
            <figcaption>Chocolate Hummus</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/Cheesecake.jpg" width= "200px" length= "300px">
            <figcaption>Greek Yogurt Cheesecake</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/AppleCake.jpg" width= "200px" length= "300px">
            <figcaption>Apple Cake with Cream Cheese Frosting</figcaption>
          </figure>

          <figure class="meal-image">
            <img src="../assets/images/dessert/PlumCrisp.jpg" width= "200px" length= "300px">
            <figcaption>Plum Crisp</figcaption>
          </figure>
</div>
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
  
  .header
{
    font-family: 'Times New Roman', Times, serif;
    font-size: 50px;
    padding: none;
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
  cursor: pointer;
}

h2{
  font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    color: aquamarine;
    background-color: #EDEAE9;
}

h3
{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    color: black;
    background-color: #EDEAE9;
    text-align: center;
}
.meal-image
{
    display:inline-block;
    margin-right:10px;
}

.figure{
    display:center;
    margin-right:10px;
}

figcaption {
    background-color: black;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
}

</style>