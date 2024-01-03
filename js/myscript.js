// Start Preloader
document.addEventListener("DOMContentLoaded", function () {
  let progress = 0;
  const progressBar = document.getElementById("progress");

  function updateProgress() {
      progress += 4;
      progressBar.textContent = `${progress}%`;
      if (progress >= 100) {
          document.getElementById("preloader").style.display = "none";
          document.getElementById("content").style.display = "block";
          particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
          });
          particlesJS.load('particles-js2', 'js/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
          });
          particlesJS.load('particles-js3', 'js/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
          });
          AOS.init();
      } else {
          setTimeout(updateProgress, 80);
      }
  }
  setTimeout(updateProgress, 2000);
});
// End Preloader
// Start offcanvas
let navLinks = document.querySelectorAll('.navlink');
let dropdownMenus = document.querySelectorAll('.dropdownmenu');

function updateDropdownClasses() {
    for (let i = 0; i < 3; i++) {
        if (window.matchMedia('screen and (max-width: 991px)').matches) {
            dropdownMenus[i].classList.remove('dropdown-menu');
        } else {
            dropdownMenus[i].classList.add('dropdown-menu');
        }
    }
}
function showDropdown(i) {
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
        dropdownMenus.forEach((menu, index) => {
            if (index !== i) {
                menu.classList.remove('shown');
            }
        });
        dropdownMenus[i].classList.toggle('shown');
    }
}
updateDropdownClasses();
window.addEventListener('resize', updateDropdownClasses);
for (let i = 0; i < 3; i++) {
    navLinks[i].addEventListener('click', function () {
        showDropdown(i);
    });
}
// End offcanvas
let searchIcon = document.getElementById("searchIcon");
let searchWebsite = document.getElementById("searchWebsite");
let searchToggle = document.getElementById("searchToggle");
let dimming = document.getElementById("dimming");

function searchOpen() {
  if (searchIcon.className == "fa-solid fa-magnifying-glass icon") {
    searchIcon.className = "fa-solid fa-xmark-large icon";
    searchWebsite.classList.remove('d-none');
    searchToggle.style = "background-color: white;";
    dimming.className = "covering-panel";
  } else if (searchIcon.className == "fa-solid fa-xmark-large icon") {
    searchIcon.className = "fa-solid fa-magnifying-glass icon";
    searchWebsite.classList.add('d-none');
    searchToggle.style = "background-color: transparent;";
    dimming.className = "";
  }
}
searchToggle.onclick = searchOpen;

let websiteSearch = document.getElementById("websiteSearch");
let courseSearch = document.getElementById("courseSearch");
let searchData = document.getElementById("searchData");
let searchRight = document.getElementById("searchRight");
function courseActive() {
  websiteSearch.className = "";
  courseSearch.className = "active";
  searchData.placeholder = "Search for a course";
  searchRight.style =
    "transform: translateX(0); opacity:100%; transition:1s; display:block !important;";
}
courseSearch.onclick = courseActive;

function websiteActive() {
  websiteSearch.className = "active";
  courseSearch.className = "";
  searchData.placeholder = "Search NTI Website";
  searchRight.style =
    "transform: translateX(100%); opacity:0; transition:1s; display:none;";
}
websiteSearch.onclick = websiteActive;

var prevScrollpos = window.scrollY;

window.onscroll = function () {
var vertical_position = 0;
if (scrollY){
    vertical_position = scrollY;}
else if (document.documentElement.clientHeight){
    vertical_position = document.documentElement.scrollTop;}
else if (document.body){
    vertical_position = document.body.scrollTop;}
var nti = document.getElementById("nti");
let mainNav= document.getElementById("mainNav");
if(scrollY>1){
  mainNav.classList.add('condensed');
}else{
  mainNav.classList.remove('condensed');
}

let fixedNav= document.getElementById('fixedNav')
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos ) {
    fixedNav.style.top = "0";
  } else if (prevScrollpos < currentScrollPos && scrollY >900 ){
    fixedNav.style.top = "-84px";
  }
  prevScrollpos = currentScrollPos;

if (scrollY<120 && window.matchMedia('screen and (min-width: 1399px)').matches){
    nti.style.bottom = vertical_position + 0 + "px" ;
    console.log(scrollY);
    console.log(nti.style.top);
}else if (scrollY<135 && window.matchMedia('screen and (min-width: 767px) and (max-width: 1399px)').matches){
    nti.style.bottom = vertical_position + 0 + "px" ; 
    console.log(scrollY);
    console.log(nti.style.top);
}else if (window.matchMedia('screen and (max-width: 767px) and (min-width:575px)').matches && scrollY<95){
    nti.style.bottom = vertical_position + 0 + "px" ;
} else if (window.matchMedia('screen and (max-width: 576px)').matches && scrollY<55){
    nti.style.bottom = vertical_position + 0 + "px" ;
}
// Start go to top
let toTop= document.getElementById('backToTop');
if (scrollY > 150) { 
  toTop.classList.add('show')}
  else{
    toTop.classList.remove('show')
  }
// End Go To Top
};

// Start Departments
let departmentName= document.querySelectorAll('.dept-head');
let departmentContent= document.querySelectorAll('.dept-container');
let downArrow = document.querySelectorAll('.dept-head i');

for (let i=0 ; i<5 ; i++){
    function showContent(){
      if (downArrow[i].className == 'fa-solid fa-caret-right'){
            departmentContent[i].classList.add('shown');
            downArrow[i].classList.add('fa-caret-down');
            downArrow[i].classList.remove('fa-caret-right');
      } else if (downArrow[i].className == 'fa-solid fa-caret-down'){
              departmentContent[i].classList.remove('shown');
              downArrow[i].classList.remove('fa-caret-down');
              downArrow[i].classList.add('fa-caret-right');
      } 
    }
  departmentName[i].onclick=showContent;
}
// End Deparments

if (window.matchMedia('screen and (max-width: 415px)').matches){
  document.querySelector('meta[name="viewport"]').setAttribute("content", "width=414");
}
//start initiatives
let initiativecont= document.querySelectorAll('.initiative-section');
let initiativebg= document.querySelectorAll('.bg-initiative');
let initiative= document.querySelectorAll('.int');
for (let i=0 ; i<5 ; i++){
  if (window.matchMedia('screen and (max-width: 991px)').matches){
    initiativecont[i].removeAttribute("data-aos");
    initiativebg[i].removeAttribute('data-aos');
    initiative[i].setAttribute("data-aos", "fade-up")
  } else{
    initiative[i].removeAttribute('data-aos');
  }
}
//end initiatives