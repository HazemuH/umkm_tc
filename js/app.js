const header = document.querySelector("header");
const sectionOne = document.querySelector("#home");

const sectionOneOptions = {
  rootMargin: "-700px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries, 
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);








$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

  });


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

