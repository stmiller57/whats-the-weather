var locale = "Philadelphia";
var currentConditions = "https://api.openweathermap.org/data/2.5/weather?q=" + locale + "&appid=eeaf132a34d76337ced09557cd619a19";

$.ajax({
    url: currentConditions,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
