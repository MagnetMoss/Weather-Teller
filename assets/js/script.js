var APIKey= "54d3a93a184709884d7ca3b31ea089e4"
var searchEl = document.querySelector("#search")

// var cityEl = document.querySelector("#searchInputVal")
var buttonEl = document.querySelector("#submit")
var cityInfo = []
var today = moment().format("Do MMM YYYY")


if (localStorage.getItem("cities")) {
    cityInfo = JSON.parse(localStorage.getItem("cities"))
    localStorage.setItem("cities", JSON.stringify(cityInfo))

}
else {
    localStorage.setItem("cities", JSON.stringify(cityInfo))
}



buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(searchEl.value);
    cityInfo.push(searchEl.value)
    localStorage.setItem("cities", JSON.stringify(cityInfo))
    JSON.parse(localStorage.getItem("city"))
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchEl.value + "&units=imperial&appid=54d3a93a184709884d7ca3b31ea089e4";
    fetch(queryURL)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            console.log(moment().format("Do MMM YYYY"))
            console.log("Temp: " + response.main.temp)
            console.log(response.wind.speed)
            console.log(response.main.humidity)
            console.log(response.weather[0].description)
            document.querySelector("#forecast").innerHTML = `${today} <br> Temperature: ${response.main.temp} <br> Wind Speed: ${response.wind.speed} <br> Humidity: ${response.main.humidity}`
        });

    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchEl.value + "&units=imperial&appid=81fcfb9fe1b9f885bd21e9545869892b"
    fetch(fiveDay)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            var dayOne = moment().add(1, 'days').format("Do MMM YYYY")
            console.log(response.list[0].main);
            console.log(response.list[0].weather[0].description);
            document.querySelector("#done").innerHTML = `${dayOne} <br> Temperature: ${response.list[0].main.temp} <br> Wind Speed: ${response.list[0].wind.speed} <br> Humidity: ${response.list[0].main.humidity} <br> Description: ${response.list[0].weather[0].description} `


            var dayTwo = moment().add(2, 'days').format("Do MMM YYYY")
            console.log(response.list[8].main);
            console.log(response.list[8].weather[0].description);
            document.querySelector("#dtwo").innerHTML = `${dayTwo} <br> Temperature: ${response.list[8].main.temp} <br> Wind Speed: ${response.list[8].wind.speed} <br> Humidity: ${response.list[8].main.humidity} <br> Description: ${response.list[8].weather[0].description}`

            var dayThree = moment().add(3, 'days').format("Do MMM YYYY")
            console.log(response.list[16].main);
            console.log(response.list[16].weather[0].description);
            document.querySelector("#dthree").innerHTML = `${dayThree} <br> Temperature: ${response.list[16].main.temp} <br> Wind Speed: ${response.list[16].wind.speed} <br> Humidity: ${response.list[16].main.humidity} <br> Description: ${response.list[16].weather[0].description}`

            var dayFour = moment().add(4, 'days').format("Do MMM YYYY")
            console.log(response.list[24].main);
            console.log(response.list[24].weather[0].description);
            document.querySelector("#dfour").innerHTML = `${dayFour} <br> Temperature: ${response.list[24].main.temp} <br> 
            Wind Speed: ${response.list[24].wind.speed} <br> Humidity: ${response.list[24].main.humidity} <br> Description: ${response.list[24].weather[0].description}`

            var dayFive = moment().add(5, 'days').format("Do MMM YYYY")
            console.log(response.list[32].main);
            console.log(response.list[32].weather[0].description);
            document.querySelector("#dfive").innerHTML = `${dayFive} <br> Temperature: ${response.list[32].main.temp} <br> 
            Wind Speed: ${response.list[32].wind.speed} <br> Humidity: ${response.list[32].main.humidity} <br> Description: ${response.list[32].weather[0].description}`
            
        })
})