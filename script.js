$(document).ready(function () {

    $("#search").click(() => {
        var local = $("#city_search").val();
        var currentConditions = "https://api.openweathermap.org/data/2.5/weather?q=" + local + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";

        $.ajax({
            url: currentConditions,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#result").append(`<h3>${response.name}</h3>`);
            var currentIcon = response.weather[0].icon;
            var currentURL = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
            $("#currentIcon").attr("src", currentURL);
            $("#result").append(`<h6>Temperature: ${response.main.temp} °F</h6>`);
            $("#result").append(`<h6>Humidity: ${response.main.humidity}%</h6>`);
            $("#result").append(`<h6>Wind speed: ${response.wind.speed} mph</h6>`);
            var { lat } = response.coord;
            var { lon } = response.coord;
            var uvConditions = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=eeaf132a34d76337ced09557cd619a19`;
            $.ajax({
                url: uvConditions,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $("#result").append(`<p>UV index: ${response.value}</p>`);
            });
            var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + local + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";
            $.ajax({
                url: fiveDayForecast,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $("#day1").append(`<p>Temperature: ${response.list[1].main.temp} °F`);
                $("#day1").append(`<p>Humidity: ${response.list[1].main.humidity}%`);
                var day1Icon = response.list[1].weather[0].icon;
                var day1URL = `https://openweathermap.org/img/wn/${day1Icon}@2x.png`;
                $("#day1Icon").attr("src", day1URL);
                $("#day2").append(`<p>Temperature: ${response.list[9].main.temp} °F`);
                $("#day2").append(`<p>Humidity: ${response.list[9].main.humidity}%`);
                var day2Icon = response.list[9].weather[0].icon;
                var day2URL = `https://openweathermap.org/img/wn/${day2Icon}@2x.png`;
                $("#day2Icon").attr("src", day2URL);
                $("#day3").append(`<p>Temperature: ${response.list[17].main.temp} °F`);
                $("#day3").append(`<p>Humidity: ${response.list[17].main.humidity}%`);
                var day3Icon = response.list[17].weather[0].icon;
                var day3URL = `https://openweathermap.org/img/wn/${day3Icon}@2x.png`;
                $("#day3Icon").attr("src", day3URL);
                $("#day4").append(`<p>Temperature: ${response.list[25].main.temp} °F`);
                $("#day4").append(`<p>Humidity: ${response.list[25].main.humidity}%`);
                var day4Icon = response.list[25].weather[0].icon;
                var day4URL = `https://openweathermap.org/img/wn/${day4Icon}@2x.png`;
                $("#day4Icon").attr("src", day4URL);
                $("#day5").append(`<p>Temperature: ${response.list[33].main.temp} °F`);
                $("#day5").append(`<p>Humidity: ${response.list[33].main.humidity}%`);
                var day5Icon = response.list[33].weather[0].icon;
                var day5URL = `https://openweathermap.org/img/wn/${day5Icon}@2x.png`;
                $("#day5Icon").attr("src", day5URL);
            });
        });
    });
});