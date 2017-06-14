function checkPhoneOrEmailAndSend() {
    data = $("#inputTelephone").val(); 
    if(data != "")
        sendMessage();
    else
        alert("Введите данные в форму");
}

function sendMessage() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: $("#form1").serialize(),
        success: function() {
            $("[data-remodal-id=modal-success]").remodal().open()
        }
    })
}

function checkPhoneOrEmailAndSend2() {
    data = $("#inputTelephone2").val(); 
    if(data != "")
        sendMessage2();
    else
        alert("Введите данные в форму");
}

function sendMessage2() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            telephone: $("#inputTelephone2").val(),
            title: serviceTitle
        },
        success: function() {
            $("[data-remodal-id=modal-success]").remodal().open()
        }
    })
}
var serviceTitle = "Электромонтаж в квартире";
$(document).ready(function() {
    $(".testimonials-slider").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        items: 1,
        dots: !1
    }), $(".complete-objects-slider").owlCarousel({
        loop: !0,
        margin: 15,
        nav: !0,
        items: 4,
        rewind: !0,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 4
            }
        }
    }), $(".bigSlider-slider").owlCarousel({
        loop: !0,
        nav: !0,
        items: 1
    }), $(".services-body-select-forMobile-select").change(function() {
        numberOfService = $(this).val(), $(".services-body-element-body").children("div").each(function() {
            $(this).hasClass("noDisplay") || $(this).addClass("noDisplay")
        }), $("#service" + numberOfService).removeClass("noDisplay"), $(".services-body-element").css("background", "url('img/services-backgrounds/" + numberOfService + ".jpg') no-repeat"), $(".services-body-element").css("background-size", "cover"), serviceTitle = $("#service" + numberOfService).children(".services-body-element-title").html()
    }), $("body").on("click", "[data-service]", function() {
        $(".activeService").removeClass("activeService"), $(this).addClass("activeService"), numberOfService = $(this).attr("data-service"), $(".services-body-element-body").children("div").each(function() {
            $(this).hasClass("noDisplay") || $(this).addClass("noDisplay")
        }), $("#service" + numberOfService).removeClass("noDisplay"), $(".services-body-element").css("background", "url('img/services-backgrounds/" + numberOfService + ".jpg') no-repeat"), $(".services-body-element").css("background-size", "cover"), serviceTitle = $("#service" + numberOfService).children(".services-body-element-title").html()
    }), $("#inputTelephone").keyup(function() {
        $("#inputTelephone").val($("#inputTelephone").val().replace(/\s/g, ""))
    }), $("#inputTelephone2").keyup(function() {
        $("#inputTelephone").val($("#inputTelephone").val().replace(/\s/g, ""))
    }), $("body").on("click", ".testimonials-slider img", function() {
        src = $(this).attr("src"), img = src.split("/"), img = img[2].substr(0, img[2].length - 4) + "big.jpg", $(".modal-img").html("<div data-remodal-action='close' class='modal-close'></div><img class='img-responsive' src='img/testimonials/" + img + "'></img>"), mod = $("[data-remodal-id=modal-img]").remodal(), mod.open()
    })
}), ymaps.ready(function() {
    var e = new ymaps.Map("YMapsID", {
            center: [43.101423, 131.94487],
            zoom: 16
        }),
        i = new ymaps.control.TrafficControl;
    e.controls.add(i), e.behaviors.disable("scrollZoom"), e.controls.remove("zoomControl"), placemark = new ymaps.Placemark([43.101734, 131.948654], {
        iconContent: "",
        iconContentSize: [300, 100]
    }, {
        preset: "islands#blueCircleIcon"
    });
    var s = [43.101735, 131.949185],
        o = new ymaps.GeoObjectCollection({}, {
            iconLayout: "default#image",
            iconImageClipRect: [
                [0, 0],
                [33, 42]
            ],
            iconImageHref: "img/map-marker1.png",
            iconImageSize: [33, 42],
            iconImageOffset: [-33, -42]
        });
    o.add(new ymaps.Placemark(s)), e.geoObjects.add(o)
});

$(document).ready(function() {
    // $("body").on("click", ".complect-object-img", function() {
    //     src = $(this).attr("src");
    //     img = src.split("/");
    //     console.log(img[1]); 
    //     $(".modal-img").html("<div data-remodal-action='close' class='modal-close'></div><img class='img-responsive' src='img/complete-object-big/" + img[1] + "'></img>"); 
    //     mod = $("[data-remodal-id=modal-img]").remodal(); 
    //     mod.open();
    // })
    $(".complete-objects-slider").magnificPopup({
        delegate: '.gallery-item', // the selector for gallery item
        type: 'image',
        navigateByImgClick: true,
        gallery: {
          enabled:true
        },
        image: {
            titleSrc: ".complete-objects-sub-item-description"
        }
    })
});