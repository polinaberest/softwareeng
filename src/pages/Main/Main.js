import template from "./index.html";
import map from "utils/initMap";

import "./styles.scss";

export const Main = () => {
  document.body.innerHTML = template;

  window.initMap = map;
};
