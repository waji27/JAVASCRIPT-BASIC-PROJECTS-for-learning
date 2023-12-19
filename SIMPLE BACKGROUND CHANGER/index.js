function bgChanger(){
    let userInput = document.querySelector('.userInput')
    let selectedColor = userInput.value
    let body = document.getElementById('body')
    body.style.backgroundColor = selectedColor
}