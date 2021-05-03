$(document).ready(function(){

    var controller = new ScrollMagic.Controller();
    const container = document.querySelector('.container');

    var scene = new ScrollMagic.Scene({
        triggerElement: 'aside',
    })
    .setClassToggle('aside', 'fade-in')
    // .addIndicators()
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        duration: 300,
        triggerElement: "main",
        triggerHook: 0
    })
    // .addIndicators()
    .setPin('main')
    .addTo(controller);

})


// =============================================================================


const container = document.querySelector(".container");
const card = document.querySelector(".card");
const image = document.querySelector(".card img");

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in
container.addEventListener('mouseenter', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;

    card.style.transition = "none";

    // image.style.transform = "translateZ(150px) rotate(-26deg)";
    image.style.transform = `translatez(150px) rotate(${xAxis}deg)`;
})

// animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";

    image.style.transform = "translateZ(0px) rotate(0deg)"
})


// =============================================================================


var abox1 = document.querySelectorAll(".abox1");
var abox2 = document.querySelectorAll(".abox2");
const more = document.querySelector(".more_container")


for(let i=0; i<abox1.length; i++){
    abox1[i].addEventListener('mouseenter', (e) => {
        abox1[i].style.transform = "translateZ(50px)";
        abox1[i].style.transition = "all 0.2s ease";
    })

    abox1[i].addEventListener('mouseleave', (e)=> {
        abox1[i].style.transform = "translateZ(0px)";
        abox1[i].style.transition = "all 0.3s ease-out";
    })

    abox2[i].addEventListener('mouseenter', (e) => {
        abox2[i].style.transform = "translateZ(50px)";
        abox2[i].style.transition = "all 0.2s ease";
    })

    abox2[i].addEventListener('mouseleave', (e)=> {
        abox2[i].style.transform = "translateZ(0px)";
        abox2[i].style.transition = "all 0.3s ease-out";
    })
}

// ----------------------------------------------------------------------------

more.addEventListener('mouseenter', (e) => {
    more.style.transform = "translateZ(100px)";
    more.style.transition = "all 0.2s ease-out";
})

more.addEventListener('mouseleave', (e) => {
    more.style.transform = "translateZ(0px)"
    more.style.transition = "all 0.3s ease-out";
})