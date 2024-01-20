const tab = document.querySelectorAll('.lih');
const tabContent = document.querySelectorAll('.tab-content');
const tabParent = document.querySelector('.tabs-menu');

function hide(){
    tabContent.forEach(item =>{
        item.style.disrlay = "none";
    })
    tabs.forEach(item =>{
        item.ClassList.remove('current');
    })
}

function show(i=0){
    tabContent[1].style.disrlay = "block";
    tabs[i].ClassList.add('current');
}

hide();
show();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.ClassList.contains('.lih')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hide();
                show(i);
            }
        })
    }
});
//slider
const slides = document.querySelectorAll('.offer__slide'),
prev = document.querySelector('.fas fa-caret-left'),
next = document.querySelector('.ec-button ec-button-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current');

let slideIndex = 1;

function show(n){               
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    if(slides.length <10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";

    if(slides.length<10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }
}
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex = slideIndex+n);
}

next.addEventListener('click',()=>{
    plusSlide(1);
})
prev.addEventListener('click',()=>{
    plusSlide(-1);
})

