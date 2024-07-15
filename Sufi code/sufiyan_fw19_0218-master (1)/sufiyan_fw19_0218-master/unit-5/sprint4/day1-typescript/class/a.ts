const a: number = 2;
const b: string = "suFi";
const c: boolean = true;
const d : null = null;
const e : undefined = undefined;

const f: Array<number> = [1,2,36];
const f1: number[] = [1,2,3];

const f2: Array<string> = [ "sufi", "sufII", "X" ]
const f3: string[] = [ "sufi", "sufII", "X" ]

let h : number | string;
h = 1
h = "ss"

// or operator in TSC
const X: Array<string | number> = [ "sufi", 9 , 8, "sufII", "X" ]
 
//
const arrayOfArray : Array <Array <number | string >> = [
    [ 0, "suFi" ], 
    [ 0, "suFi" ], 
    [ 5, "suFi" ]
]


// tuple in typescript  // only two element cant add more 
// with respective position
const arrayOfArray2 : Array <[number , string, number | string]> = [
    [ 0, "suFi", 786 ], 
    [ 0, "Naaz", "786" ], 
    [ 0, "Saurabh", 786 ], 
    [ "5", "Saurabh", 786 ], // position changed err throw
]
// ? is used for optional keys in typescript

const arrayOfobject : Array<{ age: number ; name: string ; employeed : boolean; mobile?: {value : number}
}> = [
    { age : 21, name :  "suFi", employeed : true, mobile: { value : 5} },
    { age : 26,  name : "Nazmin", employeed : false  },
    { age : 25, name :  "Saurabh", employeed : true }
]
//arrayOfobject[0].mobile?.value

// tasks will be string , numbers are number
const lOld : {
    tasks : string[] ;
    numberS : number[]
} = {
    tasks : [],
    numberS : []
}

const lNew : Record<string , number[]> = {
    tasks : [],
    numberS : []
}

// == keys only in STRING and Value will be boolean always
const k : Record<string, boolean> = {
    loading : true, 
    err : false,
    ss : true,      
}


// array of specific  strings  if add others it will throw err 
// limited set of information

type Country =  "INDIA" | "USA"| "JAPAN"

const SX : Array< Country > = [
    "INDIA" , "USA" , "JAPAN", "SS"
]

//////////// NESTED TYPES ///////
type GENDER = "Male" | "Female" | "Shemale"

type User = { name : string ; age : number ; gender : GENDER}

const x : Array< User > = [
    {  name: "sufi", gender:"Male", age: 20  } , 
    {  name: "S", gender:"Shemale", age: 20  },
    {  name: "X", gender:"Male", age: 20  }
]


/// function returning number 
const add = (a: number, b: number): number => a+b;
add(1,2)

/// function returning undefined means 
// void = function that doesnd return anything  
const returnNothing = (a: number, b: number): void =>{
  console.log(a + b)
}
/////////////////// 

type Engine = "V8" | "4 Stroke" | "3 Stroke";
type EngineType = "Petrol" | "Desiel" | "CNG" | "EV";

class Car {
    constructor( types : number, engine : Engine, engineType : EngineType[] ){
        this.tyres = tyres
    }
}