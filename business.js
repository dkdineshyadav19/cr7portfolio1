var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function foot() {
   window.open( 
              "https://www.cr7footwear.com/", "_blank");
}
   function eye() {
   window.open( 
              "https://www.cr7-eyewear.com/en/", "_blank");
}
        function denim() {
   window.open( 
              "https://cr7denim.store/", "_blank");
}
        function hotel() {
   window.open( 
              "https://www.pestanacr7.com/en", "_blank");
}function frag() {
   window.open( 
              "https://cr7fragrances.store/", "_blank");
}