if (typeof(Storage) !== "undefined") {
var counter = 0;
var add = (function () {
    
    return function () {return counter += 1;}
})();
var subtract = (function () {
    
    return function () {return counter -= 1;}
})();

if (typeof(Storage) !== "undefined") {
var counter1 = 0;
var add1 = (function () {
    
    return function () {return counter1 += 1;}
})();
var subtract1 = (function () {
    
    return function () {return counter1 -= 1;}
})();

if (typeof(Storage) !== "undefined") {
var counter2 = 0;
var add2 = (function () {
    
    return function () {return counter2 += 1;}
})();
var subtract2 = (function () {
    
    return function () {return counter2 -= 1;}
})();

function ADD(){
    document.getElementById("demo").innerHTML = add();
}
function SUBTRACT(){
    document.getElementById("demo").innerHTML = subtract();
}
} else {
    // Sorry! No Web Storage support..
}

function ADD1(){
    document.getElementById("demo1").innerHTML = add1();
}
function SUBTRACT1(){
    document.getElementById("demo1").innerHTML = subtract1();
}
} else {
    // Sorry! No Web Storage support..
}

function ADD2(){
    document.getElementById("demo2").innerHTML = add2();
}
function SUBTRACT2(){
    document.getElementById("demo2").innerHTML = subtract2();
}
} else {
    // Sorry! No Web Storage support..
}