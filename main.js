function initMap() {
    //центр відображуваної карти - Холодногірське метро
    var opt = {
        center: {lat: 49.982614, lng:36.180993 },
        zoom: 16,
    }

    const map = new google.maps.Map(document.getElementById("map"), opt); //уся карта

    const shopIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const basementIcon = 'https://www.google.de/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/lodging_pinlet-2-medium.png&highlight=ec407a,f06292,ffffff?scale=1.5';

    //далі - маркери бомбосховищ
    const markerMetro = new google.maps.Marker({
        position: {lat: 49.982614, lng:36.180993 }, //метро
        map: map,
        title: "Бомбосховище",
      
    });

    const markerMetro2 = new google.maps.Marker({
        position: {lat: 49.9828656290608,  lng:36.18380653363429 }, //метро - другий вхід
        map: map,
        title: "Бомбосховище",

    });

    const markerBlock = new google.maps.Marker({
        position: {lat: 49.98335778691107,  lng:36.17703528493821 }, //багатоповерхівка - підвал
        map: map,
        title: "Бомбосховище",

    });

    const markerB = new google.maps.Marker({
        position: {lat: 49.98045474751537,  lng:36.174198495690995 }, //дім офіцерів- підвал
        map: map,
        title: "Бомбосховище",

    });

    const markerS = new google.maps.Marker({
        position: {lat: 49.98040844502935,  lng:36.187603763864054 }, //школа- підвал
        map: map,
        title: "Бомбосховище",

    });

    //інфовікна бомбосховищ
    let infoMetro = new google.maps.InfoWindow({
        content: '<h3>Бомбосховище: Метро</h3><p>Відчинено: цілодобово<br><b>Заповнене: ні</b><br>Місць усього: 800<br></p>'
    })
    let infoBlock = new google.maps.InfoWindow({
        content: '<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: ні</b><br>Місць усього: 350<br></p>'
    })
    let infoB = new google.maps.InfoWindow({
        content: '<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: так</b><br>Місць усього: 220<br></p>'
    })
    let infoS = new google.maps.InfoWindow({
        content: '<h3>Бомбосховище: Підвал багатоповерхівки</h3><p>Відчинено: цілодобово<br><b>Заповнене: так</b><br>Місць усього: 100<br></p>'
    })

    markerMetro.addListener("click", function(){
        infoMetro.open(map, markerMetro)
    })
    markerMetro2.addListener("click", function(){
        infoMetro.open(map, markerMetro2)
    })
    markerBlock.addListener("click", function(){
        infoBlock.open(map, markerBlock)
    })
    markerB.addListener("click", function(){ //НЕ ПРАЦЮЄ
        infoB.open(map, markerB)
    })
    markerS.addListener("click", function(){ //НЕ ПРАЦЮЄ
        infoS.open(map, markerS)
    })

    //далі - маркери магазинів (додати event listeners поля: гуманітарка - є-немає, графік роботи)
    const markerAtb = new google.maps.Marker({
        position: {lat: 49.984953,  lng:36.174822, }, //атб
        map: map,
        title: "Магазин",
        icon: shopIcon,
    });

    const markerClass = new google.maps.Marker({
        position: {lat: 49.98082578672931, lng:36.17856207520052}, //класс
        map: map,
        title: "Магазин",
        icon: shopIcon,
    });

    const markerRost = new google.maps.Marker({
        position: {lat: 49.98516712186147,   lng:36.18660233522634}, //рост
        map: map,
        title: "Магазин",
        icon: shopIcon,
    });

    //інфовікна магазинів
    let infoAtb = new google.maps.InfoWindow({
        content: '<h3>Магазин: АТБ</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: є</b><br></p>'
    })
    let infoRost = new google.maps.InfoWindow({
        content: '<h3>Магазин: Рост</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: немає</b><br></p>'
    })
    let infoClass = new google.maps.InfoWindow({
        content: '<h3>Магазин: Класс</h3><p>Відчинено: цілодобово<br><b>Гуманітарна допомога: є</b><br></p>'
    })

    markerAtb.addListener('click', () => {
        infoAtb.open(map, markerAtb);
    });
    markerRost.addListener('click', () => {
        infoRost.open(map, markerRost);
    });
    markerClass.addListener('click', () => {
        infoClass.open(map, markerClass);
    });

    //далі - маркери домів з підвалами (знайти іконку-маркер, створити об'єкти + навісити інформаційні вікна, як для магазів та бомбосховищ) 
    const markerBase1 = new google.maps.Marker({
        position: {lat: 49.982256188429986,  lng:36.17910801176316, }, //підвал 1
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });
    const markerBase2 = new google.maps.Marker({
        position: {lat: 49.981669771291386,  lng:36.18061863950472, }, //підвал 2
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });
    const markerBase3 = new google.maps.Marker({
        position: {lat: 49.9837155783426,  lng:36.179280703798355, }, //підвал 3
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });
    const markerBase4 = new google.maps.Marker({
        position: {lat: 49.985062933206535,  lng:36.176041214382124, }, //підвал 4
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });
    const markerBase5 = new google.maps.Marker({
        position: {lat: 49.98428472422977,  lng:36.18013573630197, }, //підвал 5
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });
    const markerBase6 = new google.maps.Marker({
        position: {lat: 49.9836652453822,  lng:36.17543305742456, }, //підвал 1
        map: map,
        title: "Підвал",
        icon: basementIcon,
    });

    //інфовікна магазинів
    let infoBase1 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 50<br></p>'
    })
    let infoBase2 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 30<br></p>'
    })
    let infoBase3 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: так</b><br>Місць усього: 35<br></p>'
    })
    let infoBase4 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 60<br></p>'
    })
    let infoBase5 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: так</b><br>Місць усього: 80<br></p>'
    })
    let infoBase6 = new google.maps.InfoWindow({
        content: '<h3>Підвал</h3><p>Відчинений: цілодобово<br><b>Заповнений: ні</b><br>Місць усього: 123<br></p>'
    })

    markerBase1.addListener('click', () => {
        infoBase1.open(map, markerBase1);
    });
    markerBase2.addListener('click', () => {
        infoBase2.open(map, markerBase2);
    });
    markerBase3.addListener('click', () => {
        infoBase3.open(map, markerBase3);
    });
    markerBase4.addListener('click', () => {
        infoBase4.open(map, markerBase4);
    });
    markerBase5.addListener('click', () => {
        infoBase5.open(map, markerBase5);
    });
    markerBase6.addListener('click', () => {
        infoBase6.open(map, markerBase6);
    });
}

window.initMap = initMap;