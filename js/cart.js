// 選取導航購物車icon
const cart = document.querySelector('#cart-icon')
// 選取燈箱遮罩
const cover = document.querySelector('.cart-cover')
// 選取購物車視窗
const cbox = document.querySelector('.cart-box')
// 選取購物車內容
const cartContent = document.querySelector('.cart-content')
// 選取清空內容
const cnone = document.querySelector('.cart-none')

// 載入判斷localStorage狀態 有就顯示購物車頁面 沒有就清除
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

// 選取叉叉 點擊關閉
document.querySelector('.cart-header .material-symbols-outlined').addEventListener('click',function(){
    cover.classList.toggle('active')
    cbox.classList.toggle('active')
})
//  點擊導航購物車開啟
cart.addEventListener('click',function(){
    cover.classList.toggle('active')
    cbox.classList.toggle('active')
})
// 點擊遮罩關閉
cover.addEventListener('click',function(){
    document.querySelector('#cart-icon').click()
})

// 選取購物車各個物品金額
const nt = document.querySelector('.cart-text-bottom .nt')
// 選取結帳總金額
const checkout = document.querySelector('.checkout p span')
// 選取購物車物品數量
const valueEl1 = document.querySelector('.cart-value');
// 設定變數 從localStorage取直
let value1 = localStorage.getItem('cart');
// console.log(+value1);

// 選-加click事件
document.querySelector('.cart-minus').onclick = () => {
    // 判斷如果大於1就-1
    if (value1 > 1) {
        value1--
        localStorage.setItem('cart',value1)
    }else if(confirm('你確定要移除嗎')){  //如果減到剩1再點擊詢問
        localStorage.removeItem('cart')
        cartContent.classList.remove('active')
        cnone.classList.add('active')
    }
    // 附值給value容器
    valueEl1.textContent = value1;
    checkout.innerText=value1*1990
    nt.innerText=`NT$${value1*1990}`
};

// 選+加click事件
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


// 產品介紹頁面的加入購物車 根據選的數量給到localStorage裡
let v = document.querySelector('.introduce-footer .value')
document.querySelector('.introduce-footer .btn').addEventListener('click',function(){
    localStorage.setItem('cart',v.innerText)
})