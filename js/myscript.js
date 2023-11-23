let searchIcon = document.getElementById("searchIcon");
let searchWebsite = document.getElementById("searchWebsite");
let searchToggle = document.getElementById("searchToggle");
let dimming = document.getElementById("dimming");

function searchOpen() {
  if (searchIcon.className == "fa-solid fa-magnifying-glass icon") {
    searchIcon.className = "fa-solid fa-xmark-large icon";
    searchWebsite.style = "z-index: 31;";
    searchToggle.style = "background-color: white;";
    dimming.className = "covering-panel";
  } else if (searchIcon.className == "fa-solid fa-xmark-large icon") {
    searchIcon.className = "fa-solid fa-magnifying-glass icon";
    searchWebsite.style = "z-index: -1;";
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

// let navItem = document.querySelectorAll('.dropdown-menu');
// let navLink = document.querySelectorAll('.nav-link');

// function showDropDown(){
//     navItem.style ='display:block;'
// }
// navLink.onclick = showDropDown;


window.onscroll = function () {
var vertical_position = 0;
if (scrollY){
    //usual
    vertical_position = scrollY;}
else if (document.documentElement.clientHeight){
    //ie
    vertical_position = document.documentElement.scrollTop;}
else if (document.body){
    //ie quirks
    vertical_position = document.body.scrollTop;}
    // console.log(scrollY);
var nti = document.getElementById("nti");
if (scrollY<137 && window.matchMedia('screen and (min-width: 767px)').matches){
    nti.style.bottom = vertical_position + 0 + "px" ; //200 is arbitrary.. just to show you could now position it how you want
    console.log(scrollY);
    console.log(nti.style.top);
}else if (window.matchMedia('screen and (max-width: 767px) and (min-width:575px)').matches && scrollY<90 ){
    nti.style.bottom = vertical_position + 0 + "px" ;
} else if (window.matchMedia('screen and (max-width: 576px)').matches && scrollY<52){
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
let departmentContent= document.querySelectorAll('.dept-content');
let downArrow = document.querySelectorAll('.dept-head i');
// for (let i=0 ; i<5 ; i++){
//     function showContent(){
//       departmentContent[i].classList.toggle('d-flex');
//       downArrow[i].classList.toggle('fa-caret-down');
//       downArrow[i].classList.toggle('fa-caret-right');

for (let i=0 ; i<5 ; i++){
    function showContent(){
      if (downArrow[i].className == 'fa-solid fa-caret-right'){
            departmentContent[i].classList.add('visible');
            // departmentContent[i].classList.remove('p-0', 'border-0');
            downArrow[i].classList.add('fa-caret-down');
            downArrow[i].classList.remove('fa-caret-right');
      } else if (downArrow[i].className == 'fa-solid fa-caret-down'){
              departmentContent[i].classList.remove('visible');
              // departmentContent[i].classList.add('p-0', 'border-0');
              downArrow[i].classList.remove('fa-caret-down');
              downArrow[i].classList.add('fa-caret-right');
      } 
    }
  departmentName[i].onclick=showContent;
}
// End Deparments

//for small screens
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
    initiative[i].removeAttribute('data-aos')
  }
}
//end initiatives