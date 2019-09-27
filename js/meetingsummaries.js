window.onload = function () {
    var cards = [
       {
          "title": "Agenda 9/26",
          "description": "Codeforces Registration",
          "img": "agenda926",
          "link": "https://docs.google.com/presentation/d/1B7c5TFj5bM03UEm1P5HLDoj3gzWRtzcaWIc0hQiGEzo/edit#slide=id.g6375b0a41e_0_0",
       },
       {
          "title": "Agenda 9/19",
          "description": "Registration and ACSL Team",
          "img": "agenda919",
          "link": "https://docs.google.com/presentation/d/1ZhoPvxPNKG2ctBEypKe5vpPQImJ-JNB6sBaPbIFoxp8/edit#slide=id.g6375b0a41e_0_0",
       },
       {
          "title": "Agenda 9/12",
          "description": "First Meeting of the Year!",
          "img": "agenda912",
          "link": "https://docs.google.com/presentation/d/1fiZ_e-4rm9CuWl_9iG0qHq-YJpLc0lL_WHZmECFiNhY/edit#slide=id.p",
       },
    ];
    cards.forEach(function (element) {
       document.getElementById("card-list").innerHTML += '<div class="col-md-4 mt-2"><div class="card"><img class="card-img-top" src="img/' + element.img + '.png" alt="Card Image"><div class="card-body"><h5 class="card-title border-bottom pb-3">' + element.title + '</h5><p class="card-text-custom">' + element.description + '</p><a href="' + element.link + '" class="btn btn-md btn-info float-right" target="__blank">Read more</a></div></div></div>';
    })
 }