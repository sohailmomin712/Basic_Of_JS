var a = 2;
var b = "suFi";
var c = true;
var d = null;
var e = undefined;
var f = [1, 2, 36];
var f1 = [1, 2, 3];
var f2 = ["sufi", "sufII", "X"];
var f3 = ["sufi", "sufII", "X"];
var h;
h = 1;
h = "ss";
// or operator in TSC
var X = ["sufi", 9, 8, "sufII", "X"];
//
var arrayOfArray = [
    [0, "suFi"],
    [0, "suFi"],
    [5, "suFi"]
];
// tuple in typescript  // only two element cant add more 
// with respective position
var arrayOfArray2 = [
    [0, "suFi", 786],
    [0, "Naaz", "786"],
    [0, "Saurabh", 786],
    ["5", "Saurabh", 786], // position changed err throw
];
// ? is used for optional keys in typescript
var arrayOfobject = [
    { age: 21, name: "suFi", employeed: true, mobile: { value: 5 } },
    { age: 26, name: "Nazmin", employeed: false },
    { age: 25, name: "Saurabh", employeed: true }
];
//arrayOfobject[0].mobile?.value
// tasks will be string , numbers are number
var lOld = {
    tasks: [],
    numberS: []
};
var lNew = {
    tasks: [],
    numberS: []
};
// == keys only in STRING and Value will be boolean always
var k = {
    loading: true,
    err: false,
    ss: true
};
var SX = [
    "INDIA", "USA", "JAPAN", "SS"
];
var x = [
    { name: "sufi", gender: "Male", age: 20 },
    { name: "S", gender: "Shemale", age: 20 },
    { name: "X", gender: "Male", age: 20 }
];
/// function returning number 
var add = function (a, b) { return a + b; };
add(1, 2);
/// function returning undefined means 
// void = function that doesnd return anything  
var returnNothing = function (a, b) {
    console.log(a + b);
};
var Car = /** @class */ (function () {
    function Car(types, engine, engineType) {
        this.tyres = tyres;
    }
    return Car;
}());
