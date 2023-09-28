let btn = document.getElementById('changeColor');
let display = document.getElementById('color_result');
let body = document.querySelector('body');
let randomString = '';
let characters = 'ABCDEF1234567890';


btn.addEventListener('click', () => {
    console.log(generateRandomHex())
})


function generateRandomHex(){
    randomString = '';
    for(let i = 0; i <= 6; i++){
        randomString += characters.charAt(Math.floor(Math.random() * characters.length)).toLocaleLowerCase();
        display.innerText = randomString;
        body.style.backgroundColor = `#${randomString}`;
    }
}
