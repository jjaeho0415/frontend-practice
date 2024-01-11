function darkMode(isDark){
    const body = document.body
    if (isDark){
        body.style.backgroundColor = 'black';
    }
    else{
        body.style.backgroundColor = 'white';
    }
    
};

document.getElementById('whiteButton').addEventListener('click', function(){
    darkMode(false);
});

document.getElementById('blackButton').addEventListener('click', function(){
    darkMode(true);
});