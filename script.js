const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const sticky_header=document.querySelector(".header");
const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};





mobile_nav.addEventListener("click", () => toggleNavbar());





const sticky_navbar=() =>{
  sticky_header.classList.toggle("sticky",window.scrollY>0);
}
window.addEventListener("scroll",() =>sticky_navbar());



// window.addEventListener("scroll",function(){
//   let header =document.querySelector(header);
//   header=ClassList.toggle("sticky",window.scrollY>0);
// })