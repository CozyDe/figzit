var navDown = document.querySelector("#toggledown");
var bring = document.querySelector("#bring");
navDown.addEventListener("click", function changeNav(){
    bring.classList.toggle("is-active");
    navDown.classList.toggle("change");
});

//  window.onscroll = function() {
//      var currentScroll = window.pageYOffset;
//      if (currentScroll > 30) {
//          document.querySelector(".nav-banner").style.height = "8vh";
//      }
//       else {
//           document.querySelector(".nav-banner").style.height = "5vh";
//     }
//  }