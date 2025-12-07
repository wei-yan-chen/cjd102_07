const cart = document.querySelector('#cart-icon')
const cover = document.querySelector('.cart-cover')
const cbox = document.querySelector('.cart-box')
const cartContent = document.querySelector('.cart-content')
const cnone = document.querySelector('.cart-none')


document.addEventListener('DOMContentLoaded', function(){
    let cart1 = localStorage.getItem('cart')
    if (cart1) {
        cartContent.classList.add('active')
        cnone.classList.remove('active')
        valueEl1.textContent=cart1
        checkout.innerText=cart1*1990
        nt.innerText=`NT$${cart1*1990}`
    }else{
        cartContent.classList.remove('active')
        cnone.classList.add('active')
    }
});

document.querySelector('.cart-header .material-symbols-outlined').addEventListener('click',function(){
    cover.classList.toggle('active')
    cbox.classList.toggle('active')
})
document.querySelector('#cart-icon').addEventListener('click',function(){
    cover.classList.toggle('active')
    cbox.classList.toggle('active')
})
cover.addEventListener('click',function(){
    document.querySelector('#cart-icon').click()
})


const nt = document.querySelector('.cart-text-bottom .nt')
const checkout = document.querySelector('.checkout p span')
// 選取value容器
const valueEl1 = document.querySelector('.cart-value');
// 設定變數 預設為1
let value1 = localStorage.getItem('cart');
// console.log(+value1);

// 選-加click事件
document.querySelector('.cart-minus').onclick = () => {
    // 判斷如果大於1就-1
    // value1 > 1 ? value1-- : value1
    if (value1 > 1) {
        value1--
        localStorage.setItem('cart',value1)
    }else if(confirm('你確定要移除嗎')){
        localStorage.removeItem('cart')
        cartContent.classList.remove('active')
        cnone.classList.add('active')
    }
    // 附值給value容器
    valueEl1.textContent = value1;
    checkout.innerText=value1*1990
    nt.innerText=`NT$${value1*1990}`
};

document.querySelector('.cart-plus').onclick = () => {
    // 判斷如果小於20就+1
    // value1 < 20 ? value1++ : value1
    if (value1 < 20) {
        value1++
        localStorage.setItem('cart',value1)
    }
    // 附值給value容器
    valueEl1.textContent = value1;
    checkout.innerText=value1*1990
    nt.innerText=`NT$${value1*1990}`
};


// 產品介紹頁面的加入購物車
let v = document.querySelector('.introduce-footer .value')
document.querySelector('.introduce-footer .btn').addEventListener('click',function(){
    localStorage.setItem('cart',v.innerText)
})