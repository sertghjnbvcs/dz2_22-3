const box = document.querySelector('.box')
let positionX = 0
let positionY= 0

const move = () => {
    if (positionX <=449 && positionY <= 0){
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if (positionX >=449 && positionY <= 449){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }else if (positionX >=0 && positionY >= 449){
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if (positionX <=0 && positionY >= 0){
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()
const number = document.querySelector('.number')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
let timerId;

number.innerHTML = 0


startBtn.onclick = function () {
    timerId = setInterval(function () {
        number.innerHTML++
    }, 1000)
}
stopBtn.onclick = function () {
    clearInterval(timerId)
}
