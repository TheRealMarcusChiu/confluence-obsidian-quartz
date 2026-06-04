---
title: "JavaScript - Geolocation"
created: 2019-12-21T22:48:08.081-06:00
modified: 2019-12-21T22:58:40.818-06:00
parent: "[[JavaScript - Web／Browser APIs]]"
children: []
---
```xml
<!DOCTYPE html>
<html>
<body>
	<p>Click the button to get your coordinates.</p>
	<button onclick="getLocation()">Try It</button>
	<p id="mapholder"></p>
	<script src="script.js"></script>
</body>
</html>
```
```js
var x = document.getElementById("mapholder");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
```
