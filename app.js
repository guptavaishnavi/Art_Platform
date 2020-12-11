const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const fabbtn = document.querySelector('.fab')

AOS.init();

burger.addEventListener('click', () => {
    
    burger.classList.toggle('toggle')
    navLinks.classList.toggle('show-nav')
})

fabbtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

const tl = gsap.timeline({defaults: {ease: 'power1'}})

tl.to('.navbar', {opacity:0, duration:0})
tl.to('.hero', {opacity:0,duration:0})
tl.to('.text1', {y:'-10%', duration:2, delay:2})
tl.to('.intro', {x: '-100%', duration:2, delay:2})

tl.to('.text2', {y:'10%', duration:2})
tl.to('.text2', {scale: '1.5',duration:2})
tl.to('.intro2',{ y:'-100%', duration:2,delay:2})
tl.to('.intro3',{position:'fixed',duration:0})
tl.to('.intro3', {x:'100%', duration:2,delay:1})
tl.to('.navbar', {opacity:1, duration:1})
tl.to('.hero', {opacity:1,duration:1})
tl.to('.fab', {opacity:1,duration:2})

tl.to('.arrow', { opacity: '100%', y:5, repeat:-1, yoyo:true, duration:1})
