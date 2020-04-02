var locale = "Quakertown";
var currentConditions = "https://api.openweathermap.org/data/2.5/weather?q=" + locale + "&units=imperial&appid=eeaf132a34d76337ced09557cd619a19";

$(document).ready(function () {

    $.ajax({
        url: currentConditions,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#city").html(response.name);
        $("#temp").html("Temperature:" + response.main.temp);

    });
});

// $("#button-addon2").on("click", function () {
//     localStorage.setItem("city", city);
// });