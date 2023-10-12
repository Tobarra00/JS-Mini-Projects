const backgroundColor = document.getElementById('color');
const bodyColor = document.getElementsByTagName('body');
const change = document.getElementById('change');

function changeColor(e) {
    backgroundColor.innerText = '#';
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        if (Math.random() > 0.5) {
            backgroundColor.innerText += Math.floor(Math.random() * 10);
        } else {
            backgroundColor.innerText += letters[Math.floor(Math.random() * 6)]
        }
    }
    return bodyColor[0].style.backgroundColor = backgroundColor.innerText;
}


change.addEventListener('click', changeColor);

