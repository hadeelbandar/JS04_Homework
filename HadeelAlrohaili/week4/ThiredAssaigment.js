/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
  Days
Year
 Months

time  // every day have 24 hours 
PersonDetails{firstName,LastName,MobileNumber}
getDay pointer to point for the day 
getAppointmentList
Answer 
//Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

 //Object
 var Owner = {
name:"Name",
address:{streetnumber:2345}
 };
  //Array of Objects
var  objArray=[{},{}]
var array=["Groucho","humane"]



  // Answer Starts Here

  var pet_owner = [
    { owner: "Groucho", description:"humane " , name: "hadeel" , address:"h34 st"},

];
  // Answer Ends Here
  
  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.


  
  // Answer Starts Here
  var some_pet = [
    { pet: "Pomeranian", Description:"The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe" , name: "cece" , species:"Samoyed, Alaskan Malamute" ,breed:"Dog " , noise: "bark"},

];
for ( var i = 0; i < some_owner.length; i++ ) {
    var i = some_owner[ i ];
    console.log( i.owner, i.description , i.name, i.address );
}
  
  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  
  var Pet;
  // Answer Starts Here
  
  // Answer Ends Here
  
  module.exports = {
    answerTwo: pet_owner,
    answerThree: some_pet,
    answerFour: Pet
  }
  
  function pet (name ,spacise ,breed ,noise){
this.name = Aname ;
this.spacise = Aspacise;
this.berrd = Abreed;
this.noise = Anosise

  } 



  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////