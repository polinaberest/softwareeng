async function initMap() {
  //центр відображуваної карти - Холодногірське метро
  var opt = {
    center: { lat: 49.982614, lng: 36.180993 },
    zoom: 16,
  };

  const map = new google.maps.Map(document.getElementById("map"), opt); //уся карта

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
}
