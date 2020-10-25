const myText = "It's me again. I like make things pretty, shiny, and animated...";
let myTextLength = myText.length;

function typing(displayedLength) {
    if (displayedLength <= myTextLength) {
        $("#text").text(myText.substring(0, displayedLength));
    }
}

const controller = new ScrollMagic.Controller();
const typewritingOnScroll = new TimelineMax();

const typewritingScene = new ScrollMagic.Scene({ triggerElement: "#text", duration: 405, triggerHook: 0.3, offset: 0 })
    .on('progress', function () {
        let scrollProgress = Math.ceil(typewritingScene.progress() * myTextLength);
        typing(scrollProgress);
    }).setPin('#text').addIndicators({ name: 'typewriting' }).setTween(typewritingOnScroll).addTo(controller);


const container = document.querySelector('.inner-card-container');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const profile_image = document.querySelector('.subject img');
const description = document.querySelector('.info h3');
const languages = document.querySelectorAll('.icon');

container.addEventListener('mousemove', e => {
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY + 1200) / 15;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
console.log(languages);

let timeout = null;

container.addEventListener('mouseenter', e => {
    timeout = setTimeout(() => { card.style.transition = "none"; }, 200);
    title.style.transform = 'translateZ(100px)';
    profile_image.style.transform = 'translateZ(70px) rotateZ(2deg)';
    description.style.transform = 'translateZ(50px)';
    languages.forEach(elem => {
        elem.style.transform = 'translateZ(40px) rotateZ(5deg)';
    });
});


container.addEventListener('mouseleave', e => {
    clearTimeout(timeout);

    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    profile_image.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    languages.forEach(elem => {
        elem.style.transform = 'translateZ(0px) rotateZ(0deg)';
    });
});

