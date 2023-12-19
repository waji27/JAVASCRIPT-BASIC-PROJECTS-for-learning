// let allButtons = document.querySelectorAll(".button");
// const myArr = []

// allButtons.forEach((eachButton)=>{
//   eachButton.addEventListener('click', (e)=>{
//     const buttonVal = e.target.innerText
//     myArr.push(buttonVal)
//     console.log(myArr)
//   })
// })


let userInput = document.querySelector("#user_input");
let allButtons = document.querySelectorAll(".button");
let recentValues = [];


allButtons.forEach((eachButton) => {
  eachButton.addEventListener("click", (e) => {
    if (e.target.innerText == "AC") {
      userInput.value = "";
    } else if (e.target.innerText == "=") {
      const x = eval(userInput.value);
      userInput.value = x;
      recentValues.push(x);
    } else if (e.target.innerText == "R") {
      recentValues.forEach((eachVal)=>{
        const li = document.createElement('li')
        li.innerText = eachVal
        const values = document.querySelector('.values')
        values.appendChild(li)
      })
    } else if (e.target.innerText == "DH"){
      recentValues.length = 0
      const values = document.querySelector('.values')
      values.innerHTML = ''
    }else if (e.target.innerText == "PV"){
      var latestValue = recentValues[recentValues.length - 1];
      userInput.value = latestValue
    }else {
      userInput.value += e.target.innerText;
    }
  });
});

