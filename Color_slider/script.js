const color = document.getElementsByClassName('color');

console.log(color[0].value)


function updateValue(e) {
    
    const targetId = e.target.getAttribute('data-target');
    const colorP = document.getElementById(targetId);
    document.body.style.backgroundColor = `rgb(${color[0].value}, ${color[1].value}, ${color[2].value})`;
    return colorP.innerText = e.target.value;

}

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('input', updateValue);
}



