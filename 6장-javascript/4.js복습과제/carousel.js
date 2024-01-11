const firstBtn = document.querySelector('#smile');
const secondBtn = document.querySelector('#run');
const thirdBtn = document.querySelector('#wink');
const nextBtn = document.querySelector('#next');
const images = document.querySelector('.images');
const darkBtn = document.querySelector('#darkButton');
const body = document.body;
let index = 0;
let isDark = false;

darkBtn.addEventListener('click', () => {
    if(isDark){
        body.style.backgroundColor = 'white';
        isDark = false;
    }
    else{
        body.style.backgroundColor = 'black';
        isDark = true;
    }
});

firstBtn.addEventListener('click', () => {
    index = 0;
    images.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});
secondBtn.addEventListener('click', () => {
    index = 1;
    images.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});
thirdBtn.addEventListener('click', () => {
    index = 2;
    images.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});

nextBtn.addEventListener('click', () => {
    if(index === 2){
        index = 0;
    }
    else{
        index += 1
    }
    images.style.transform = `translate3d(-${300 * index}px, 0, 0)`;

});

