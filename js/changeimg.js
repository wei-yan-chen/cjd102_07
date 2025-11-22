        // 選取小圖bar
        const small=document.querySelector('.small-img')
        // 增加點擊事件
        small.addEventListener('click',function(e){
            // console.dir(e.target);
            // 判斷是不是click img
            if (e.target.tagName==='IMG') {
                // 去除上個active狀態
                this.querySelector('.active').classList.toggle('active')
                // 用自訂義屬性來決定換哪張圖
                document.querySelector('.large-img img').src=`./image/introduce/large${e.target.dataset.idx}.png`
                // 點選到的小圖增加active
                e.target.parentNode.classList.toggle('active')
            }
        })