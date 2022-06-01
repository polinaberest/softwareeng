function app() {
  const auth = window.localStorage.getItem("auth");

  let path = window.location.pathname;

  if (auth == AUTH_STATE.ACCESS_DENIED) {
    window.location.pathname = path.replace(PAGES.MAIN, PAGES.MOSCAL_ALERT);
  } else if (auth == AUTH_STATE.ACCESS_GRANTED) {
    window.initMap = initMap;
  } else {
    window.location.pathname = path.replace(PAGES.MAIN, PAGES.AUTHORIZATION);
  }
}

app();
