// 載入判斷進入登入或註冊
document.addEventListener('DOMContentLoaded', function () {
    localStorage.getItem('login') ? document.querySelector('.toggle').click() : 0
});



// 註冊 登入切換
document.querySelector('.login .toggle').addEventListener('click',function(){
        document.querySelector('.login').classList.toggle('active')
        document.querySelector('.signup').classList.toggle('active')
        localStorage.removeItem('login')
    })
document.querySelector('.signup .toggle').addEventListener('click',function(){
        document.querySelector('.login').classList.toggle('active')
        document.querySelector('.signup').classList.toggle('active')
        localStorage.setItem('login','1')
    })



// 密碼眼睛
const eyes = document.querySelectorAll('.input-label .material-symbols-outlined')
// console.log(eyes);
eyes.forEach(el=>{el.addEventListener('click',function(){
    if (this.innerText==='visibility_off') {
        this.innerText='visibility'
        this.previousElementSibling.type='text'
    }else{
        this.innerText='visibility_off'
        this.previousElementSibling.type='password'
    }
})})


const inputs = document.querySelectorAll('.input-label input')
// const account = document.querySelector('.signup .account')
const password = document.querySelector('.signup .password')
const confirm = document.querySelector('.signup .confirm-password')
// const gmail = document.querySelector('.signup .gmail')
// blur時觸發
inputs.forEach(el=>{el.addEventListener('blur',function(){
            const msg = this.parentNode.querySelector('.msg')
            if (this.value.trim()==='') {
                this.classList.add('active')
                msg.style.display='block'
                msg.innerText='此處不能為空'
            }else{
                msg.style.display='none'
                this.classList.remove('active')
            }})
        })

confirm.addEventListener('blur',function(){
    if (password.value!==this.value) {
        const msg = this.parentNode.querySelector('.msg')
        msg.style.display='block'
        msg.innerText='密碼不一致'
        this.classList.add('active')
    }
})

const submit = document.querySelectorAll('main button')

submit.forEach(el =>{el.addEventListener('click',function(e){
    e.preventDefault
    alert('暫無開放此功能')
})})
