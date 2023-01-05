const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const sticky_header=document.querySelector(".header");
const container=document.querySelector(".container1");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};





if (mobile_nav.addEventListener("click", () => toggleNavbar())) {
  container.classList.toggle("expand");
}


// script of sticky navbar
const sticky_navbar=() =>{
  sticky_header.classList.toggle("sticky",window.scrollY>0);
}
window.addEventListener("scroll",() =>sticky_navbar());



// showing time
  timel=document.getElementById('time');
  datel=document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
//     const minutes = time.getMinutes();
//     const seconds=time.getSeconds();
//     const ampm = hour >=12 ? 'PM' : 'AM'

//     timel.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+':'+(seconds<10?'0'+seconds:seconds)+ ' ' + `<span id="am-pm" style="font-size:2rem">${ampm}</span>`

//     datel.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

// }, 1000);