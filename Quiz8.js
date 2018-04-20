var x1 = function (){
    return "Blah!";
};
console.log("x1")
 var x2 = x1 ();

function x3 (arg) {
    return arg;
}

var x4 = x3(x1);
var x5 = x3(x2);
var x6 = x3(x1());

