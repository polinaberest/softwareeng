async function initMap() {


  //центр відображуваної карти - Холодногірське метро
  var opt = {
    center: { lat: 49.982614, lng: 36.180993 },
    zoom: 16,
  };

  const map = new google.maps.Map(document.getElementById("map"), opt); //уся карта

  getUserLocation();
  var btn = document.getElementById("locationBtn");
  btn.onclick = getUserLocation; 
  
  const createMarker = (props) => {
    const markerMetro = new google.maps.Marker({
      map: map,
      title: props.title,
      position: props.position,
      icon: props.icon || null,
    });

    let info = new google.maps.InfoWindow({
      content: props.info,
    });

    markerMetro.addListener("click", function () {
      info.open(map, markerMetro);
    });
  };

  markers.forEach((marker) => {
    let icon = "";

    if (marker.title == "Магазин") {
      icon = shopIcon;
    }
    if (marker.title == "Підвал") {
      icon = basementIcon;
    }

    createMarker({
      position: marker.position,
      title: marker.title,
      info: marker.info,
      icon: icon,
    });
  });

//Знаходження та відмитка юзера на карті(Автоматично робе фокус на домівки користувача)
function getUserLocation()
  {
  navigator.geolocation.getCurrentPosition(
    function geolocationSuccess(position) {
      var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var userIcon =
      {
        url: "https://icon-library.com/images/small-home-icon/small-home-icon-14.jpg", 
        scaledSize: new google.maps.Size(40, 40)
      };

      createMarker({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        title: "Ви",
        info: "<h3>Ваша домівка</h3><p>Відчинено: тільки для вас<br></p>",
        icon: userIcon,
      });

      map.setCenter(location);
    },
    function geolocationFailed(position)
    {
      alert("Не вдалося отримати вашу геолокацію")
    });
  }

}

