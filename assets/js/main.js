// // Define an array of colors for the sparks
// var colors = ["#004d7a", "#008793", "#00bf72", "#a8eb12"];

// // Define the number of sparks to create
// var numSparks = 100;

// // Create the sparks
// for (var i = 0; i < numSparks; i++) {
//   // Create a new div for the spark
//   var spark = document.createElement("div");
//   spark.classList.add("spark");
  
//   // Set the color of the spark randomly
//   var colorIndex = Math.floor(Math.random() * colors.length);
//   spark.style.backgroundColor = colors[colorIndex];
  
//   // Set the position of the spark randomly
//   spark.style.top = Math.random() * 100 + "%";
//   spark.style.left = Math.random() * 100 + "%";
  
//   // Set the animation delay and duration randomly
//   spark.style.animationDelay = Math.random() * 2 + "s";
//   spark.style.animationDuration = Math.random() * 3 + "s";
  
//   // Add the spark to the backdrop
//   document.getElementById("backdrop").appendChild(spark);
// }
