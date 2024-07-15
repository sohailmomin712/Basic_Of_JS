let arr = JSON.parse(localStorage.getItem("Database")) || [];

  function storeData() {
    event.preventDefault();

    let form = document.getElementById("Students_Data");

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let data = new NewData(name, course, unit, image, batch);
    arr.push(data);
    localStorage.setItem("Database", JSON.stringify(arr));
  }

  function NewData(n, c, u, i, b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
  }

  function calculate() {
    let arr = JSON.parse(localStorage.getItem("Database")) || [];

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].batch] !== 0) {
        obj[arr[i].batch] = 0;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      obj[arr[i].batch]++;
    }

    let key = JSON.stringify(obj);
    document.querySelector("#BATCH").innerHTML = key;
    console.log(obj);
  }

  calculate();