const td = document.querySelectorAll('.score');
const result = document.getElementById('high');
const ul = document.querySelector('ul');

for(let i = 0; i < 6; i ++){
    const randomScore = Math.floor(Math.random() * 101);
    td[i].textContent += randomScore;
    console.log(td[i])
    if(randomScore > 75){
        const li = document.createElement('li');
        li.textContent += `${td[i].id} `;
        ul.appendChild(li);
    }
}