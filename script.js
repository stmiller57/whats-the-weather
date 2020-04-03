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
            $("#result").append(`<p>Temperature: ${response.main.temp} °F</p>`);
            $("#result").append(`<p>Humidity: ${response.main.humidity}%</p>`);
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
                $("#day1").append(`<p>Temperature: ${response.list[7].main.temp} °F`);
                $("#day1").append(`<p>Humidity: ${response.list[7].main.humidity}%`);
                var day1Icon = response.list[7].weather[0].icon;
                var day1URL = `https://openweathermap.org/img/wn/${day1Icon}@2x.png`;
                $("#day1Icon").attr("src", day1URL);
                $("#day2").append(`<p>Temperature: ${response.list[15].main.temp} °F`);
                $("#day2").append(`<p>Humidity: ${response.list[15].main.humidity}%`);
                var day2Icon = response.list[15].weather[0].icon;
                var day2URL = `https://openweathermap.org/img/wn/${day2Icon}@2x.png`;
                $("#day2Icon").attr("src", day2URL);
                $("#day3").append(`<p>Temperature: ${response.list[23].main.temp} °F`);
                $("#day3").append(`<p>Humidity: ${response.list[23].main.humidity}%`);
                var day3Icon = response.list[23].weather[0].icon;
                var day3URL = `https://openweathermap.org/img/wn/${day3Icon}@2x.png`;
                $("#day3Icon").attr("src", day3URL);
                $("#day4").append(`<p>Temperature: ${response.list[29].main.temp} °F`);
                $("#day4").append(`<p>Humidity: ${response.list[29].main.humidity}%`);
                var day4Icon = response.list[29].weather[0].icon;
                var day4URL = `https://openweathermap.org/img/wn/${day4Icon}@2x.png`;
                $("#day4Icon").attr("src", day4URL);
                $("#day5").append(`<p>Temperature: ${response.list[37].main.temp} °F`);
                $("#day5").append(`<p>Humidity: ${response.list[37].main.humidity}%`);
                var day5Icon = response.list[37].weather[0].icon;
                var day5URL = `https://openweathermap.org/img/wn/${day5Icon}@2x.png`;
                $("#day5Icon").attr("src", day5URL);
            });
        });
    });
});



// $.ajax({
//     url: fiveDayQueryURL,
//     method: "GET"
//   }).then(function(response) {
//     $("#tempTwo").html(
//       "Temperature: " + parseInt(response.list[0].main.temp)
//     );
//     $("#humidTwo").html("Humidity: " + response.list[0].main.humidity + "%");
//     var iconCodeTwo = response.list[0].weather[0].icon;
//     var iconURL = `https://openweathermap.org/img/wn/${iconCodeTwo}@2x.png`;
//     $("#iconCodeTwo").attr("src", iconURL);

//     $("#tempThree").html(
//       "Temperature: " + parseInt(response.list[8].main.temp)
//     );
//     $("#humidThree").html(
//       "Humidity: " + response.list[8].main.humidity + "%"
//     );
//     var iconCodeThree = response.list[8].weather[0].icon;
//     var iconURL = `https://openweathermap.org/img/wn/${iconCodeThree}@2x.png`;
//     $("#iconCodeThree").attr("src", iconURL);

//     $("#tempFour").html(
//       "Temperature: " + parseInt(response.list[16].main.temp)
//     );
//     $("#humidFour").html(
//       "Humidity: " + response.list[16].main.humidity + "%"
//     );
//     var iconCodeFour = response.list[16].weather[0].icon;
//     var iconURL = `https://openweathermap.org/img/wn/${iconCodeFour}@2x.png`;
//     $("#iconCodeFour").attr("src", iconURL);

//     $("#humidFive").html(
//       "Humidity: " + response.list[24].main.humidity + "%"
//     );
//     $("#tempFive").html(
//       "Temperature: " + parseInt(response.list[24].main.temp)
//     );
//     var iconCodeFive = response.list[24].weather[0].icon;
//     var iconURL = `https://openweathermap.org/img/wn/${iconCodeFive}@2x.png`;
//     $("#iconCodeFive").attr("src", iconURL);

//     $("#tempSix").html(
//       "Temperature: " + parseInt(response.list[32].main.temp)
//     );
//     $("#humidSix").html("Humidity: " + response.list[32].main.humidity + "%");
//     var iconCodeSix = response.list[32].weather[0].icon;
//     var iconURL = `https://openweathermap.org/img/wn/${iconCodeSix}@2x.png`;
//     $("#iconCodeSix").attr("src", iconURL);