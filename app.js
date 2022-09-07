const toggle = document.querySelector('.toggle')
const main = document.querySelector('main')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active')
    main.classList.toggle('active')
})