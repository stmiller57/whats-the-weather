


$(document).ready(function () {

    const recent = localStorage.getItem("cities");

    recent.split(",").forEach(city => {
        console.log(city)
        $("#recent_cities").append(`<p>${city}</p>`)
    });

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
            $("#result").append(`<p>Teperature: ${response.main.temp}</p>`);
        });
        const current_cities = JSON.parse(localStorage.getItem("cities"));

        if (current_cities !== null) {
            current_cities.push(local)
            localStorage.setItem("cities", current_cities)
        } else {
            localStorage.setItem("cities", JSON.stringify([local]))
        }

    })

});

// $("#button-addon2").on("click", function () {
//     localStorage.setItem("city", city);
// });