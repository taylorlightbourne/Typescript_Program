function log(message) {
    console.log(message);
}
var message = 'Hello World!';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
var count; // int or float
count = 5;
// boolean
//string
// any
// number[] = [1, 2, 3];
// any[] = [1, "hello world", true];
// enum - related consts in a container
var ColorRed = 1;
var ColorBlue = 2;
var ColorGreen = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// Type Assertions
var str = 'abc';
var endsWithC = str.endsWith('c');
var altEndsWithC = str.endsWith('c');
console.log(altEndsWithC);
// Arrow functions
var doLog = function (message) { return console.log(message); };
doLog(message);
//
var drawPoint = (point), _a = void 0, number = _a.x, number = _a.y;
{
    //...   
}
drawPoint({
    x: 1,
    y: 2
});
