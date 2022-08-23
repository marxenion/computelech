  // // search-box open close js code
  // let navbar = document.querySelector(".navbar");
  // let searchBox = document.querySelector(".search-box .bx-search");
  // searchBox.addEventListener("click", ()=>{
  //   navbar.classList.toggle("showInput");
  //   if(navbar.classList.contains("showInput")){
  //     searchBox.classList.replace("bx-search" ,"bx-x");
  //   } else {
  //     searchBox.classList.replace("bx-x" ,"bx-search");
  //   }
  // });
  
  // Responsive sidebar burger open close 
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // Responsive sidebar submenu links open close 
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  
  // toggle darkmode
  function myfunction() {
    var element = document.body;
    var darkform = document.querySelector(".darkform1"); //try
    const cardDark = document.querySelector(".cardDark1");
    const cardDark2 = document.querySelector(".cardDark2");
    const cardDark3 = document.querySelector(".cardDark3");
    
    document.getElementById("bttn").style.body;
    element.classList.toggle("dark-mode");
    darkform.classList.toggle("darkform"); //try
    cardDark.classList.toggle("carDark");
    cardDark2.classList.toggle("carDark");
    cardDark3.classList.toggle("carDark");
  }

  // toggle show/hide navbar when scroll
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
  

  