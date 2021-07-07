var APIKey= "54d3a93a184709884d7ca3b31ea089e4"
var searchEl = document.querySelector("#search")

searchEl.addEventListener("click", function () {
    console.log("click click click")
fetch("http://api.openweathermap.org/data/2.5/weather?q=" +searchEl.value+ "&appid=54d3a93a184709884d7ca3b31ea089e4"
)
    .then((response) => response.json());
    .then((response) => 
    console.log(response);
    var type = response[];
    console.log(type);
    var temp = response[];
    console.log(temp)
    )
} )