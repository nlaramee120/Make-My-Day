//using eventbrite API and using User Interface scripts

const eventbrite = new EventBrite();
const ui = new UI();

//an event Listener for the submit button

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    //get values from form

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    if(eventName !== ''){

        //query the Event Brite API

       eventbrite.queryAPI(eventName, category)
            .then(events => {

                //check for events

                const eventsList = events.events.events;
                if(eventsList.length > 0) {

                    //print the events

                    ui.displayEvents(eventsList);
                } else {

                    //if there are no events, print a results not found message
                    ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
                }
            })


    } else {

        //if the user has not entered anything, display this message
        ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4');
    }

})