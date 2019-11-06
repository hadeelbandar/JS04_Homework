console.log("JS connected"); // this to check that our script is connected to out HTML
// query select body 
var body = document.getElementsByTagName("body")[0];

// change the backgroundColor to a color of your choice
body.style.backgroundColor ="green";

// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties

$(.body).css('font-family':'Arial,sans-serif');



var nickname = document.getElementById("nickname") ;// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
nickname.innerHTML = "give him what he needs  ";
nickname.style.color = "blue";
// query select favorites byID
document.getElementById("favorites").innerHTML="Nothing";
Document.getElementById("favorites").style.color="blue";
// query select hometown byID
document.getElementById("hometown").innerHTML="Riyadh";
Document.getElementById("hometown").style.color="blue";
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL



// https://www.w3schools.com/jsref/prop_style_color.asp