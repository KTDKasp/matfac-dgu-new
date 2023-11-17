let center = [42.978654554352346, 47.49585513331116];
let iconImageHref = "https://cdn-icons-png.flaticon.com/512/4653/4653993.png";

function init(){
    let yMap = new ymaps.Map("yMap", {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {
        hintContent: `ФМиКН ДГУ, Махачкала <br> Дзержинского 12`,
    }, {
        iconLayout: "default#image",
        iconImageHref: iconImageHref,
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -35]
    });

    yMap.controls.remove('geolocationControl'); // удаляем геолокацию
    yMap.controls.remove('searchControl'); // удаляем поиск
    yMap.controls.remove('trafficControl'); // удаляем контроль трафика
    yMap.controls.remove('typeSelector'); // удаляем тип
    yMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    yMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    yMap.controls.remove('rulerControl'); // удаляем контрол правил

    yMap.geoObjects.add(placemark);
}

ymaps.ready(init);