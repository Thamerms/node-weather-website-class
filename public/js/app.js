console.log("Clint side javascript file is loaded!")

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#one')
const msgTwo = document.querySelector('#two')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()


    msgOne.textContent = 'Loading ...'
    msgTwo.textContent = ''
    const location = search.value
        if(location){
            fetch('http://localhost:3000/weather?address=' + location).then((res) =>{
            res.json().then((data) => {
                if (data.error){
                    msgOne.textContent = data.error
                } else {
                    console.log(data.location)
                    msgOne.textContent = data.location
                    console.log(data.forecast.summary + '\n' + data.forecast.temperature)
                    msgTwo.textContent = data.forecast.summary + '- temp: ' + data.forecast.temperature
                }
            })
        })} else {
            msgOne.textContent = 'enter data'
        }
})