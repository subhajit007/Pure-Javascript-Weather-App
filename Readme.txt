# A simple JavaScript app/widget that does the following:
#1. Makes a GET request to the provided IP geolocation API, which returns a JSON response containing the latitude and longitude for the IP address from which the request originated;
#2. Makes a subsequent request to the given weather API, which returns the current conditions for the latitude and longitude from the first step;
#3. Renders a User Interface that displays the temperature, a text description of the current weather conditions, an icon representing those conditions, and the city.
#API for IP geolocation and weather lookup at https://weathersync.herokuapp.com. There are two endpoints:
#/ip
#Get the geographic location of the requestor’s IP
#/weather/$lat,$lng
#Get weather for a given latitude & longitude

#Pure javascript Code with no libraries or dependencies.

#Used gem 'rack' only for deploying static page in heroku as a rails app
# Public folder conatains main code
#url : https://sbnaweather.herokuapp.com/