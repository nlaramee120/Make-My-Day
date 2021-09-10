$(document).ready(function()  {

var userInput = $(".userInput").val();
var userBtn = document.querySelector(".userBtn");
var url = 'https://api.seatgeek.com/2/events?geoip=true&range=100mi&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz';


userBtn.addEventListener("click", (e) => {
  userInput = ($(".userInput").val())
  var clearList = $(".card");
  clearList.remove();
  e.preventDefault();
  console.log(userInput);
  var urlSearchBar = "https://api.seatgeek.com/2/events?venue.city=" + userInput + "&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
fetch(urlSearchBar, {
  method: "GET",
})
  .then(function(data) {
    return data.json()
  })
  .then(function (data) {
    console.log(data)

    for (i = 0; i < 5; i++) {
      var newCard = $("<div>").attr("class", "card");
      $(".nearEvents").append(newCard);
      var newCardBody = $("<div>").attr("class", "card-body");
      $(".card").append(newCardBody);
      console.log("it works");

      var img = data.events[i].performers[0].image;
      // var imgDisplay = "https://api.seatgeek.com/2/events" + img;
      newCardBody.append(
        "<img class='img-fluid mb-2' src=" +
          "'" +
          img +
          "'" +
          "alt=" +
          "test" +
          "></img>"
      );
      var title = data.events[i].short_title;
        newCardBody.append("<h3 class='card-title'>" + title + "<h5>");

        var date = data.events[i].datetime_local;

        newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

        var location = data.events[i].venue.name;
        newCardBody.append("<p class='card-text'>" + "Location: " + location + "<p>");

        var getTicks = data.events[i].url;
        newCardBody.append(
          "<a class='btn btn-primary btn-dlock mt-4' target='_blank' href=" +
            getTicks +
            ">Get Tickets!" +
            "</a>"
        );

        newCardBody.append(
          "<button type='button' class='btn btn-primary btn-dlock mt-4 saveBtn'>" +
            "Save Event!" +
            "</button>"
        );

    }
  })
})






// var searchButton = $("#searchButton");
// var city = $("#searchInput").val();
var key = "3a150e01056da8ad0b1ee8083da97feb";

function fiveDay() {
  var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=chicago" + "&appid=" + key + "&units=imperial";
  // e.preventDefault();

  // Begin API fetch and appending of data retrieved
  fetch(urlFiveDay, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $(".appendedAll").remove();

      // For loop to create and append data retrieved for the next consecutive 5 days in separate <divs>
      for (i = 0; i < 5; i++) {
        var newItem = $("<div>").attr("class", "col-sm-12 bg-primary text-white rounded appendedAll");
        $(".fiveDay").append(newItem);

        var date = new Date(response.list[i * 8].dt * 1000);
        newItem.append("<h4>" + date.toLocaleDateString() + "<h4>");

        var iconCode = response.list[i * 8].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        newItem.append($("<img>").attr("src", iconURL));

        var temp = response.list[i * 8].main.temp;
        newItem.append("<p>" + ("Temp: " + temp + " F") + "<p>");
      }
    })
};

fiveDay();



// var openWeatherKey = "3a150e01056da8ad0b1ee8083da97feb";
// var openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${openWeatherKey}&units=imperial`;

// fetch(openWeatherUrl, {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   // .then(function (response) {
//   //   console.log(response);
//   // })
//   .then(function (response) {
//     var newCard = $(".card-body").append("<div class='col-sm-7 bg-primary text-white rounded'></div>");
//     // newCard.empty();

//     var currentName = newCard.append("<p>");
//     newCard.append(currentName);

//     var time = new Date(response.dt * 1000);
//     currentName.append(response.name + " " + time.toLocaleDateString("en-US"));
//     currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);

//     var currentWeather = currentName.append("<p>");
//     currentName.append(currentWeather);
//     currentWeather.append("<p>" + "Temperature: " + response.main.temp + " F" + "</p>");
//     currentWeather.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
//     currentWeather.append("<p>" + "Wind: " + response.wind.speed + " mph" + "</p>");
//   })






function seatGeek() {
  // e.preventDefault();

  fetch(url, {
    method: "GET",
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);

      for (i = 0; i < 5; i++) {
        var newCard = $("<div>").attr("class", "card");
        $(".nearEvents").append(newCard);
        var newCardBody = $("<div>").attr("class", "card-body");
        $(".card").append(newCardBody);
        console.log("it works");

        var img = data.events[i].performers[0].image;
        // var imgDisplay = "https://api.seatgeek.com/2/events" + img;
        newCardBody.append(
          "<img class='img-fluid mb-2' src=" +
            "'" +
            img +
            "'" +
            "alt=" +
            "test" +
            "></img>"
        );

        var title = data.events[i].short_title;
        newCardBody.append("<h3 class='card-title'>" + title + "<h5>");

        // var dateConv = moment().format("MMM Do, YYYY, hh:mm:");
        var date = data.events[i].datetime_local;

        newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

        var location = data.events[i].venue.name;
        newCardBody.append("<p class='card-text'>" + "Location: " + location + "<p>");

        var getTicks = data.events[i].url;
        newCardBody.append(
          "<a class='btn btn-primary btn-dlock mt-4' target='_blank' href=" +
            getTicks +
            ">Get Tickets!" +
            "</a>"
        );

        newCardBody.append(
          "<button type='button' class='btn btn-primary btn-dlock mt-4 saveBtn'>" +
            "Save Event!" +
            "</button>"
        );
      }
    });
}

seatGeek();

// var savedList = document.querySelector(".savedList")
// var saveBtn = document.querySelector(".saveBtn")


// saveBtn.addEventListener("click", () => {


//   console.log("wow that worked somehow")

// })

})































