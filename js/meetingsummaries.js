window.onload = function () {
   //New Cards Go On Top
   var cards = [
      {
         "title": "Agenda 10/31",
         "description": "Happy Halloween!",
         "img": "agenda1031",
         "link": "https://docs.google.com/presentation/d/1L279-PChPT2HgKsvQ5mDZQZtlRdsjb45gtBsddtrsv0/edit#slide=id.g6f5bc50028_0_0",
         "show": "",
      },
      {
         "title": "Agenda 10/24",
         "description": "Practice, Practice, Practice!",
         "img": "agenda1024",
         "link": "https://docs.google.com/presentation/d/1nYXbKczkPRNhWhTvazU1zncR1AaAJrzunw20wwNIl0I/edit#slide=id.g6f5bc50028_0_0",
         "show": "",
      }, 
      {
         "title": "Agenda 10/17",
         "description": "Fee Collection for Contest",
         "img": "agenda1017",
         "link": "https://docs.google.com/presentation/d/1pIx1ggAZQN1aF9r97dwhCinaHcQitX-U296bjy2pSlk/edit#slide=id.g651eec94f2_0_0",
         "show": "",
      },
      {
         "title": "Agenda 10/10",
         "description": "Codeforces Registration",
         "img": "agenda926",
         "link": "https://docs.google.com/presentation/d/1B7c5TFj5bM03UEm1P5HLDoj3gzWRtzcaWIc0hQiGEzo/edit#slide=id.g6375b0a41e_0_0",
         "show": "",
      },
      {
         "title": "Agenda 9/19",
         "description": "Registration and ACSL Team",
         "img": "agenda919",
         "link": "https://docs.google.com/presentation/d/1ZhoPvxPNKG2ctBEypKe5vpPQImJ-JNB6sBaPbIFoxp8/edit#slide=id.g6375b0a41e_0_0",
         "show": "",
      },
      {
         "title": "Agenda 9/12",
         "description": "First Meeting of the Year!",
         "img": "agenda912",
         "link": "https://docs.google.com/presentation/d/1fiZ_e-4rm9CuWl_9iG0qHq-YJpLc0lL_WHZmECFiNhY/edit#slide=id.p",
         "show": "",
      },
   ];

   cards.forEach(function (element) {
      if(element.img == ""){
         element.img = "agendanone";
      }
      if(element.link == ""){
         element.link = "https://drive.google.com/drive/folders/1JMPmSETWBihRM0-6KlEnV0D9FaqzaQ3I";
      }
      if(element.description == "") {
         var today = new Date();
         element.description = "Today's Agenda " + (today.getMonth()+1) + "/" + today.getDate();
      }
      if(element.show == "none") {
         element.show = "display: none !important;"
      }
   });

   if (cards[0].show != "") {
      document.getElementById("carouselID").innerHTML += `
   <div class="carousel-item active">
      <a href="`+ cards[1].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[1].img + `.png" alt="First Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[1].title + `</h3>
         <p>`+ cards[1].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[2].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[2].img + `.png" alt="Second Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[2].title + `</h3>
         <p>`+ cards[2].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[3].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[3].img + `.png" alt="Third Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[3].title + `</h3>
         <p>`+ cards[3].description + `</p>
      </div>
   </div>
   `;
   } else {
      document.getElementById("carouselID").innerHTML += `
   <div class="carousel-item active">
      <a href="`+ cards[0].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[0].img + `.png" alt="First Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[0].title + `</h3>
         <p>`+ cards[0].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[1].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[1].img + `.png" alt="Second Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[1].title + `</h3>
         <p>`+ cards[1].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[2].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[2].img + `.png" alt="Third Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[2].title + `</h3>
         <p>`+ cards[2].description + `</p>
      </div>
   </div>
   `;
   }

   cards.forEach(function (element) {
      document.getElementById("card-list").innerHTML += `
      <div class="col-md-4 mt-2" style="` + element.show + `">
         <div class="card">
            <a href="`+ element.link + `" target="__blank"><img class="card-img-top" src="img/` + element.img + `.png" alt="`+ element.title +`"></a>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">` + element.title + `</h5>
               <p class="card-text-custom">` + element.description + `</p>
               <a href="` + element.link + `" class="btn btn-md btn-info float-right" target="__blank">Read more</a>
            </div>
         </div>
      </div>`;
   })

   //Temp Solution for Meeting Summaries Problems ;)

   if(location.origin != "file://") {
      //NAVBAR ITEMS
      document.getElementById("navimgref-sm").setAttribute("href", "/");
      document.getElementById("navimgref-lg").setAttribute("href", "/");
      document.getElementById("homeref").setAttribute("href", "/");
      document.getElementById("aboutref").setAttribute("href", "about");
      document.getElementById("meetingsummariesref").setAttribute("href", "meetingsummaries");
      document.getElementById("contactref").setAttribute("href", "contact");
  } else {
      //NAVBAR ITEMS
      document.getElementById("navimgref-sm").setAttribute("href", "index.html");
      document.getElementById("navimgref-lg").setAttribute("href", "index.html");
      document.getElementById("homeref").setAttribute("href", "index.html");
      document.getElementById("aboutref").setAttribute("href", "about.html");
      document.getElementById("meetingsummariesref").setAttribute("href", "meetingsummaries.html");
      document.getElementById("contactref").setAttribute("href", "contact.html");
  }

}
