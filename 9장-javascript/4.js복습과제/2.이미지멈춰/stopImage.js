const div = document.getElementById('container');
const images = ["url('https://cdn.theproof.co.kr/news/photo/202308/592_830_2319.jpg')",
                "url('https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/03/13/rwTp2delOQ6W637828051274144183.jpg')", 
                "url('https://cdn.shown.co.kr/news/photo/202312/6048_7934_1521.jpg')"];
const stopButton = document.getElementById('stop');

let currentIndex = 0;
let interval;

function changeImage(){
    div.style.backgroundImage = images[currentIndex];
    currentIndex += 1;
    if(currentIndex === 3){
        currentIndex = 0;
    }
}

function startImage(){
    changeImage();
    interval = setInterval(changeImage, 1000);
}

function stopImage(){
    clearInterval(interval);
}

startImage();

stopButton.addEventListener('click', stopImage);