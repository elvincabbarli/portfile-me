  // search-box open close js code
  let navbar = document.querySelector(".navbar");

  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.top = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.top = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let designerArrow = document.querySelector(".designer-arrow");
  designerArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
   let moreArrow = document.querySelector(".developer-arrow");
   moreArrow.onclick = function() {
    navLinks.classList.toggle("show2");
   }
   let jsArrow = document.querySelector(".js-arrow");
   jsArrow.onclick = function() {
    navLinks.classList.toggle("show3");
   }


