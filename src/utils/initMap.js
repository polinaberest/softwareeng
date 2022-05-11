import loadGoogleMapsApi from "load-google-maps-api";

import markers from "./markers.json";

async function initMap() {
  const googleMaps = await loadGoogleMapsApi({
    key: "AIzaSyCUvdoXoG8eU_Lnhn6a8wUzVPHZD3aQano",
  });

  //центр відображуваної карти - Холодногірське метро
  var opt = {
    center: { lat: 49.982614, lng: 36.180993 },
    zoom: 16,
  };

  const map = new googleMaps.Map(document.getElementById("map"), opt); //уся карта

  const createMarker = (props) => {
    const markerMetro = new googleMaps.Marker({
      map: map,
      title: props.title,
      position: props.position,
      icon: props.icon || null,
    });

    let info = new googleMaps.InfoWindow({
      content: props.info,
    });

    markerMetro.addListener("click", function () {
      info.open(map, markerMetro);
    });
  };

  const shopIcon =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const basementIcon =
    "https://www.google.de/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/lodging_pinlet-2-medium.png&highlight=ec407a,f06292,ffffff?scale=1.5";

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

export default initMap;
