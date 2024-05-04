document.addEventListener("DOMContentLoaded", function(){

    const changeBtn = document.getElementById('change-color-btn');
    const colorBox = document.getElementById('color-box');
    
    function getRandomColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorBox.style.backgroundColor = `#${randomColor}`
    }
    changeBtn.addEventListener('click', () => {
        getRandomColor()
    })
})