let counterElement = document.querySelector('.counterElement')
// console.log(counterElement)
let counts = 0 

function increase(){
    counts ++ 
    counterElement.innerHTML = counts
}

function decrease(){
    if(counts>0){
        counts -- 
        counterElement.innerHTML = counts
    }
}

function reset(){
    if(counts>0){
        counts = 0 
        counterElement.innerHTML = counts
    }
}