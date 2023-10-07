let target = document.querySelector('.target'),
    startBtn = document.querySelector('.startBtn'),
    stopBtn = document.querySelector('.stopBtn'),
    refreshBtn = document.querySelector('.refreshBtn'),
    timeNumber = document.querySelector('.timeNumber'),
    timeTime = document.querySelector('.timeTime'),
    timeBox = document.querySelector('.time'),
    nameTag = document.querySelector('.name-tag'),
    resultBox = document.querySelector('.result');
let clock
    timeTime.addEventListener('click', () => {
        if (timeNumber.value == '' || timeNumber.value == 0) {
            alert("Error")
            timeNumber.style.border = '1px solid red'
        }else{
            timeBox.style.display = 'none'
            nameTag.style.display = 'flex'
            resultBox.style.display = 'flex'
            clock = timeNumber.value * 1000
        }
    })

let stInterval
startBtn.addEventListener('click', () => {
     stInterval = setInterval(() => {
        target.textContent++
    }, clock)
})

stopBtn.addEventListener('click', () => {
    clearInterval(stInterval)
})

refreshBtn.addEventListener('click', () => {
    window.location.reload();
})
