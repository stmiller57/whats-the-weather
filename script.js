
$(document).ready(function () {

    $("#search").click(() => {
        var local = $("#city_search").val();
        var currentConditions = "https://api.openweathermap.org/data/2.5/weather?q=" + local + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";
        $("#city_search").empty();

        $.ajax({
            url: currentConditions,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#result").append(`<h1>${response.name}</h1>`);
            $("#result").append(`<p>Temperature: ${response.main.temp} degrees Fahrenheit</p>`);
            $("#result").append(`<p>Humidity: ${response.main.humidity} percent</p>`);
            $("#result").append(`<p>Wind speed: ${response.wind.speed} mph</p>`);
        });
    });
});