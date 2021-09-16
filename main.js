// const { default: axios } = require("axios")

let buttonFunction = document.querySelector("#button");

function buttonThing(event) {
  event.preventDefault();
  axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
    // console.log(res.data.results[0].residents)
    let alderaanRes = res.data.results[0].residents;
    for (let i = 0; i < alderaanRes.length; i++) {
      //    console.log(alderaanRes[i])
      axios.get(`${alderaanRes[i]}`).then((res) => {
        console.log(res.data);
        let person = document.createElement("h2");
        person.innerHTML = res.data.name;
        document.getElementById("characters").appendChild(person);
      });
    }
  });
  console.log("Button Clicked");
}

buttonFunction.addEventListener("click", buttonThing);
