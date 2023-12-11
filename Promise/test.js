function Banksever() {
  return true; //false
}
let Pay_Promise = new Promise(function (resolve, reject) {
  let pin = Banksever();

  setTimeout(function () {
    if (pin) {
      resolve("Payment successful");
    } else {
      reject("Payment Unsuccessful");
    }
  }, 3000);
})
  //handling the promise
  let image = document.getElementById("Payment_Image");
  
  Pay_Promise.then(function (res) {
    console.log(res);
    image.src="https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd.gif";
  });

  Pay_Promise.catch(function (rej) {
    console.log(rej);
    image.src ="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1";
  });