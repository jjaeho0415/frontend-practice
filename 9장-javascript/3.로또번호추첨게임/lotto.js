const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');

let lottoNumbers = [];

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `

function paintNumber(number){
    const eachNumDiv = document.createElement("div");
    eachNumDiv.classList.add("eachnum");
    eachNumDiv.textContent = number;
    numbersDiv.append(eachNumDiv);
}
let isButton = false;
// 클릭하면 랜덤숫자 여섯개가 배열에 추가된다!
// 한번더 누르면 새로운 랜덤숫자 여섯개 생성!(심화)
drawButton.addEventListener("click", function(){
    if(isButton === true){
        lottoNumbers.splice(0, 6); // 들어가있는 원소들 삭제
        numbersDiv.innerHTML = "";
    }
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45 + 1);
        if(lottoNumbers.indexOf(rn) === -1){ // 중복 x
            lottoNumbers.push(rn);
            paintNumber(rn);
            isButton = true;
        }
    }

});

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6); // 들어가있는 원소들 삭제
    numbersDiv.innerHTML = "";
});