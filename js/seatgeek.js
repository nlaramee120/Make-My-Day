$(document).ready(function()  {

var userInput = $(".userInput").val();
var userBtn = document.querySelector(".userBtn");
var url = 'https://api.seatgeek.com/2/events?geoip=true&range=100mi&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz';
// var urlGeo = `https://api.openweathermap.org/data/2.5/weather?q=&lat=${response.coord.lat}&lon=${response.coord.lon}&appid=3a150e01056da8ad0b1ee8083da97feb&units=imperial`;
var weatherKey = "3a150e01056da8ad0b1ee8083da97feb";


userBtn.addEventListener("click", (e) => {
  userInput = ($(".userInput").val())
  var clearList = $(".card");
  clearList.remove();
  e.preventDefault();
  console.log(userInput);
  var urlSearchBar = "https://api.seatgeek.com/2/events?venue.city=" + userInput + "&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
  var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + weatherKey + "&units=imperial";


fetch(urlSearchBar, {
  method: "GET",
})
  .then(function(data) {
    return data.json()
  })
  .then(function (data) {
    console.log(data)


    var newCard = $("<div>").attr("class", "card");
      $(".nearEvents").append(newCard);

    for (i = 0; i < 5; i++) {

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
          "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
            getTicks +
            ">Get Tickets!" +
            "</a>"
        );

        newCardBody.append("<button type='button' class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
        );

    }
  })

  fetch(urlFiveDay,  {
      method: "GET",
    })
    .then(function (response) {
      return response.json()
    })

    .then(function (response) {
       $(".appendedAll").remove();

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
})

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

      var newCard = $("<div>").attr("class", "card");
        $(".nearEvents").append(newCard);

      for (i = 0; i < 5; i++) {
        
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
          "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
            getTicks +
            ">Get Tickets!" +
            "</a>"
        );

        newCardBody.append(
          "<button type='button' class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
        );
      }
    });
    
    
  //   fetch(urlGeo,  {
  //     method: "GET",
  //   })
  //   .then(function (response) {
  //     return response.json()
  //   })
  //   .then(function (response) {
     
  //   })

  //   .then(function (response) {
      
  //      $(".appendedAll").remove();

  //           for (i = 0; i < 5; i++) {
  //             var newItem = $("<div>").attr("class", "col-sm-12 bg-primary text-white rounded appendedAll");
  //             $(".fiveDay").append(newItem);
      
  //             var date = new Date(response.list[i * 8].dt * 1000);
  //             newItem.append("<h4>" + date.toLocaleDateString() + "<h4>");
      
  //             var iconCode = response.list[i * 8].weather[0].icon;
  //             var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
  //             newItem.append($("<img>").attr("src", iconURL));
      
  //             var temp = response.list[i * 8].main.temp;
  //             newItem.append("<p>" + ("Temp: " + temp + " F") + "<p>");
  //   }
  // })
    
}

seatGeek();

// var savedList = document.querySelector(".savedList")
// var saveBtn = document.querySelector(".saveBtn")


// saveBtn.addEventListener("click", () => {


//   console.log("wow that worked somehow")

// })

})












