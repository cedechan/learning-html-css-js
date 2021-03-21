
// Hey baby ;) You're doing an amazing job. Keep up the good work <3 <3 <3



// function getAverage (a,b){

//     var average = (a + b) / 2; //local variable
//     console.log(average);
//     return average;
// }

// var myResult = getAverage(7,8); // global variable 
// console.log("the average is " + myResult);

// function logResult(){

//     console.log("the average is " + myResult + " inside the function");
    
// }

// logResult();


// var myString = 'I\'m a "fun" string';

// console.log (myString);

// var tags = "meat, ham, pork, beef, salami, salmon, chicken";

// var tagsArray = tags.split (",");

// tagsArray; 


// var myArray = [
// ]
// myArray[0] = 25






// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(1, 3))


// var blah = sum(1, 3)
// console.log(blah)



//New Object Lesson

var myArray = new Array();
myArray[0] = 8 ; 
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Celeste";
myCar.drive = function(){ console.log("now driving!");};

myCar.drive();

var myCar2 = {
    maxSpeed: 70, 
    driver: "Celeste", 
    drive: function(speed, time){ 
        console.log(speed * time);} 
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 4);
