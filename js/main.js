if(document.querySelector('.lih')){
    const tabs = document.querySelectorAll('.lih');
    const tabContent = document.querySelectorAll('.tab-content');
    const tabParent = document.querySelector('.hero-menu_header');
    
    function hide(){
        tabContent.forEach(item =>{
            item.style.display = "none";
        })
        tabs.forEach(item =>{
            item.classList.remove('current');
        })
    }
    
    function show(i=0){
        tabContent[i].style.display = "block";
        tabs[i].classList.add('current');
    }
    
    hide();
    show();
    
    tabParent.addEventListener('click',(event)=>{
        if(event.target && event.target.classList.contains('lih')){
            tabs.forEach((item,i)=>{
                if(event.target == item){
                    hide();
                    show(i);
                }
            })
        }
    });
    console.log(tabContent);
}
//slider-1
if(document.querySelector('.slide-one')){
    const slides = document.querySelectorAll('.slide-one'),
    prev = document.querySelector('.ec-button-prev'),
    next = document.querySelector('.ec-button-next');
    let slideIndex = 1;
    
    function showSlides(n){
        if(n>slides.length){
            slideIndex = 1;
        }
        if(n<1){
            slideIndex = slides.length;
        }
        slides.forEach(item=> item.style.display="none");
        slides[slideIndex-1].style.display ="block";
    
    }
    showSlides(slideIndex);
    
    function plusSlides(n){
        showSlides(slideIndex = slideIndex+n);
    }
    next.addEventListener('click',()=>{
        plusSlides(1)
    })
    prev.addEventListener('click',()=>{
        plusSlides(-1)
    })
}
//slider-2
if(document.querySelector('.slide-two')){
    const slidestwo = document.querySelectorAll('.slide-two'),
prev2 = document.querySelector('.tc-button-prev'),
next2 = document.querySelector('.tc-button-next');
let slideIndex2 = 1;
function showSlides1(n){
    if(n>slidestwo.length){
        slideIndex2 = 1;
    }
    if(n<1){
        slideIndex2 = slidestwo.length;
    }
    slidestwo.forEach(item=> item.style.display="none");
    slidestwo[slideIndex2-1].style.display="block";
}
showSlides1(slideIndex2);
function plusSlides(n){
    showSlides1(slideIndex2 = slideIndex2+n);
}
next2.addEventListener('click',()=>{
    plusSlides(1)
})
prev2.addEventListener('click',()=>{
    plusSlides(-1)
})
}
if(document.querySelector('.countdown')){
//timer
const timeEnd = '2024-02-29';
function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60*60))%60),
        seconds =  Math.floor((t/(1000))%60);
    return{
            'total':t,
            'days':days,
            'hours': hours,
            'minutes':minutes,
            'seconds':seconds
        }
}
function setClock(selector, endtime){
    const timer = document.querySelector(selector),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock(),1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval(timeInterval)
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    }
}
setClock('.countdown',timeEnd);
}
if(document.querySelector('.hero-menu_header fl-wrap gth')){
    const tabs = document.querySelectorAll('.hero-menu_header fl-wrap gth');
    const tabContent = document.querySelectorAll('.tab-content');
    const tabParent = document.querySelector('.hero-menu_header');
    
    function hide(){
        tabContent.forEach(item =>{
            item.style.display = "none";
        })
        tabs.forEach(item =>{
            item.classList.remove('current');
        })
    }
    
    function show(i=0){
        tabContent[i].style.display = "block";
        tabs[i].classList.add('current');
    }
    
    hide();
    show();
    
    tabParent.addEventListener('click',(event)=>{
        if(event.target && event.target.classList.contains('hero-menu_header fl-wrap gth')){
            tabs.forEach((item,i)=>{
                if(event.target == item){
                    hide();
                    show(i);
                }
            })
        }
    });
    console.log(tabContent);
}