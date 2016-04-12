# A simple JavaScript app/widget that does the following:
# 1. Makes a GET request to the provided IP geolocation API, which returns a JSON response containing the latitude and longitude for the IP address from which the request originated;
# 2. Makes a subsequent request to the given weather API, which returns the current conditions for the latitude and longitude from the first step;
# 3. Renders a User Interface that displays the temperature, a text description of the current weather conditions, an icon representing those conditions, and the city.
# API for IP geolocation and weather lookup at https://weathersync.herokuapp.com. There are two endpoints:
# /ip
# ^ Get the geographic location of the requestor’s IP
# /weather/$lat,$lng
# ^ Get weather for a given latitude & longitude

# *******PURE JAVASCRIPT CODE WITH NO LIBRARIES OR DEPENDENCIES******

# Used rails gem 'rack' only for deploying as a static page in heroku. If you are cloning make sure you have ruby and rails environment then run $ cd <directory_name> && bundle install
# $ rackup
# http://localhost:9292/
# Make it your own. run $ rm -rf .git
# Public folder contains main code

# url : https://sbnaweather.herokuapp.com/