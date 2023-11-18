let che = document.querySelectorAll('#checkbox');
let stats = document.querySelectorAll('img');
let a = document.querySelectorAll('a');
let maxi = document.querySelector('.maxi');
let mini = document.querySelector('.mini');
let sty = `
  :root{
  --darkmode: #000 !important;
  --lightmode: #ffffff !important;
  --dbodymode: #ffffff !important;
  --lbodymode: #15202b !important;
  }
  
 .navbar-light .navbar-brand {
  color: #fff;
}
.navbar-light .navbar-nav .nav-link {
  color: rgb(255 255 255) !important;
}
a.nav-item.nav-link {
  color: #ffffff !important;
}
a.nav-item.nav-link.active {
  color: #d1a103 !important;
}
.section-header p::before {
  background: #ffffff !important;
}
.section-header p::after {
  background: #ffffff !important;
}
.section-header p {
  background: #15202b !important;
}
.section-header h2 {
  color: #f2f2f2 !important;
}
.service .service-icon {
  background: #15202b !important;
}
.service .service-text h3 {
  color: #f2f2f2;
}
.service .service-text p {
  color: #f2f2f2;
}
.service .service-item:hover {
  box-shadow: inset 800px 0 0 0 #f2f2f2;
}
.service .service-item:hover .service-text h3,
.service .service-item:hover .service-text p {
    color: #15202b;
}
  `;
  let sty1 = `
  
  `;  
  let san = document.querySelector("style");
  function staT(){
    stats[4].setAttribute("src","https://github-readme-stats.vercel.app/api?username=ojutalayomi&amp;theme=dark&amp;hide_border=true&amp;include_all_commits=false&amp;count_private=false");
    stats[5].setAttribute("src","https://github-readme-streak-stats.herokuapp.com/?user=ojutalayomi&amp;theme=dark&amp;hide_border=true");
    stats[6].setAttribute("src","https://github-readme-stats.vercel.app/api/top-langs/?username=ojutalayomi&amp;theme=dark&amp;hide_border=true&amp;include_all_commits=false&amp;count_private=false&amp;layout=compact");
  }

che[0].addEventListener('click',function (){
  if(che[0].checked == true){
  san.innerHTML = sty;
  staT();
  } else if(che[0].checked == false) {
    san.innerHTML = "";
  }
})

che[1].addEventListener('click',function (){
  if(che[1].checked == true){
  san.innerHTML = sty;
  staT();
  } else if(che[1].checked == false) {
    san.innerHTML = "";
  }
})
setInterval(() => {
if(window.screen.width < 1063){
  maxi.style.display = "none";
  mini.style.display ="block";
} else {
  mini.style.display ="none";
  maxi.style.display = "block";
} 
  
}, 1000);
//che.onclick = () => {

//}

// Analog Clock
var secondHand = document.querySelector(".second-hand");
var minsHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
setInterval(setDate, 1000);
function setDate() { 
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  var mins = now.getMinutes();
  var minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  var hour = now.getHours();
  var hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setDate();
