$(document).ready(function () {
  // All variables to be called in entirety of the code
  let listItem1 = document.querySelector(".listItem1");
  let listItem2 = document.querySelector(".listItem2");
  let listItem3 = document.querySelector(".listItem3");
  let listItem4 = document.querySelector(".listItem4");
  let listItem5 = document.querySelector(".listItem5");
  let deletebtn1 = document.querySelector(".deletebtn1");
  let deletebtn2 = document.querySelector(".deletebtn2");
  let deletebtn3 = document.querySelector(".deletebtn3");
  let deletebtn4 = document.querySelector(".deletebtn4");
  let deletebtn5 = document.querySelector(".deletebtn5");
  let listItem1Used = false;
  let listItem2Used = false;
  let listItem3Used = false;
  let listItem4Used = false;
  let listItem5Used = false;

  var userInput = $(".userInput").val();
  var userBtn = document.querySelector(".userBtn");
  var userGeo = document.querySelector(".locationBtn");
  var url =
    "https://api.seatgeek.com/2/events?geoip=true&range=40mi&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
  var urlGeo =
    "https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=3a150e01056da8ad0b1ee8083da97feb&units=imperial";
  var weatherKey = "3a150e01056da8ad0b1ee8083da97feb";
  var modal = document.getElementById("myModal");
  var eventModal = document.getElementById("eventModal");
  var closeModal = document.querySelector(".close");
  var searchShowMore = document.querySelector(".searchShowMore");
  var showBtn = document.querySelector(".showBtn");
  var searchShowEvenMore = document.querySelector(".searchShowEvenMore");
  var hiddenPrev = document.querySelector(".hiddenPrev");
  var modalBtn = document.querySelector(".modalBtn");
  var closeEventModal = document.querySelector(".closeEventModal");
  var localShowMore = document.querySelector(".localShowMore");
  var localShowEvenMore = document.querySelector(".localShowEvenMore");

  // Opens the list of the user's saved events
  modalBtn.addEventListener("click", (e) => {
    e.preventDefault();

    eventModal.style.display = "block";

    closeEventModal.onclick = function () {
      eventModal.style.display = "none";
    };
  });

  // Begin event listener for user to manually input a city and search
  userBtn.addEventListener("click", (e) => {
    userInput = $(".userInput").val();

    // Clears any current cards displayed on app
    var clearList = $(".card");
    clearList.remove();
    e.preventDefault();
    console.log(userInput);

    // Variables defining API fetches
    var urlSearchBar =
      "https://api.seatgeek.com/2/events?venue.city=" +
      userInput +
      "&per_page=5&page=1&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
    var urlFiveDay =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      userInput +
      "&appid=" +
      weatherKey +
      "&units=imperial";

    // Begin fetching from SeatGeek API
    fetch(urlSearchBar, {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);

        showBtn.style.display = "block";

        var errorNum = 8;
        if (data.meta.total < 1) {
          modal.style.display = "block";
        }

        // modal appears if user enters a bogus city or city that is too small and doesn't have enough events in the radius
        closeModal.onclick = function () {
          modal.style.display = "none";
        };
        if (data.events[0].venue.state === data.events[1].venue.state) {
          console.log(errorNum);
        } else {
          modal.style.display = "block";
        }

        var newCard = $("<div>").attr("class", "card");

        // Shows containers in innerHTML for where fetched data will be dynamically added and displayed
        $(".fiveDayBorder").show();
        $(".eventsTitle").show();
        $(".eventsTitle").text("Events Near " + userInput);
        $(".nearEvents").append(newCard);

        // For loop to fetch and display/append 5 events based on user input and click event
        for (i = 0; i < 5; i++) {
          var newCardBody = $("<div>").attr("class", "card-body");
          $(".card").append(newCardBody);
          console.log("it works");

          let img = data.events[i].performers[0].image;
          newCardBody.append(
            "<img class='img-fluid mb-2' src=" +
              "'" +
              img +
              "'" +
              "alt=" +
              "test" +
              "></img>"
          );
          let title = data.events[i].short_title;
          newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

          let origDate = data.events[i].datetime_local;
          let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

          newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

          let location = data.events[i].venue.name;
          newCardBody.append(
            "<p class='card-text'>" + "Location: " + location + "<p>"
          );

          let getTicks = data.events[i].url;
          newCardBody.append(
            "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
              getTicks +
              ">Get Tickets!" +
              "</a>"
          );

          newCardBody.append(
            "<button type='button' id=button" +
              i +
              " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
          );

          // Begin creating unique "save buttons" for each event displayed for "Saved Events" modal
          let buttonId = "#button" + i;
          let test = location;

          // Begin event listener for each unqie "save button"
          $(document).on("click", buttonId, function () {
            console.log(test);

            // Begin conditional statement to add event information to the "Saved Events" modal
            if (listItem1Used === false) {
              listItem1.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem1.style.display = "block";
              deletebtn1.style.display = "block";
              listItem1Used = true;
            } else if (listItem2Used === false) {
              listItem2.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem2.style.display = "block";
              deletebtn2.style.display = "block";
              listItem2Used = true;
            } else if (listItem3Used === false) {
              listItem3.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem3.style.display = "block";
              deletebtn3.style.display = "block";
              listItem3Used = true;
            } else if (listItem4Used === false) {
              listItem4.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem4.style.display = "block";
              deletebtn4.style.display = "block";
              listItem4Used = true;
            } else if (listItem5Used === false) {
              listItem5.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem5.style.display = "block";
              deletebtn5.style.display = "block";
              listItem5Used = true;
            } else {
              return;
            }

            // Call on storeEntry function to store "saved event" locally
            storeEntry();
          });
        }

        modalBtn.addEventListener("click", (e) => {
          e.preventDefault();

          eventModal.style.display = "block";

          closeEventModal.onclick = function () {
            eventModal.style.display = "none";
          };
        });
      });

    // Begin fetchhing from OpenWeather API
    fetch(urlFiveDay, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (response) {
        // Clears any current OpenWeather data displayed and shows container in innerHTML where data will be displayed
        $(".appendedAll").remove();
        $(".float-child2").show();

        // Begin for loop to fetch data from OpenWeather API and to append data in appropriate innerHTML container for displaying
        for (i = 0; i < 5; i++) {
          var newItem = $("<div>").attr(
            "class",
            "col-sm-12 bg-primary text-white rounded appendedAll"
          );
          $(".fiveDay").append(newItem);

          var date = new Date(response.list[i * 8].dt * 1000);
          newItem.append("<h4>" + date.toLocaleDateString() + "<h4>");

          var iconCode = response.list[i * 8].weather[0].icon;
          var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
          newItem.append($("<img>").attr("src", iconURL));

          var temp = response.list[i * 8].main.temp;
          newItem.append("<p>" + ("Temp: " + temp + " F") + "<p>");
        }
      });
  });

  // Begin event listener to show 25 additional results in addition to the 5 originally displayed
  searchShowMore.addEventListener("click", (e) => {
    userInput = $(".userInput").val();
    var clearList = $(".card");
    // clearList.remove();
    e.preventDefault();
    console.log(userInput);
    var urlSearchBar =
      "https://api.seatgeek.com/2/events?venue.city=" +
      userInput +
      "&per_page=26&page=1&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
    var urlFiveDay =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      userInput +
      "&appid=" +
      weatherKey +
      "&units=imperial";

    // Begin fetching from SeatGeek API again
    fetch(urlSearchBar, {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);

        showBtn.style.display = "none";
        hiddenPrev.style.display = "block";

        if (data.meta.total < 20) {
          modal.style.display = "block";
        }

        closeModal.onclick = function () {
          modal.style.display = "none";
        };
        var errorNum = 8;
        if (data.events[0].venue.state === data.events[1].venue.state) {
          console.log(errorNum);
        } else {
          modal.style.display = "block";
        }

        var newCard = $("<div>").attr("class", "card");

        $(".fiveDayBorder").show();
        $(".eventsTitle").show();
        $(".eventsTitle").text("Events Near " + userInput);

        // For loop to fetch the next 25 events and append them to the currently displayed list
        for (i = 5; i < 25; i++) {
          var newCardBody = $("<div>").attr("class", "card-body");
          $(".card").append(newCardBody);
          console.log("it works");

          var img = data.events[i].performers[0].image;
          newCardBody.append(
            "<img class='img-fluid mb-2' src=" +
              "'" +
              img +
              "'" +
              "alt=" +
              "test" +
              "></img>"
          );
          let title = data.events[i].short_title;
          newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

          let origDate = data.events[i].datetime_local;
          let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

          newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

          let location = data.events[i].venue.name;
          newCardBody.append(
            "<p class='card-text'>" + "Location: " + location + "<p>"
          );

          let getTicks = data.events[i].url;
          newCardBody.append(
            "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
              getTicks +
              ">Get Tickets!" +
              "</a>"
          );

          newCardBody.append(
            "<button type='button' id=button" +
              i +
              " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
          );

          let buttonId = "#button" + i;
          let test = location;

          // Begin event listener for each unqie "save button" for the newly added events in list
          $(document).on("click", buttonId, function () {
            console.log(test);

            // Begin conditional statement to add event information to the "Saved Events" modal for thhe newly added events in list
            if (listItem1Used === false) {
              listItem1.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem1.style.display = "block";
              deletebtn1.style.display = "block";
              listItem1Used = true;
            } else if (listItem2Used === false) {
              listItem2.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem2.style.display = "block";
              deletebtn2.style.display = "block";
              listItem2Used = true;
            } else if (listItem3Used === false) {
              listItem3.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem3.style.display = "block";
              deletebtn3.style.display = "block";
              listItem3Used = true;
            } else if (listItem4Used === false) {
              listItem4.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem4.style.display = "block";
              deletebtn4.style.display = "block";
              listItem4Used = true;
            } else if (listItem5Used === false) {
              listItem5.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem5.style.display = "block";
              deletebtn5.style.display = "block";
              listItem5Used = true;
            } else {
              return;
            }

            storeEntry();
          });
        }
      });
  });

  // Begin event listener to show 25 additional results in addition to the 25 now displayed
  searchShowEvenMore.addEventListener("click", (e) => {
    userInput = $(".userInput").val();
    var clearList = $(".card");
    e.preventDefault();
    console.log(userInput);
    var urlSearchBar =
      "https://api.seatgeek.com/2/events?venue.city=" +
      userInput +
      "&per_page=50&page=1&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";
    var urlFiveDay =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      userInput +
      "&appid=" +
      weatherKey +
      "&units=imperial";

    // Begin fetching from SeatGeek API again
    fetch(urlSearchBar, {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);

        if (data.meta.total < 25) {
          modal.style.display = "block";
        }

        closeModal.onclick = function () {
          modal.style.display = "none";
        };
        var errorNum = 8;
        if (data.events[0].venue.state === data.events[1].venue.state) {
          console.log(errorNum);
        } else {
          modal.style.display = "block";
        }

        showBtn.style.display = "none";
        hiddenPrev.style.display = "none";

        var newCard = $("<div>").attr("class", "card");

        $(".fiveDayBorder").show();
        $(".eventsTitle").show();
        $(".eventsTitle").text("Events Near " + userInput);

        // For loop to fetch the next 25 events and append them to the currently displayed list
        for (i = 25; i < 50; i++) {
          var newCardBody = $("<div>").attr("class", "card-body");
          $(".card").append(newCardBody);
          console.log("it works");

          var img = data.events[i].performers[0].image;
          newCardBody.append(
            "<img class='img-fluid mb-2' src=" +
              "'" +
              img +
              "'" +
              "alt=" +
              "test" +
              "></img>"
          );
          let title = data.events[i].short_title;
          newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

          let origDate = data.events[i].datetime_local;
          let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

          newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

          let location = data.events[i].venue.name;
          newCardBody.append(
            "<p class='card-text'>" + "Location: " + location + "<p>"
          );

          let getTicks = data.events[i].url;
          newCardBody.append(
            "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
              getTicks +
              ">Get Tickets!" +
              "</a>"
          );

          newCardBody.append(
            "<button type='button' id=button" +
              i +
              " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
          );

          let buttonId = "#button" + i;
          let test = location;

          // Begin event listener for each unqie "save button" for the newly added events in list
          $(document).on("click", buttonId, function () {
            console.log(test);

            // Begin conditional statement to add event information to the "Saved Events" modal for the newly added events in list
            if (listItem1Used === false) {
              listItem1.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem1.style.display = "block";
              deletebtn1.style.display = "block";
              listItem1Used = true;
            } else if (listItem2Used === false) {
              listItem2.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem2.style.display = "block";
              deletebtn2.style.display = "block";
              listItem2Used = true;
            } else if (listItem3Used === false) {
              listItem3.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem3.style.display = "block";
              deletebtn3.style.display = "block";
              listItem3Used = true;
            } else if (listItem4Used === false) {
              listItem4.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem4.style.display = "block";
              deletebtn4.style.display = "block";
              listItem4Used = true;
            } else if (listItem5Used === false) {
              listItem5.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem5.style.display = "block";
              deletebtn5.style.display = "block";
              listItem5Used = true;
            } else {
              return;
            }

            storeEntry();
          });
        }
      });
  });

  // Duplicate code from everything above but for when a user were to click "Search By My Current Location" instead of manually inputting and searching a city
  // Only minor difference in code is that user input does not play a role in results displayed as results will be displayed based on user's geolocation
  userGeo.addEventListener("click", (e) => {
    e.preventDefault();
    var clearList = $(".card");
    clearList.remove();
    seatGeek();
  });

  function seatGeek() {
    fetch(url, {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);

        if (data.meta.total < 1) {
          modal.style.display = "block";
        }

        closeModal.onclick = function () {
          modal.style.display = "none";
        };
        var errorNum = 8;
        if (data.events[0].venue.state === data.events[1].venue.state) {
          console.log(errorNum);
        } else {
          modal.style.display = "block";
        }

        localShowMore.style.display = "block";
        localShowEvenMore.style.display = "none";

        var newCard = $("<div>").attr("class", "card");

        $(".fiveDayBorder").show();
        $(".eventsTitle").show();
        $(".eventsTitle").text("Events Near You");
        $(".nearEvents").append(newCard);

        for (i = 0; i < 5; i++) {
          var newCardBody = $("<div>").attr("class", "card-body");
          $(".card").append(newCardBody);
          console.log("it works");

          var img = data.events[i].performers[0].image;
          newCardBody.append(
            "<img class='img-fluid mb-2' src=" +
              "'" +
              img +
              "'" +
              "alt=" +
              "test" +
              "></img>"
          );

          let title = data.events[i].short_title;
          newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

          // var dateConv = moment().format("MMM Do, YYYY, hh:mm:");
          let origDate = data.events[i].datetime_local;
          let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

          newCardBody.append("<p class='card-text'>" + "Date: " + date + "<p>");

          let location = data.events[i].venue.name;
          newCardBody.append(
            "<p class='card-text'>" + "Location: " + location + "<p>"
          );

          let getTicks = data.events[i].url;
          newCardBody.append(
            "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
              getTicks +
              ">Get Tickets!" +
              "</a>"
          );

          newCardBody.append(
            "<button type='button' id=button" +
              i +
              " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
          );

          let buttonId = "#button" + i;
          let test = location;

          $(document).on("click", buttonId, function () {
            console.log(test);

            if (listItem1Used === false) {
              listItem1.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem1.style.display = "block";
              deletebtn1.style.display = "block";
              listItem1Used = true;
            } else if (listItem2Used === false) {
              listItem2.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem2.style.display = "block";
              deletebtn2.style.display = "block";
              listItem2Used = true;
            } else if (listItem3Used === false) {
              listItem3.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem3.style.display = "block";
              deletebtn3.style.display = "block";
              listItem3Used = true;
            } else if (listItem4Used === false) {
              listItem4.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem4.style.display = "block";
              deletebtn4.style.display = "block";
              listItem4Used = true;
            } else if (listItem5Used === false) {
              listItem5.innerHTML =
                title +
                "<br>" +
                date +
                "<br>" +
                "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>";
              listItem5.style.display = "block";
              deletebtn5.style.display = "block";
              listItem5Used = true;
            } else {
              return;
            }

            storeEntry();
          });

          modalBtn.addEventListener("click", (e) => {
            e.preventDefault();

            eventModal.style.display = "block";

            closeEventModal.onclick = function () {
              eventModal.style.display = "none";
            };
          });

          fetch(urlGeo, {
            method: "GET",
          })
            .then(function (response) {
              return response.json();
            })

            .then(function (response) {
              $(".appendedAll").remove();
              $(".float-child2").show();

              for (i = 0; i < 5; i++) {
                var newItem = $("<div>").attr(
                  "class",
                  "col-sm-12 bg-primary text-white rounded appendedAll"
                );
                $(".fiveDay").append(newItem);

                var date = new Date(response.list[i * 8].dt * 1000);
                newItem.append("<h4>" + date.toLocaleDateString() + "<h4>");

                var iconCode = response.list[i * 8].weather[0].icon;
                var iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                newItem.append($("<img>").attr("src", iconURL));

                var temp = response.list[i * 8].main.temp;
                newItem.append("<p>" + ("Temp: " + temp + " F") + "<p>");
              }
            });
        }
      });

    localShowMore.addEventListener("click", (e) => {
      var clearList = $(".card");

      // clearList.remove();
      e.preventDefault();
      console.log(userInput);
      var urlSearchBar =
        "https://api.seatgeek.com/2/events?geoip=true&range=40mi&per_page=26&page=1&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";

      fetch(urlSearchBar, {
        method: "GET",
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          console.log(data);

          if (data.meta.total < 20) {
            modal.style.display = "block";
          }

          closeModal.onclick = function () {
            modal.style.display = "none";
          };
          var errorNum = 8;
          if (data.events[0].venue.state === data.events[1].venue.state) {
            console.log(errorNum);
          } else {
            modal.style.display = "block";
          }

          localShowMore.style.display = "none";
          localShowEvenMore.style.display = "block";

          var newCard = $("<div>").attr("class", "card");

          $(".fiveDayBorder").show();
          $(".eventsTitle").show();
          $(".eventsTitle").text("Events Near You");

          for (i = 5; i < 25; i++) {
            var newCardBody = $("<div>").attr("class", "card-body");
            $(".card").append(newCardBody);
            console.log("it works");

            var img = data.events[i].performers[0].image;
            newCardBody.append(
              "<img class='img-fluid mb-2' src=" +
                "'" +
                img +
                "'" +
                "alt=" +
                "test" +
                "></img>"
            );
            let title = data.events[i].short_title;
            newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

            let origDate = data.events[i].datetime_local;
            let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

            newCardBody.append(
              "<p class='card-text'>" + "Date: " + date + "<p>"
            );

            let location = data.events[i].venue.name;
            newCardBody.append(
              "<p class='card-text'>" + "Location: " + location + "<p>"
            );

            let getTicks = data.events[i].url;
            newCardBody.append(
              "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>"
            );

            newCardBody.append(
              "<button type='button' id=button" +
                i +
                " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
            );

            let buttonId = "#button" + i;
            let test = location;

            $(document).on("click", buttonId, function () {
              console.log(test);

              let newDate = new Date(date);
              let dateString = newDate.toString("MMMM yyyy");

              if (listItem1Used === false) {
                listItem1.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem1.style.display = "block";
                deletebtn1.style.display = "block";
                listItem1Used = true;
              } else if (listItem2Used === false) {
                listItem2.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem2.style.display = "block";
                deletebtn2.style.display = "block";
                listItem2Used = true;
              } else if (listItem3Used === false) {
                listItem3.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem3.style.display = "block";
                deletebtn3.style.display = "block";
                listItem3Used = true;
              } else if (listItem4Used === false) {
                listItem4.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem4.style.display = "block";
                deletebtn4.style.display = "block";
                listItem4Used = true;
              } else if (listItem5Used === false) {
                listItem5.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem5.style.display = "block";
                deletebtn5.style.display = "block";
                listItem5Used = true;
              } else {
                return;
              }

              storeEntry();
            });
          }
        });
    });

    localShowEvenMore.addEventListener("click", (e) => {
      var clearList = $(".card");
      e.preventDefault();
      console.log(userInput);
      var urlSearchBar =
        "https://api.seatgeek.com/2/events?geoip=true&range=40mi&per_page=50&page=1&client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz";

      fetch(urlSearchBar, {
        method: "GET",
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          console.log(data);

          if (data.meta.total < 25) {
            modal.style.display = "block";
          }

          closeModal.onclick = function () {
            modal.style.display = "none";
          };
          var errorNum = 8;
          if (data.events[0].venue.state === data.events[1].venue.state) {
            console.log(errorNum);
          } else {
            modal.style.display = "block";
          }

          localShowMore.style.display = "none";
          localShowEvenMore.style.display = "none";

          var newCard = $("<div>").attr("class", "card");

          $(".fiveDayBorder").show();
          $(".eventsTitle").show();
          $(".eventsTitle").text("Events Near You");

          for (i = 25; i < 50; i++) {
            var newCardBody = $("<div>").attr("class", "card-body");
            $(".card").append(newCardBody);
            console.log("it works");

            var img = data.events[i].performers[0].image;
            newCardBody.append(
              "<img class='img-fluid mb-2' src=" +
                "'" +
                img +
                "'" +
                "alt=" +
                "test" +
                "></img>"
            );
            let title = data.events[i].short_title;
            newCardBody.append("<h3 class='card-title'>" + title + "<h3>");

            let origDate = data.events[i].datetime_local;
            let date = origDate.split("T")[0] + ", " + origDate.split("T")[1];

            newCardBody.append(
              "<p class='card-text'>" + "Date: " + date + "<p>"
            );

            let location = data.events[i].venue.name;
            newCardBody.append(
              "<p class='card-text'>" + "Location: " + location + "<p>"
            );

            let getTicks = data.events[i].url;
            newCardBody.append(
              "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                getTicks +
                ">Get Tickets!" +
                "</a>"
            );

            newCardBody.append(
              "<button type='button' id=button" +
                i +
                " class='btn btn-primary btn-dlock mt-4 saveBtn'><i class='far fa-heart'></i></button>"
            );

            let buttonId = "#button" + i;
            let test = location;

            // Identifies the buttonId which is a future HTML element
            $(document).on("click", buttonId, function () {
              console.log(test);

              let newDate = new Date(date);
              let dateString = newDate.toString("MMMM yyyy");

              if (listItem1Used === false) {
                listItem1.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem1.style.display = "block";
                deletebtn1.style.display = "block";
                listItem1Used = true;
              } else if (listItem2Used === false) {
                listItem2.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem2.style.display = "block";
                deletebtn2.style.display = "block";
                listItem2Used = true;
              } else if (listItem3Used === false) {
                listItem3.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem3.style.display = "block";
                deletebtn3.style.display = "block";
                listItem3Used = true;
              } else if (listItem4Used === false) {
                listItem4.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem4.style.display = "block";
                deletebtn4.style.display = "block";
                listItem4Used = true;
              } else if (listItem5Used === false) {
                listItem5.innerHTML =
                  title +
                  "<br>" +
                  date +
                  "<br>" +
                  "<a class='btn btn-primary btn-dlock mt-4 getTicks' target='_blank' href=" +
                  getTicks +
                  ">Get Tickets!" +
                  "</a>";
                listItem5.style.display = "block";
                deletebtn5.style.display = "block";
                listItem5Used = true;
              } else {
                return;
              }

              storeEntry();
            });
          }
        });
    });
  }

  // Begin variables for local storage
  let entry1 = $(".listItem1");
  let entry2 = $(".listItem2");
  let entry3 = $(".listItem3");
  let entry4 = $(".listItem4");
  let entry5 = $(".listItem5");
  let getEntry1 = localStorage.getItem("event1");
  let getEntry2 = localStorage.getItem("event2");
  let getEntry3 = localStorage.getItem("event3");
  let getEntry4 = localStorage.getItem("event4");
  let getEntry5 = localStorage.getItem("event5");
  let pullEvents = [getEntry1, getEntry2, getEntry3, getEntry4, getEntry5];

  // Function to store saved events in local storage
  function storeEntry() {
    localStorage.setItem("event1", entry1.text());
    localStorage.setItem("event2", entry2.text());
    localStorage.setItem("event3", entry3.text());
    localStorage.setItem("event4", entry4.text());
    localStorage.setItem("event5", entry5.text());
  }

  // Begin for loop to get stored saved events from local storage and have them persist
  for (i = 0; i < pullEvents.length; i++) {
    entry1.text(getEntry1);
    entry2.text(getEntry2);
    entry3.text(getEntry3);
    entry4.text(getEntry4);
    entry5.text(getEntry5);
  }

  // Begin event listeners for each "delete" button in the "Saved Events" modal
  // When click event is triggered, event will be removed from "Saved Events" modal
  deletebtn1.addEventListener("click", (e) => {
    e.preventDefault();
    listItem1.innerHTML = "";
    deletebtn1.style.display = "none";
    listItem1Used = false;
  });

  deletebtn2.addEventListener("click", (e) => {
    e.preventDefault();
    listItem2.innerHTML = "";
    deletebtn2.style.display = "none";
    listItem2Used = false;
  });

  deletebtn3.addEventListener("click", (e) => {
    e.preventDefault();
    listItem3.innerHTML = "";
    deletebtn3.style.display = "none";
    listItem3Used = false;
  });

  deletebtn4.addEventListener("click", (e) => {
    e.preventDefault();
    listItem4.innerHTML = "";
    deletebtn4.style.display = "none";
    listItem4Used = false;
  });

  deletebtn5.addEventListener("click", (e) => {
    e.preventDefault();
    listItem5.innerHTML = "";
    deletebtn5.style.display = "none";
    listItem5Used = false;
  });
});
