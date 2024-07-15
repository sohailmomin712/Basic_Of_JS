const a:Array<number>=[1,2,3,4,]

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}


interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
 function getType(data:User | Admin):string{
     return data.type
 }
let userinfo:User={
    type:'user',
    name:"Sufiyan",
    age:21,
    occupation:"Student"
}

var user2info = {
    type: 'user',
    name: "Naaz",
    age: 32,
    occupation: "Student"
};

let admininfo:Admin={
    type:"admin",
    name:"Masai",
    age:3,
    role:"School"
}
console.log(getType(userinfo));
console.log(getType(admininfo))