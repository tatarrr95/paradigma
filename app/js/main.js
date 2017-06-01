$(document).ready(function(){
  $(".testimonials-slider").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    items:1,
    dots: false
  });

  $(".complete-objects-slider").owlCarousel({
  	loop:true,
    margin:15,
    nav:true,
    items:4,
    rewind: true,
    dots: false
  });
  $(".bigSlider-slider").owlCarousel({
  	loop: true,
    nav: true,
    items: 1
  });
  $("body").on("click", "[data-service]", function(){
    // var title = $(".activeService").html();
    $(".activeService").removeClass('activeService');
    $(this).addClass('activeService');
    var numberOfService = $(this).attr("data-service");
    $(".services-body-element-body").children("div").each(function() {
        if(!$(this).hasClass('noDisplay'))
            $(this).addClass('noDisplay');
    });
    $("#service" + numberOfService).removeClass('noDisplay');
  })
  $("#inputTelephone").keyup(function() {
      $("#inputTelephone").val($("#inputTelephone").val().replace(/\s/g, ''));
  });
  $("#inputTelephone2").keyup(function() {
      $("#inputTelephone").val($("#inputTelephone").val().replace(/\s/g, ''));
  });
  $("body").on("click", ".complect-object-img", function(){
    src = $(this).attr('src');
    $(".modal-img").html("");
    $(".modal-img").prepend($(this).clone());
    // $(this).clone();
    mod = $('[data-remodal-id=modal-img]').remodal(); 
    mod.open();
  })
});


function checkPhoneOrEmailAndSend(){
    data = $("#inputTelephone").val();
    if(validator.isEmail(data) || validator.isMobilePhone(data, 'ru-RU')){
        sendMessage();
        $('[data-remodal-id=modal-success]').remodal();
    }
    else{
        alert("Нужно ввести либо e-mail либо телефон");
        $("#inputTelephone").val("");
    }
}

function sendMessage(){
    $.ajax({
        type: 'POST',
        url: "send.php",
        data: $("#form1").serialize(),
        success: function () {
            var inst = $('[data-remodal-id=modal-success]').remodal(); 
            inst.open();
        }
        // dataType: dataType
    });
}

function checkPhoneOrEmailAndSend2(){
    data = $("#inputTelephone2").val();
    if(validator.isEmail(data) || validator.isMobilePhone(data, 'ru-RU')){
        sendMessage();
        $('[data-remodal-id=modal-success]').remodal();
    }
    else{
        alert("Нужно ввести либо e-mail либо телефон");
        $("#inputTelephone2").val("");
    }
}

function sendMessage2(){
    $.ajax({
        type: 'POST',
        url: "send.php",
        data: $("#form2").serialize(),
        success: function () {
            var inst = $('[data-remodal-id=modal-success]').remodal(); 
            inst.open();
        }
        // dataType: dataType
    });
}
/*Карта*/

    // Создает обработчик события window.onLoad
    ymaps.ready(function() {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new ymaps.Map("YMapsID", {
                center: [43.101423, 131.944870],
                zoom: 16
                    //controls: ['zoomControl']
            }),
            traffic = new ymaps.control.TrafficControl();

        map.controls.add(traffic);
        // traffic.showTraffic();

        map.behaviors.disable('scrollZoom');
        map.controls.remove('zoomControl');

        placemark = new ymaps.Placemark(
            [43.101734, 131.948654], { iconContent: "", iconContentSize: [300, 100] }, { preset: 'islands#blueCircleIcon' }
        );

        var coords = [43.101735, 131.949185],
            placemark1 = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageClipRect: [
                    [0, 0],
                    [33, 42]
                ],
                iconImageHref: 'img/map-marker1.png',
                iconImageSize: [33, 42],
                iconImageOffset: [-33, -42]
            });
        placemark1.add(new ymaps.Placemark(coords));


        map.geoObjects.add(placemark1);
    });

// ................................................... /////////