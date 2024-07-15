
const nodemailer = require("nodemailer")

const emailUser =  "eda.osinski@ethereal.email"
const emailPass =  "D1MbDjuJ1YhVf1kwuq"

// eda.osinski@ethereal.email

// it will check user exist if user exist then it will send mail
const transport = nodemailer.createTransport({
    host : "smtp.ethereal.email",
    port : 587,
    auth : {
        user: emailUser,
        pass: emailPass
    }
})

transport.sendMail({
    to : "nrupul@gmail.com",
    from : "naaz@gmail.com",
    subject : "JADU",
    text : "DONE",
    

}).then(()=>{
    console.log("mail send success")
})