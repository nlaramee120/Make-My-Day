class EventBrite {

    //when the eventbrite API is envoked from the User Interface script then the API will be called upon

    constructor(){
        this.auth_token = 'OVKU7J57P7MHHVWZRW5Y';
        this.orderby = 'date';
    }

    //get the events from api

    async queryAPI(eventName, category) {

        const eventsResponse = await fetch (`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);
        
        //wait for a response and return as json

        const events = await eventsResponse.json();
        console.log(eventsResponse);
        return {
            events
        }
    }

    //get categories from API

   async getCategoriesAPI(){
       
    //query the API

        const categoriesResponse = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        //wait for the response and then return as JSON
        
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
}