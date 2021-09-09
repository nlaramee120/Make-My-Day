var userInput = $(".userInput").val();
var userBtn = document.querySelector(".userBtn");
var url = 'https://api.seatgeek.com/2/events?geoip=true&range=20mi&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz';



// var urlSearchBar = "https://api.seatgeek.com/2/events?geoip=true&range=100mi&datetime_local.gt=2021-09-09&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz"

var urlSearchBar = "https://api.seatgeek.com/2/events?venue.city=atlanta&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz"

userBtn.addEventListener("click", (e) => {
  var clearList = $(".card");
  clearList.remove()
  e.preventDefault();
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
          "<button type='button' class='btn btn-primary btn-dlock mt-4'>" +
            "Save Event!" +
            "</button>"
        );

    }
  })
})



















// function seatGeek() {
//   // e.preventDefault();

//   fetch(url, {
//     method: "GET",
//   })
//     .then(function (data) {
//       return data.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       for (i = 0; i < 5; i++) {
//         var newCard = $("<div>").attr("class", "card");
//         $(".nearEvents").append(newCard);
//         var newCardBody = $("<div>").attr("class", "card-body");
//         $(".card").append(newCardBody);
//         console.log("it works");

//         var img = data.events[i].performers[0].image;
//         // var imgDisplay = "https://api.seatgeek.com/2/events" + img;
//         newCardBody.append(
//           "<img class='img-fluid mb-2' src=" +
//             "'" +
//             img +
//             "'" +
//             "alt=" +
//             "test" +
//             "></img>"
//         );

//         var title = data.events[i].short_title;
//         newCardBody.append("<h3 class='card-title'>" + title + "<h5>");

//         var date = data.events[i].datetime_local;

//         newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

//         var location = data.events[i].venue.name;
//         newCardBody.append("<p class='card-text'>" + "Location: " + location + "<p>");

//         var getTicks = data.events[i].url;
//         newCardBody.append(
//           "<a class='btn btn-primary btn-dlock mt-4' target='_blank' href=" +
//             getTicks +
//             ">Get Tickets!" +
//             "</a>"
//         );

//         newCardBody.append(
//           "<button type='button' class='btn btn-primary btn-dlock mt-4'>" +
//             "Save Event!" +
//             "</button>"
//         );
//       }
//     });
// }

// seatGeek();


































