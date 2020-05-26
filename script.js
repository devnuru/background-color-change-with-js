//Choose a random color
const button = document.querySelector('button')
const box = document.querySelector('.box')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
const name = document.querySelector('#colorName')


box.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
box.style.backgroundColor = colors[colorIndex]
}


// hex


(function() {
    const button = document.querySelector('#btn-hex')
    const boxHex = document.querySelector('.box-hex')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex
        boxHex.style.backgroundColor = hex
    }
})()