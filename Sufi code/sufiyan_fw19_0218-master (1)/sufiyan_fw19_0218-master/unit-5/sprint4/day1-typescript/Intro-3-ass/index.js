var a = [1, 2, 3, 4,];
function getType(data) {
    return data.type;
}
var userinfo = {
    type: 'user',
    name: "Sufiyan",
    age: 21,
    occupation: "Student"
};

var user2info = {
    type: 'user',
    name: "Naaz",
    age: 32,
    occupation: "Student"
};


var admininfo = {
    type: "admin",
    name: "Masai",
    age: 3,
    role: "School"
};
console.log(getType(userinfo));
console.log(getType(admininfo));
