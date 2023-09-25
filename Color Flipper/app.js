var btn = document.querySelector('.btn');
var bg = document.querySelector('main');
var text = document.querySelector('#color-span')

btn.addEventListener('click', modifyBackgroundColor);

function modifyBackgroundColor() {
    let color = randomColor();
    console.log(color)
    bg.style.backgroundColor = color;
    text.style.color = color;
    text.innerHTML = color;
}
 function randomColor() {
     const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
     let hexColor = ['#']
     for(let i = 0; i < 6; i++){
        let l = Math.floor(Math.random() * 16);
        hexColor.push(arr[l]);
     }
     return hexColor.join('');
 }