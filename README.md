# Make My Day
Created By: James Capadocia, Nick Laramee, Jonathan Lino, and Joseph Fabrini
<br>
<br>

## Link to Public Repo on Github:

https://github.com/nlaramee120/Make-My-Day

## Link to Github Deployed Page:

https://nlaramee120.github.io/Make-My-Day/

<br>
<br>

# Showcasing the App

![demo of deployed app](./images/appdemo.gif)

# About Our App
    This application was created for users to find events in their local area or other cities within the U.S. The app was created with a simple and sleek user interface for the user to easily navigate it's features from the first time using it. Based on the user's search choice, a list of events will populate with basic event information as well as a related picture for the event. Aside from event information, the user will also be presented with a redirecting link to purchase tickets for the event and an option to save the event if they are interested in it but have yet to make a decision to purchase tickets. Along with the events populating, the user will also be presented with a 5 day weather forecast to make an informed decision for attending an indoor or outdoor event.
    
# App Flow and Usage
    - When user open the homepage they are presented with an introduction page explaining the app and a "Get Started" button that will direct them to the app's main page and functionality.

    - When the user enters the app's main page, then they are presented with a minimalistic page that requires them to search for events by typing a city name and clicking the search icon or by clicking a button that will list local events around them (based on geolocation).
    
    - When a user search is conducted, the app will load 5 events based on how the search was initiated. At the bottom of the list, the user will be presented with a "Show More" button to load additional events onto the page.

    - Each event that is populated will contain specific information regarding the event:
    1) Event title
    2) Date and time of event
    3) Event venue location
    4) A link to purchase tickets for the event
        - If the user clicks the link to purchase tickets, the user will be redirected to the SeatGeek website to see availability of tickets, seating choices, and pricing. Of course, from here is where they have the option to actually purchase the ticket(s) to attend the event.
    5) A save icon the user can click to reference the event later without conducting an additional search to find the same event
        - If the user clicks the save icon, the event information will be stored locally and will persist on page reload. For the user to access a list of their saved events, they will need to scroll to the top of the app and click the "heart icon" button. When a user is viewing their saved list, they will be presented with basic information about the saved event, including the event title, the date and time of the event, the link to redirect them to purchase tickets, and a button to remove the event from the saved list.

    - As the user scrolls passed the current events listed, they will be presented with a 5 day forecast based on how the user initiated the search (either by city or their current geolocation).

