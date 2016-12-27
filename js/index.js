	weatherAPI();



function weatherAPI(){
var apiKey = "66d813667c145df9";

var api = "https://api.wunderground.com/api/" + apiKey + "/conditions/forecast/geolookup/q/autoip.json"
    //console.log(api);

     //Pulls info such as temps and windspeed from your location
    $.ajax({
      url: api,
      dataType: "json",
      success: function(data){

    var typeWeather = data.current_observation.weather;
    var fTemp = data.current_observation.temp_f;
    var cTemp = data.current_observation.temp_c;
    var city = data.current_observation.display_location.full;
    var windSpeed = data.current_observation.wind_mph;




    $("#city").html(city);
    $("#fTemp").html(fTemp + " &#8457");

      // control the temp button
         var tempSwitch = false;
    $("#fTemp").click(function(){
      if(tempSwitch === false){
        $("#fTemp").html(cTemp + " &#8451");
        tempSwitch = true;
      }
      else{
        $("#fTemp").html(fTemp + " &#8457");
        tempSwitch = false;
      }

    });


     //outputs type of weather in mph
    $("#typeWeather").html(typeWeather);
    //outputs wind speed
    $("#windSpeed").html("Wind Speed: "+windSpeed + " mph");



      }
    });
}
