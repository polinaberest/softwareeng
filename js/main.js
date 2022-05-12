function app() {
  const auth = window.localStorage.getItem("auth");

  if (auth == AUTH_STATE.ACCESS_DENIED) {
    window.location.pathname = "moscalAlert.html";
  } else if (auth == AUTH_STATE.ACCESS_GRANTED) {
    window.initMap = initMap;
  } else {
    window.location.pathname = "authorization.html";
  }
}

app();
