var url = 'https://api.seatgeek.com/2/events?client_id=MjMyNTQ3OTl8MTYzMTEyNjQ3Mi40MjI1NzMz';

function seatGeek () {
// e.preventDefault();

  fetch(url, {
    method: "GET",
  })
    .then(function (events) {
      return events.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

seatGeek();



// events.forEach(eventInfo => {
            
//     HTMLTemplate += `
//         <div class="col-md-4 mt-4">
//             <div class="card">
//                 <div class"card-body">
//                     <img class-"img-fluid mb-2" src="${eventInfo.logo !== null? response.events.performers[0].image : ''}"
//                 </div>
//                 <div class"card-body">
//                     <div class="card-text">
//                         <h2 class="text-center card-title"> ${response.events.title} </h2>
//                         <span class="badge badge-secondary"> Date & Time: ${response.events.datetime_local} </span>
//                         <span class="badge badge-secondary"> Location: ${response.events.venue} </span>
//                         <a href= "${response.events.url}" target="_blank" class="btn btn-primary btn-dlock mt-4">Get Tickets</a>
//                         <button type="button">Save Event!</button> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// });

// this.result.innerHTML = HTMLTemplate;
