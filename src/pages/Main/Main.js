import template from "./index.html";
import initMap from "utils/initMap";

import "./styles.scss";

export const Main = () => {
  initMap();

  document.body.innerHTML = template;
};
