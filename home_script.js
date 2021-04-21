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


const abox1 = document.querySelector(".abox1");
const abox2 = document.querySelector(".abox2");
const abox3 = document.querySelector("#abox3");
const abox4 = document.querySelector("#abox4");

abox1.addEventListener('mouseenter', (e) => {
    abox1.style.transform = "translateZ(50px)";
    abox1.style.transition = "all 0.2s ease";
})

abox1.addEventListener('mouseleave', (e)=> {
    abox1.style.transform = "translateZ(0px)";
    abox1.style.transition = "all 0.3s ease-out";
})

// ----------------------------------------------------------------------------

abox2.addEventListener('mouseenter', (e) => {
    abox2.style.transform = "translateZ(50px)";
    abox2.style.transition = "all 0.2s ease";
})

abox2.addEventListener('mouseleave', (e)=> {
    abox2.style.transform = "translateZ(0px)";
    abox2.style.transition = "all 0.3s ease-out"
})

// ----------------------------------------------------------------------------

abox3.addEventListener('mouseenter', (e) => {
    abox3.style.transform = "translateZ(50px)";
    abox3.style.transition = "all 0.2s ease";
})

abox3.addEventListener('mouseleave', (e)=> {
    abox3.style.transform = "translateZ(0px)";
    abox3.style.transition = "all 0.3s ease-out"
})

// ----------------------------------------------------------------------------

abox4.addEventListener('mouseenter', (e) => {
    abox4.style.transform = "translateZ(50px)";
    abox4.style.transition = "all 0.2s ease";
})

abox4.addEventListener('mouseleave', (e)=> {
    abox4.style.transform = "translateZ(0px)";
    abox4.style.transition = "all 0.3s ease-out"
})