console.log('test')

const card = document.querySelector('.card')
const container = document.querySelector('.flip-container')
const numberIn = document.querySelector('#number')
const user = document.querySelector('#name')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const cvv = document.querySelector('#cvv')
//
card.addEventListener('click', ()=>{
    container.classList.toggle('flip')
})

if (numberIn == document.activeElement){
    document.querySelector('.focus-field').classList.add('num-focus')
} else {document.querySelector('.focus-field').classList.remove('num-focus')
}