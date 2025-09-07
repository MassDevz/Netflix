function myfunction() {
  var x = document.getElementById("search");

    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(function () {
        x.style.opacity = "1";
      }, 0);
    } 
    else {
      x.style.opacity = "0";
      setTimeout(function () {
        x.style.display = "none";
      }, 500);
    }
}


function leftfun(containerID)
{
  var x = document.getElementById(containerID);
  x.scrollLeft = 0;
}

function rightfun(containerID)
{
  var x = document.getElementById(containerID);
  x.scrollLeft = x.scrollWidth;
}

window.onload = function() {
  var header = document.getElementById('header');
  document.body.classList.toggle('invisible', window.pageYOffset === 0);
};

window.onscroll = function() {
  var header = document.getElementById('header');
  document.body.classList.toggle('invisible', window.pageYOffset === 0);
}


var scr;
function play(y){
  var x = document.getElementById("ply");
  x.style.opacity = 1;
  x.style.display="block";
  scr = scrollY;
  window.scrollTo({
    top: 0,
  });



  var z = document.getElementById("vid");
  z.contentWindow.getElement
  var src = "https://www.youtube.com/embed/" + y + "&autoplay=1";
  z.setAttribute("src", src);
  frzScr();
}

function frzScr(){
  originalScrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
}

function cls(){
  var x = document.getElementById("ply");
  x.style.opacity = 0;
  x.style.display="none";

  window.scrollTo({
    top: scr,
  });

  var z = document.getElementById("vid");
  z.setAttribute("src", "");

  unfrzScr();
}

function unfrzScr(){
  document.body.style.overflow = 'auto';
}
