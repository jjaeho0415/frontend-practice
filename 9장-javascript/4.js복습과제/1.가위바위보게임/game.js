const input = document.getElementById('input');
const checkbutton = document.getElementById('button');
const resultDisplay = document.getElementById('resultDisplay');
const computer = ['가위', '바위', '보'];
const p = document.createElement('p');
let act = false;
checkbutton.addEventListener('click', () => {
    let player;
    let com;
    let computerside = computer[Math.floor(Math.random() * 3)];
    let result = '';
    if(act === true){
        p.innerHTML = '';
    }
    if(input.value === '가위'){
        player = '✌🏻';
        if(computerside === '가위'){
            result = '비겼습니다!';
            com = '✌🏻';
        }
        else if(computerside === '바위'){
            result = '졌습니다!';
            com = '✊🏻';
        }
        else{
            result = '이겼습니다!';
            com = '🖐🏻';
        }
    }
    else if(input.value === '바위'){
        player = '✊🏻';
        if(computerside === '가위'){
            result = '이겼습니다!';
            com = '✌🏻';
        }
        else if(computerside === '바위'){
            result = '비겼습니다!';
            com = '✊🏻';
        }
        else{
            result = '졌습니다!';
            com = '🖐🏻';
        }
    }
    else if(input.value === '보'){
        player = '🖐🏻';
        if(computerside === '가위'){
            result = '졌습니다!';
            com = '✌🏻'
        }
        else if(computerside === '바위'){
            result = '이겼습니다!';
            com = '✊🏻';
        }
        else{
            result = '비겼습니다!';
            com = '🖐🏻';
        }
    }
    
    p.textContent = `당신의 선택 : ${player} / 컴퓨터의 선택 : ${com} / 결과 : ${result}`;
    p.style.fontSize = '20px';
    resultDisplay.appendChild(p);
    act = true;
})