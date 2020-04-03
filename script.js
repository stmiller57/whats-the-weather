
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
            $("#result").append(`<p>Temperature: ${response.main.temp} degrees Fahrenheit</p>`);
            $("#result").append(`<p>Humidity: ${response.main.humidity} percent</p>`);
            $("#result").append(`<p>Wind speed: ${response.wind.speed} mph</p>`);
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
                // $("#result").append(`<p>UV index: ${response.value}</p>`);
            });
        });
    });
});