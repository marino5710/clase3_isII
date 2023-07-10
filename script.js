// function funcionClic(){
//     alert("Clic sobre el boton");
// }

//recomendable funciones guardarse una constante

const button = document.querySelector('button')

// const funcionClic = () => {
//     console.log('hicieron clic sobre mi')
// }

// const div = document.querySelector('div')

// div.style.width = '30px'
// div.style.height = '30px'
// div.style.backgroundColor = 'yellow'



// const funcionEnter = () => {
//     console.log('el mouse entro')
// }

// const funcionSalir = () => {
//     console.log('el mouse salio')
// }

// button.onclick = funcionClic()

//const funcionClic = () => "hola mundo"



///varriables y todo esta arriba 


// button.addEventListener('click', funcionClic)
// button.addEventListener('mouseenter', funcionEnter)
// button.addEventListener('mouseleave', funcionSalir)
// div.addEventListener('mouseenter', funcionEnter)


// document.addEventListener('DOMContentLoaded', ()){
// }
// ]

const randomColor =(number) => {
    return Math.floor (Math.random() * number + 1)
}

button.addEventListener('click', (e) => {
    console.log(e)
    document.body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})
`})