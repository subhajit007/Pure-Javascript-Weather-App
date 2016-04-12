function getLocationAndWeather() {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            var position = {
                latitude: response.location.latitude,
                longitude: response.location.longitude
            };
            var cityName = response.city;
            document.querySelector("#city").textContent = response.city;
            console.log("position");
            console.log(position);
            console.log("city");
            console.log(cityName);
            /////////////////////// Second Api Call /////////////////////////
            var xhr2 = new XMLHttpRequest();
            xhr2.addEventListener("load", function() {
                var response2 = JSON.parse(xhr2.responseText);
                console.log("weather response");
                console.log(response2);
                var tempF = Math.round(response2.main.temp *
                    1.8 - 459.67);
                document.querySelector("#temperature").textContent =
                    tempF;
                // This single line of code was really interesting for a tiny array
                document.querySelector("#description").textContent =
                    response2.weather[0].description;
            }, false);
            xhr2.addEventListener("error", function(err) {
                alert("Weather error");
            }, false);
            xhr2.open("GET",
                "https://weathersync.herokuapp.com/weather/" +
                position.latitude + "," + position.longitude,
                true);
            xhr2.send();
            /////////////////////////////////////////////////////////////////////////
            //Icon area code starts here
        }, false);
        xhr.addEventListener("error", function(err) {
            alert(
                "Sorry I could not complete the request. Please try again"
            );
        }, false);
        xhr.open("GET", "https://weathersync.herokuapp.com/ip", true);
        xhr.send();
    } else {
        alert("Oops !! Something went wrong.");
    }
}
getLocationAndWeather();