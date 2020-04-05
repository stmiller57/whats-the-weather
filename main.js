// Function to make sure all HTML loads before JS
$(document).ready(function () {
    //    Place current date in main card to right 
    var today = moment().format("MMMM Do, YYYY");
    $("#currentDate").html(today);
    // Variable and function to retrieve searched cities from local storage
    var cities = JSON.parse(localStorage.getItem("searchedCities"));
    console.log(cities);
    if (cities) {
        for (let i = 0; i < cities.length; i++) {
            $(".list-group").append(`<p>${cities[i]}</p>`);

        }
    }
    else {
        cities = [];
    }
    var getWeather = (local) => {
        var currentConditions = "https://api.openweathermap.org/data/2.5/weather?q=" + local + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";
        // ajax call for current weather conditions of searched city
        $.ajax({
            url: currentConditions,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var currentIcon = response.weather[0].icon;
            var currentURL = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
            $("#currentIcon").attr("src", currentURL);
            $("#result").append(`<h3>${response.name}</h3>`);
            $("#result").append(`<h6>Temperature: ${response.main.temp} °F</h6>`);
            $("#result").append(`<h6>Humidity: ${response.main.humidity}%</h6>`);
            $("#result").append(`<h6>Wind speed: ${response.wind.speed} mph</h6>`);
            var { lat } = response.coord;
            var { lon } = response.coord;
            var uvConditions = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=eeaf132a34d76337ced09557cd619a19`;

            // ajax call for uvConditions in searched city
            $.ajax({
                url: uvConditions,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $("#result").append(`<h6>UV index: ${response.value}</h6>`);
                // PROBLEM SPOT — I wanted to have the UV index color change depending on the value returned. I believe I needed an if statement where a value of 0-3 would leave a color of green, 3-6 would be be yellow and above 6 would be red. I wasn't able to execute this. 
            });

            // ajax call for 5-day forecast of searched city
            var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + local + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";
            $.ajax({
                url: fiveDayForecast,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var firstForecast = moment()
                    .add(1, "days")
                    .format("MMMM Do");
                $("#firstForecast").html(firstForecast);
                $("#day1").append(`<h6>Temperature: ${response.list[1].main.temp} °F</h6>`);
                $("#day1").append(`<h6>Humidity: ${response.list[1].main.humidity}%</h6>`);
                var day1Icon = response.list[1].weather[0].icon;
                var day1URL = `https://openweathermap.org/img/wn/${day1Icon}@2x.png`;
                $("#day1Icon").attr("src", day1URL);
                var secondForecast = moment()
                    .add(2, "days")
                    .format("MMMM Do");
                $("#secondForecast").html(secondForecast);
                $("#day2").append(`<h6>Temperature: ${response.list[9].main.temp} °F</h6>`);
                $("#day2").append(`<h6>Humidity: ${response.list[9].main.humidity}%</h6>`);
                var day2Icon = response.list[9].weather[0].icon;
                var day2URL = `https://openweathermap.org/img/wn/${day2Icon}@2x.png`;
                $("#day2Icon").attr("src", day2URL);
                var thirdForecast = moment()
                    .add(3, "days")
                    .format("MMMM Do");
                $("#thirdForecast").html(thirdForecast);
                $("#day3").append(`<h6>Temperature: ${response.list[17].main.temp} °F</h6>`);
                $("#day3").append(`<h6>Humidity: ${response.list[17].main.humidity}%</h6>`);
                var day3Icon = response.list[17].weather[0].icon;
                var day3URL = `https://openweathermap.org/img/wn/${day3Icon}@2x.png`;
                $("#day3Icon").attr("src", day3URL);
                var fourthForecast = moment()
                    .add(4, "days")
                    .format("MMMM Do");
                $("#fourthForecast").html(fourthForecast);
                $("#day4").append(`<h6>Temperature: ${response.list[25].main.temp} °F</h6>`);
                $("#day4").append(`<h6>Humidity: ${response.list[25].main.humidity}%</h6>`);
                var day4Icon = response.list[25].weather[0].icon;
                var day4URL = `https://openweathermap.org/img/wn/${day4Icon}@2x.png`;
                $("#day4Icon").attr("src", day4URL);
                var fifthForecast = moment()
                    .add(5, "days")
                    .format("MMMM Do");
                $("#fifthForecast").html(fifthForecast);
                $("#day5").append(`<h6>Temperature: ${response.list[33].main.temp} °F</h6>`);
                $("#day5").append(`<h6>Humidity: ${response.list[33].main.humidity}%</h6>`);
                var day5Icon = response.list[33].weather[0].icon;
                var day5URL = `https://openweathermap.org/img/wn/${day5Icon}@2x.png`;
                $("#day5Icon").attr("src", day5URL);
            });
        });
    };
    // Search button for city that also puts search into local storage
    $("#search").click(function () {
        var city = $("#citySearch").val();
        getWeather(city);
        cities.push(city);
        localStorage.setItem("searchedCities", JSON.stringify(cities));
    });
    // Retrieves weather from saved searches when they are clicked
    $('.list-group').on("click", 'p', function () {
        console.log(this);
        var city = $(this).text();
        console.log(city);
        getWeather(city);
    });

});