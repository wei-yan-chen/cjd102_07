const all = document.querySelectorAll('.item')
const wireless = document.querySelectorAll('.wireless')
const wired = document.querySelectorAll('.wired')
document.querySelector('.allBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
})
document.querySelector('.wirelessBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
    for (let i = 0; i < wired.length; i++) {
        wired[i].style.display='none'
    }
})
document.querySelector('.wiredBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
    for (let i = 0; i < wireless.length; i++) {
        wireless[i].style.display='none'
    }
})