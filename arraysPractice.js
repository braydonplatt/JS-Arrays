//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and returns the first item the given array.

 var first = function(arr){
  return arr[0];
 }


//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.

var last = function(arr){
  return arr[arr.length - 1];
}
  alert(last(arr));

//Next Problem




//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

var reversedLooper = function(myArray){
  myArray.reverse(i);
  for (var i = 0; i < myArray.length; i++){
    alert(myArray[i]);
  }
};
reversedLooper(letters);

//Another Way 

var reversedLooper = function(myArray){
  for(var i = myArray.length -1 ; i > 0; i--)
  {
    console.log(myArray[i, -1]);
  };
};
//Next Problem
reversedLooper(letters);

var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

var evenFinder = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      arr.splice(i, 1);
      i--;
    };
  };
};


//Next problem


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).



var divider = function(arr, evens, odds){
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evens.push arr[i];
    } else {
      odds.push arr[i];
    };
  };
};



//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function
// named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true,
// if it's not, return false

var finder = function(array){
  for (var i = 0; i < array.length; i++) {
     var randomNum = getRandomArbitrary();
     console.log(randomNum);      
  if(array[i] === randomNum) {
    return true;
  };
    };
     return false;
};


//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

var reverseString = function(string){
  return string.split('').reverse().join('');
}



//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  var removeItem = function(list, item) {
     for(var i = 0; i < list.length; i++) {
       if (item === list[i]) {
         list.splice(i, 1);
           return list;
       }
     }
  }

  var addItem = function(list, item) {
     list.push(item);
       return(list);
  }

  var addItem2 = function(list, item) {
     if(list.indexOf(item) === -1) {
       list.push(item);
       return list;
   } else {
       return item + " is already on list" + list;
   }

  };

//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

var maker = function(){
  var newArr = [];
  for(var i = 1; i < 216; i++){
    newArr.push(i); 
  }
    return(newArr);
}



//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

var addTen = function(arr){
  for(var i = 0; i < arr.length; i++){
      arr[i] = parseInt (arr[i]) + 10;
}
     return arr;
};




//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}

//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.


var longestArray = function(arr1, arr2) {
  if(arr1.length > arr2.length){
    return arr1;
  } else if (arr1.length === arr2.length{
    return "Both Arrays are longest";
  } else {
      return arr2;
  }
};


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  var both = function (arr1, arr2){
    var newArray = arr1.concat(arr2);
    return newArray;
  };







  var nums = ["hello", "javascript", "awesome"]
  var finder = function(string, array){
        for(var i = 0; i < array.length; i++) {
          if(array[i] === string);{
            return true;
          }
        }
     return false;
  }

  finder('gary', words)
  clear()

  function oneLine (string, myArray) {
    return myArray.indexOf(string) > -1 ? true : false;
  }




OBJECTS

var whereFrom = ["St. George", "Provo", "STG", "Alpine", "Highland", "Houston", "Boise", "Orem", "Denver", "Atlanta"];
  for (var i = 0; i < whereFrom.length; i++){
    console.log(whereFrom[i]);
  }
  var myIndex = Math.round(Math.random(
    0,1)) * whereFrom.length);

var names = ['logan', 'robert', 'bryan', 'platt', 'Blake', 'stephen', 'Dan'];
   var goals = ['learn more', 'startups', 'to learn more', 'job', 'promotion', 'new Career Path', 'money'];
   var devClass = [];
   for (var i = 0; i < whereFrom.length; i++) {
    devClass.push(whereFrom[i]);
    devClass.push(names[i]);
    devClass.push(goals[i]);

   }
   console.log(devClass);
   devClass = [];

OBJECTS

   var bestTeacherEver = {};   <---- this is how we build an object. 

   bestTeacherEver.name = 'Jake Lingwall';
   bestTeacherEver.awesomeness = 94;
   bestTeacherEver.everEver = true;

   var bestTeacherEver = {
      name: "Jake Lingwall",
      awesomeness: 99,
      everEver: true
  }


  //key is how you look up names or data in an object: name, awesomeness, everEver.
  //value is the actual data: "Jake Lingwall", 99, true. 

  console.log 






var byu = {name: 'Brigham Young University', students: 33000, football: "Not Great"};
undefined
byu.name
"Brigham Young University"
byu.football
"Not Great"
var person ={};
undefined
person.name = "Jake"
"Jake"
person.hobbies = ['tennis', 'code', 'writing']
["tennis", "code", "writing"]
person.age = 25;
25
person.teachingSkill = 'lacking'
"lacking"
person
Object {name: "Jake", hobbies: Array[3], age: 25, teachingSkill: "lacking"}age: 25hobbies: Array[3]0: "tennis"1: "code"2: "writing"length: 3__proto__: Array[0]name: "Jake"teachingSkill: "lacking"__proto__: Object


var names = ['logan', 'robert', 'bryan', 'platt', 'Blake', 'stephen', 'Dan'];
   var goals = ['learn more', 'startups', 'to learn more', 'job', 'promotion', 'new Career Path', 'money'];
   var devClass = [];
   for (var i = 0; i < whereFrom.length; i++) {
    devClass.push(whereFrom[i]);
    devClass.push(names[i]);
    devClass.push(goals[i]);


   }

   console.log(devClass);
   devClass = {};

     devClass[me.name] = me;  //bracket notation.

for (key in devClass){
  console.log(key, devClass[key]);
}     //for in loop to find all the values in a object. 
// for (key in object){do something.}  - this will iterate over every property.

student['name'] === student.name //example of bracket notation.

var myObject = {name: "Not Page", age: 22}
  for (key in myObject){
    console.log(key);
  }

  for (whatIwanttolookat in myObject){
    console.log
  }





undefined
var rocky = {name: "Balboa"}
undefined
rocky.name
"Balboa"
rocky.sayName = function(){
  console.log('name');
}
function (){
  console.log('name');
}
rocky.sayName
function (){
  console.log('name');
}
rocky.sayName()
VM673:3 name
undefined
function (){
  console.log(this.name);
}


//this refers to the object
rocky.sayName = function() {
  console.log(this.name);
}
function () {
  console.log(this.name); //this is referring to the object.
}
rocky.sayName()
VM870:3 Balboa
undefined


var character = {species: "elf", hp: 1000};
character.weapon = "sword";

character.attach = function() {
  console.log("Jake the " + this.species + "attacked you with his " + this weapon)
}
character.attach()