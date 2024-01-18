const addButton = document.getElementById('addButton');
const printButton = document.getElementById('printButton');
const listButton = document.getElementById('listButton');
const div = document.getElementById('list');
const p = document.createElement('p');
let iceCream = ["메로나"];
let str = '';
str += "메로나";
p.textContent = str;
div.appendChild(p);


addButton.addEventListener('click', () => {
    let newIceCream = prompt('추가하고 싶은 아이스크림의 종류를 입력해주세요.');
    iceCream.push(newIceCream);
});

printButton.addEventListener('click', () => {
    for(let i = 0; i < iceCream.length; i ++){
        alert(iceCream[i]);
    }
});

listButton.addEventListener('click', () => {
    
    for(let i = 1; i < iceCream.length; i ++){ 
        str += `, ${iceCream[i]}`;
    }
    
    p.textContent = str;
    div.appendChild(p);
});