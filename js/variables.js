const AUTH_STATE = {
  ACCESS_GRANTED: "access granted",
  ACCESS_DENIED: "access denied",
};

const PAGES = {
  MAIN: "index.html",
  AUTHORIZATION: "authorization.html",
  MOSCAL_ALERT: "moscalAlert.html",
};

const shopIcon =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const basementIcon =
  "https://www.google.de/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/lodging_pinlet-2-medium.png&highlight=ec407a,f06292,ffffff?scale=1.5";

const markers = [
  {
    building: "метро",
    position: {
      lat: 49.982614,
      lng: 36.180993,
    },
    title: "Бомбосховище",
    info: "<h3>Бомбосховище: Метро</h3><p>Відчинено: цілодобово<br><b>Заповнене: ні</b><br>Місць усього: 800<br></p>",
  },
  {
    building: "метро",
    position: {
      lat: 49.9828656290608,
      lng: 36.18380653363429,
    },
    title: "Бомбосховище",
    info: "<h3>Бомбосховище: Метро</h3><p>Відчинено: цілодобово<br><b>Заповнене: ні</b><br>Місць усього: 800<br></p>",
  },
  {
    building: "багатоповерхівка - підвал",
    position: {
      lat: 49.98335778691107,
      lng: 36.17703528493821,
    },
    title: "Бомбосховище",
    info: "<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: ні</b><br>Місць усього: 350<br></p>",
  },
  {
    building: "дім офіцерів- підвал",
    position: {
      lat: 49.98045474751537,
      lng: 36.174198495690995,
    },
    title: "Бомбосховище",
    info: "<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: так</b><br>Місць усього: 220<br></p>",
  },
  {
    building: "школа- підвал",
    position: {
      lat: 49.98040844502935,
      lng: 36.187603763864054,
    },
    title: "Бомбосховище",
    info: "<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: так</b><br>Місць усього: 100<br></p>",
  },
  {
    building: "атб",
    position: {
      lat: 49.984953,
      lng: 36.174822,
    },
    title: "Магазин",
    info: "<h3>Магазин: АТБ</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: є</b><br></p>",
  },
  {
    building: "класс",
    position: {
      lat: 49.98082578672931,
      lng: 36.17856207520052,
    },
    title: "Магазин",
    info: "<h3>Магазин: Рост</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: немає</b><br></p>",
  },
  {
    building: "рост",
    position: {
      lat: 49.98516712186147,
      lng: 36.18660233522634,
    },
    title: "Магазин",
    info: "<h3>Магазин: Класс</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: є</b><br></p>",
  },
  {
    building: "підвал 1",
    position: {
      lat: 49.982256188429986,
      lng: 36.17910801176316,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 50<br></p>",
    title: "Підвал",
  },
  {
    building: "підвал 2",
    position: {
      lat: 49.981669771291386,
      lng: 36.18061863950472,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 30<br></p>",
    title: "Підвал",
  },
  {
    building: "підвал 3",
    position: {
      lat: 49.9837155783426,
      lng: 36.179280703798355,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: так</b><br>Місць усього: 35<br></p>",
    title: "Підвал",
  },
  {
    building: "підвал 4",
    position: {
      lat: 49.985062933206535,
      lng: 36.176041214382124,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 60<br></p>",
    title: "Підвал",
  },
  {
    building: "підвал 5",
    position: {
      lat: 49.98428472422977,
      lng: 36.18013573630197,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: так</b><br>Місць усього: 80<br></p>",
    title: "Підвал",
  },
  {
    building: "підвал 6",
    position: {
      lat: 49.9836652453822,
      lng: 36.17543305742456,
    },
    info: "<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 123<br></p>",
    title: "Підвал",
  },
];
