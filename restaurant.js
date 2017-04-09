if (typeof(Storage) !== "undefined") {
var counter = 0;
var add = (function () {
    
    return function () {return counter += 1;}
})();
var subtract = (function () {
    
    return function () {return counter -= 1;}
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





