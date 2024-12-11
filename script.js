const frwd = document.getElementById("frwd1");
const back = document.getElementById("bck1");

const itemdiv =document.getElementById("imgs")
itemdiv.style.scrollBehavior="smooth"

frwd.addEventListener("click",function(){
  scroll(450,0)
});
back.addEventListener("click",function(){
  scroll(-450,0)
});

function scroll(x,y){
  itemdiv.scrollBy(x,y);
}


const frwd1 = document.getElementById("frwd2");
const back1 = document.getElementById("bck2");

const rescard =document.getElementById("res-card")
rescard.style.scrollBehavior="smooth"

frwd1.addEventListener("click",function(){
  scrollitem(450,0)
});
back1.addEventListener("click",function(){
  scrollitem(-450,0)
});


function scrollitem(x,y){
  rescard.scrollBy(x,y);
}


const nav = document.getElementById("nav");
const target=document.getElementById("targetDiv");

const offsetPosition=target.offsetTop;

const orginalNav =nav.innerHTML;

window.addEventListener("scroll",()=>{
  if (window.scrollY < offsetPosition) {
    nav.innerHTML=orginalNav;
  }else{
    
    nav.innerHTML=
    `<div class="nav-hidden montserrat-proxima">
         <div class="nav2">

            <div class="filte-nav roboto-regular">
               <div class="filtr fi-b1">
                  <h3 class="fltr-font">Filter</h3>
               </div>
               <div class="sort fi-b1">
                  <h3 class="fltr-font">Sort By</h3>
               </div>
               <div class="rating fi-b1">
                  <h3 class="fltr-font">Fast Delivery</h3>
               </div>
               <div class="newon fi-b1">
                  <h3 class="fltr-font">New on Swiggy</h3>
               </div>
               <div class="rating fi-b1">
                  <h3 class="fltr-font">Ratings 4.0+</h3>
               </div>
               <div class="veg fi-b1">
                  <h3 class="fltr-font">Pure Veg</h3>
               </div>
               <div class="offers fi-b1">
                  <h3 class="fltr-font">Offers</h3>
               </div>
               <div class="r3-6 fi-b1">
                  <h3 class="fltr-font">Rs.300 - Rs.600</h3>
               </div>
               <div class="l3 fi-b1">
                  <h3 class="fltr-font">Less than Rs.300</h3>
               </div>
            </div>

            <div class="search-bar">
               <h4 class="search-txt">Search fo restaurant and food</h4>
            </div>

         </div>
      </div>`

  }
});