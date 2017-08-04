//var link="http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1";
var link = "https://maps.googleapis.com/maps/api/geocode/json?address=%22frazertown%22&key=AIzaSyDtmGvBlqxp2mH9Myu9jWP9RtWLGu1E2tw";
var connect = new XMLHttpRequest();
connect.open('GET', link);

//connect.setRequestHeader("Access-Control-Allow-Origin","*");
//connect.setRequestHeader("Accept","text/html")
connect.onload = function () {
    resp = JSON.parse(connect.responseText)
    console.log(resp.results[0].address_components[0].long_name);
};

connect.send();