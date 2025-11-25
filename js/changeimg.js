// 選取小圖bar
const small=document.querySelector('.small-img')
// 選大圖
const largeImg = document.querySelector('.large-img img')
// 選放大圖
const showImg = document.querySelector('.showImg')

// 換圖
// 增加點擊事件
small.addEventListener('click',function(e){
    // console.dir(e.target);
    // 判斷是不是click img
    if (e.target.tagName==='IMG') {
        // 去除上個active狀態
        this.querySelector('.active').classList.toggle('active')
        // 用自訂義屬性來決定換哪張圖
        largeImg.src=`./image/introduce/large${e.target.dataset.idx}.png`
        showImg.style.backgroundImage = `url(./image/introduce/large${e.target.dataset.idx}.png)`
        // 點選到的小圖增加active
        e.target.parentNode.classList.toggle('active')
    }
})

// 放大鏡
const magnifier = document.querySelector('.magnifier')
// 滑鼠進圖片顯示放大鏡
// largeImg.addEventListener('mouseover',function(){
//     magnifier.style.display = 'block'
// })
// // 滑鼠離開放大鏡消失
// largeImg.addEventListener('mouseout',function(){
//     magnifier.style.display = 'none'
// })
// 放大鏡效果
// 對圖增加滑鼠移動事件
largeImg.addEventListener('mousemove',function(e){
    // 算游標在圖上座標 (算法:游標位置-圖片座標 y軸多減滾動座標)
    let x = e.pageX - largeImg.getBoundingClientRect().left
    let y = e.pageY - largeImg.getBoundingClientRect().top - document.documentElement.scrollTop

    // 設定放大鏡框的座標變數 預設0
    let mx = 0 
    let my = 0
    // 判斷放大鏡位置 不讓放大鏡超過圖片
    if (x < 100) mx = 0
    if (x >= 100 && x <=500) mx = x -100
    if (x > 500) mx = 400

    if (y < 100) my = 0
    if (y >= 100 && y <=500) my = y -100
    if (y > 500) my = 400
    magnifier.style.left = mx+'px'
    magnifier.style.top = my+'px'

    // 設定放大圖顯示區塊的座標(放大鏡座標*3加負號)
    showImg.style.backgroundPositionX = -3*mx + 'px'
    showImg.style.backgroundPositionY = -3*my + 'px'
})