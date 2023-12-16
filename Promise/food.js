let counter = 0;

function orderfood() {
  let display = document.getElementById("Display_food");
  display.innerHTML = null;

  let ordered_id = document.getElementById("orderid");
  ordered_id.innerHTML = null;

  let food = document.getElementById("Food").value;
  let store = "open";
  let time = Math.random() * 4000;

  if (counter >= 10) {
    store = "close";
  }

  let food_promise = new Promise(function (resolve, reject) {
    if (store == "close") {
      reject("MacDonald is closed");
    } else {
      setTimeout(function () {
        resolve(food);
      }, time);
    }
  });

  let image = document.createElement("img");
  let tag = document.createElement("h2");
  let orderid_Num = document.createElement("p");
  let id = Math.floor(Math.random() * 20 + 1);

  food_promise.then(function (res) {
    switch (res) {
      case "Pizza":
        image.src =
          "https://b.zmtcdn.com/data/pictures/chains/4/19008304/9c66c9fea4bfd0d60b21835d85107d34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Burger":
        image.src =
          "https://b.zmtcdn.com/data/pictures/5/19720445/4c5c0db2322b19627c7cbeee66d2d3d8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Paneer-Tikka":
        image.src =
          "https://thumbs.dreamstime.com/b/tandoori-paneer-tikka-marinated-cheese-cubes-spices-yogurt-indian-dish-188315528.jpg";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Matar-Paneer":
        image.src =
          "https://thumbs.dreamstime.com/b/indian-meal-matar-paneer-served-poori-indian-main-course-matar-paneer-cottage-cheese-peas-curry-served-fried-114181143.jpg";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Manchurian":
        image.src =
          "https://thumbs.dreamstime.com/b/vegetable-manchurian-fried-rice-indian-healthy-food-54892569.jpg";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Momos":
        image.src =
          "https://thumbs.dreamstime.com/b/vegeterian-momos-fried-vegetarian-tibetan-momo-s-india-35742428.jpg";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Chaomeen":
        image.src =
          "https://media.gettyimages.com/photos/beef-broccoli-chow-mein-picture-id184317874?k=20&m=184317874&s=612x612&w=0&h=GcSS6jjlPd3XTaLVV5k6VFATvbEk7B4nCIglutJdvjU=";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Fried-rice":
        image.src =
          "https://media.gettyimages.com/photos/vegetarian-fried-rice-with-vegetables-healthy-picture-id157646162?k=20&m=157646162&s=612x612&w=0&h=3cjE3yHSnUcSbjGQ173AQYbvL3MO7_fxTk7tt4Mu4ws=";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Ice-cream":
        image.src =
          "https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1313871755?b=1&k=20&m=1313871755&s=170667a&w=0&h=dg2P5aDxBUfB_zrNSzLOcMHJxANbJ3ol12gg6DjHHOc=";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;

      case "Juice":
        image.src =
          "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        tag.innerText = `Your ${food} is ready!`;
        orderid.innerText = `Order id:  #${id}`;
        Display_food.append(image, tag);
        orderid.append(orderid_Num);
        break;
    }
  });

  food_promise.catch(function (error) {
    image.src =
      "https://th.bing.com/th/id/OIP.8rbNrekVky9iCPAD3HIk3wHaEK?w=321&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7";
    tag.innerText = error;
    display.append(image, tag);
  });
  counter++;
}
