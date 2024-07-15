

// Object.create()


let web19 = {

    school_name: "Masai School",
 
}

let s1 = Object.create(web19);
s1.name = "sufi"
s1.studentid = "fw19-0218"


let s2 = Object.create(web19);
s2.name = "meher meri jaan"
s2.studentid = "fw19-0518"



console.log(s1)
console.log(s2)
