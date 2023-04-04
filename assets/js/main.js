let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let novil = document.querySelector('.novil');
let main = document.querySelector('.main');
let header = document.querySelector('header');
console.log(header)

window.onscroll = ()=>{
    let value = window.scrollY;

    stars.style.left = value + 'px';
    moon.style.top = value * 3.5 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value + 'px';
    novil.style.fontSize = value + 'px'
    if(scrollY >= 91){
        novil.style.fontSize = 60 + 'px'
        novil.style.position = 'fixed'
        if(scrollY >= 376){
            novil.style.display = 'none'
        }else{
            novil.style.display = 'block'
        }
        if(scrollY >= 99){
            main.style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            main.style.background = 'linear-gradient(#200016, #10001f)'
        }
        if(scrollY >= 650){
            header.classList.add('header')
        }else{
            header.classList.remove('header')
        }
    }

}

const nav_toggle = document.getElementById('nav_toggle')
const nav_close = document.getElementById('nav_close')
const nav_menu = document.getElementById('nav_menu')

if(nav_toggle){
    nav_toggle.addEventListener('click',()=>{
        nav_menu.classList.add('show')
    })
}

if(nav_close){
    nav_close.addEventListener('click',()=>{
        nav_menu.classList.remove('show')
    })
}


const nav_link = document.querySelectorAll('.nav_link')

const link_action = ()=>{
    const nav_menu = document.getElementById('nav_menu');
    nav_menu.classList.remove('show')
}

nav_link.forEach( link => link.addEventListener('click', link_action))




const section = document.querySelectorAll('section');

window.addEventListener('scroll',()=>{
    let currentSection = '';

    section.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHight = section.clientHeight
        if(scrollY >= ( sectionTop - sectionHight / 2 )){
            currentSection = section.getAttribute('id')
        }
    })
    nav_link.forEach(link => {
        link.classList.remove('active')
        if (link.classList.contains(currentSection)) {
            link.classList.add('active')
        }else{
            link.classList.remove('active')
        }
    })
})