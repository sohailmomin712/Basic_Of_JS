// console.log("hii")

function bankserver() {
  return false;
}
let PromiseCheck = new Promise(function (resolve, reject) {
  let pin = bankserver();

  setTimeout(function () {
    if (pin) {
      resolve("payment successfull");
    } else {
      reject("Try again later");
    }
  }, 3000);
});
//hamdling the promise using then and catch
let image = document.getElementById("image_url");

PromiseCheck.then(function (res) {
  console.log(res);
  image.src = "https://media.tenor.com/xVfFIHxAzW4AAAAC/success.gif";
});

PromiseCheck.catch(function(rej){
    console.log(rej)
    image.src="https://media.tenor.com/voHFmiEPAioAAAAC/failure.gif"
})

async function content() {
  try {
    let result = await PromiseCheck;
    console.log(res);
    image.src = "https://media.tenor.com/xVfFIHxAzW4AAAAC/success.gif";
  } catch (err) {
    console.log(err);
    image.src = "https://media.tenor.com/voHFmiEPAioAAAAC/failure.gif";
  }
}
content();
