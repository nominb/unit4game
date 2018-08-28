//start funciton
$("#startButton").on("click", function() {


//Variables//
//Generates random number 
  var targetNumber = Math.floor(Math.random() * 53) +21;
  var win = 0;
  var loss = 0;


//values that input number to calculate
  $("#number-to-guess").text(targetNumber);

//starts over to loop the images
  $("#crystals").empty();


  //Creating multiple crystals each with their own unique number value.
    var number1=Math.floor(Math.random()*11+1);
    var number2=Math.floor(Math.random()*11+1);
    var number3=Math.floor(Math.random()*11+1);
    var number4=Math.floor(Math.random()*11+1);
    console.log (random)

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) 
  {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<image>");
    // var imageCrystal = $("<image1>");
    // var imageCrystal = $("<image>");
    // var imageCrystal = $("<image1>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");


    // Each imageCrystal will be given a src link to the crystal image
    if (i === 0){
       imageCrystal.attr("src","assets/images/image.jpg"); 
    }else if (i ===1) {
       imageCrystal.attr("src","assets/images/image1.jpg"); 
    }else if (i ===2) {
        imageCrystal.attr("src","assets/images/image2.jpg");
    }else if (i ===3) {
        imageCrystal.attr("src","assets/images/image3.jpg");
    }
    

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    counter += increment;


    alert("New score: " + counter);

    if (counter === targetNumber) {

      alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
      }

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    //display target number
    $("counter").html(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.



  });

});