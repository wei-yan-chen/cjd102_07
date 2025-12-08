// 選全部
const all = document.querySelectorAll('.item')
// 選無線
const wireless = document.querySelectorAll('.wireless')
// 選有線
const wired = document.querySelectorAll('.wired')

// 篩選全部
document.querySelector('.allBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
})

// 篩選無線
document.querySelector('.wirelessBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
    for (let i = 0; i < wired.length; i++) {
        wired[i].style.display='none'
    }
})

// 篩選有線
document.querySelector('.wiredBtn').addEventListener('click', function(){
    for (let i = 0; i < all.length; i++) {
        all[i].style.display='block'
    }
    for (let i = 0; i < wireless.length; i++) {
        wireless[i].style.display='none'
    }
})