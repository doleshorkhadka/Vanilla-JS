function demoFunction() {
  document.getElementById("demo").innerHTML =
    "<h2> Hello button has been clicked</h2>";
}

function getFunction() {
  const response = fetch("https://www.boredapi.com/api/activity");
  response.then((value) => {
    console.log(value.data);
  });
  //   const dataRequest = require("axios");
  //   document.getElementById("get-data").innerText = "Loading";
}

getFunction();
