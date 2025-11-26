        // 模擬數據
        const news = [
            [
                { 
                    src:"./image/new/new0.png",
                    time:'2025/11/20',
                    h5:'【極限解鎖】FLUX-G8 無線滑鼠：超越光速的零延遲體驗',
                    p:'滑鼠標誌性的人體工學外型設計現在比上一代產品更輕超過 25%，並搭載一系列先進技術，推動電競遊戲的極限。' 
                },
                { 
                    src:"./image/new/new1.png",
                    time:'2025/11/18',
                    h5:'【核心升級】FLUX 驅動程式 V2.0發布：個人化戰術系統啟動',
                    p:'為了讓您的 FLUX 裝備發揮最大戰力，我們推出了全新的 FLUX 驅動程式 V2.0。本次更新帶來了高度個人化的 RGB 霓虹同步系統、進階的巨集編程介面，以及更精準的 DPI 校準工具' 
                },
                { 
                    src:"./image/new/new2.png",
                    time:'2025/11/16',
                    h5:'【戰場宣言】FLUX 成為頂級電競戰隊官方指定裝備夥伴',
                    p:'FLUX 脈動正式宣布與知名電競戰隊 Cyber Zenith (CZ) 建立獨家電競裝備合作夥伴關係！CZ 戰隊的成員將在所有國際賽事中使用 FLUX 高性能電競滑鼠。' 
                },
                { 
                    src:"./image/new/new3.png",
                    time:'2025/11/14',
                    h5:'[訊號捕捉] FLUX-001 核心晶片 啟動',
                    p:'目標鎖定： 極速響應。FLUX-001 系列已完成核心晶片植入，達到 $1000\text{Hz}$ 輪詢率的極限閾值。即日起，預載體開放接收。' 
                },
                { 
                    src:"./image/new/new4.png",
                    time:'2025/11/14',
                    h5:'脈衝連線 已建立：次世代 驅動程式上線',
                    p:'系統升級： 脈衝連線協議 V3.0 已完成部署。此版驅動程式深度優化數據傳輸路徑，確保零延遲訊號連線。' 
                },
                { 
                    src:"./image/new/new5.png",
                    time:'2025/11/8',
                    h5:'[SYSTEM_GLITCH] 闇黑序列 限量發售預告',
                    p:'闇黑序列 [NOIR_EDITION] 偵測中。此批次採用故障藝術 (Glitch Art) 外觀處理，總數 [FILE_CORRUPTED] 組。' 
                },
            ],
            [
                { 
                    src:"./image/new/new6.png",
                    time:'2025/11/7',
                    h5:'專屬 3D 線框 解析圖：機械構造 透視',
                    p:'資料公開： 獨家釋出 PRO-X 系列滑鼠的 3D 線框透視圖。從每一個內部機械結構到線路板配置，皆以極簡主義的藍圖形式呈現。深入解析極致專業背後的工程美學。' 
                },
                { 
                    src:"./image/new/new7.png",
                    time:'2025/11/7',
                    h5:'霓虹軌跡：RGB 燈效 韌體更新 2.0',
                    p:'視覺強化： RGB 燈效韌體 V2.0 部署完成。新增 [Cyber-Pulse] 及 [Matrix-Flow] 兩種霓虹燈光模式。使用者現可透過軟體介面進行深度自訂，打造專屬城市夜景。' 
                },
                { 
                    src:"./image/new/new8.png",
                    time:'2025/11/2',
                    h5:'城市夜景 下的 頂尖操控：PRO 系列 評測',
                    p:'外部數據： 權威機構對 FLUX PRO 系列的深度評測報告已匯入資料庫。報告確認其在長時間高強度遊戲中的 穩定性 與 精準度 達到頂尖標準。' 
                },
                { 
                    src:"./image/new/new9.png",
                    time:'2025/10/28',
                    h5:'數據傳輸 最佳化：無損訊號 連接技術公開',
                    p:'技術解密： 內部工程師公開 [Zero-Loss] 無損訊號連接技術原理。此技術徹底消除環境電磁干擾，保證滑鼠指令與遊戲動作的 $1:1$ 同步傳輸。專業玩家的終極武器。' 
                },
                { 
                    src:"./image/new/new10.png",
                    time:'2025/10/22',
                    h5:'[EVENT] 滲透 虛擬領域：線上展間 開啟',
                    p:'事件啟動： [Virtual_Showcase_2025] 線上展間即將開放。在故障藝術與霓虹光影交織的虛擬空間中，零距離體驗 FLUX 全系列產品。' 
                },
                { 
                    src:"./image/new/new11.png",
                    time:'2025/10/14',
                    h5:'簡約化 再進化：配件系列 精選上架',
                    p:'結構精簡： 全新配件系列，包括極簡設計的鼠標墊及線材管理套組，已登陸商店介面。延續極簡、專業的設計語言，為您的戰鬥系統實現桌面 零干擾。' 
                },
            ],
            [
                { 
                    src:"./image/new/new12.png",
                    time:'2025/10/14',
                    h5:'駭入 高度精準：感應器 校正教學 V1.1',
                    p:'指令更新： 感應器校正教學影片 V1.1 已上傳。教您利用軟體介面，針對不同材質的滑鼠墊進行 微米級 的感應器校準，以達成最高程度的 像素級 精準控制。' 
                },
                { 
                    src:"./image/new/new13.png",
                    time:'2025/10/10',
                    h5:'NEON-X 系列滑鼠搶先曝光，霓虹光軌啟動中',
                    p:'NEON-X 採用全新光軌環形燈帶與超精密感測核心，打造夜行玩家專屬的未來操控體驗。完整細節將於下週釋出，敬請期待。' 
                },
                { 
                    src:"./image/new/new14.png",
                    time:'2025/10/1',
                    h5:'3D 線框主題周邊即將登場，開啟你的未來戰場',
                    p:'內文｜ 以賽博城市線框為概念打造的新系列周邊即將上線，包含滑鼠墊、鍵帽與展示架。以科技線條呈現極簡強烈的視覺衝擊。' 
                },
                { 
                    src:"./image/new/new15.png",
                    time:'2025/9/14',
                    h5:'新增 360° 產品展示功能，沉浸式視覺全面升級',
                    p:'FLUX 網站正式加入 360° 環景展示，讓玩家可從任何角度檢視產品細節，接近實物般的真實感受。' 
                },
                { 
                    src:"./image/new/new16.png",
                    time:'2025/9/5',
                    h5:'黑暗電流特賣開跑，限時能量釋放',
                    p:'限時折扣全面啟動，精選周邊與滑鼠套組最低 85 折。於活動期間購買，即可獲得限定霓虹主題貼紙。' 
                },
                { 
                    src:"./image/new/new17.png",
                    time:'2025/9/1',
                    h5:'感測核心技術升級，FLUX Lab 公布最新突破',
                    p:'研發團隊成功提升追蹤精準度與回應速度，使操作延遲降至極低。下一代滑鼠將搭載此技術，帶來極致流暢手感。' 
                },
            ],
            ]

        //預設頁面變數
        let page = 0

        // 選到整個新聞容器
        const newsContainer = document.querySelector('.news-container')

        // 更換不同頁渲染新聞的函數
        function changePage(arr) {
            // let html = ''
            // 改用map加join寫法
            let newArr = arr.map((n)=>{
                return `<article class="new-item">
                <a href="./newInner.html">
                    <div class="new-img">
                        <img src="${n.src}" alt="">
                    </div>
                    <div class="new-text">
                        <p class="time">${n.time}</p>
                        <h5>${n.h5}</h5>
                        <p class="text">${n.p}</p>
                    </div>
                </a>
                </article>`
            })
            // for寫法
            // 使用for迴圈把數據放到一個變數裡
            // for (let i = 0; i < arr.length; i++) {
            //     let obj = arr[i]
            //     html+=`
            //     <article class="new-item">
            //     <a href="./newInner.html">
            //         <div class="new-img">
            //             <img src="${obj.src}" alt="">
            //         </div>
            //         <div class="new-text">
            //             <p class="time">${obj.time}</p>
            //             <h5>${obj.h5}</h5>
            //             <p class="text">${obj.p}</p>
            //         </div>
            //     </a>
            //     </article>`
            // }
            // 渲染整個頁面
            // newsContainer.innerHTML=html
            newsContainer.innerHTML=newArr.join('')
        }
        
        // 案左函數
        function left(t) {
            t.children[page+1].classList.toggle('active')
            page--
            t.children[page+1].classList.toggle('active')
            console.log(page);  
        }
        // 案右函數
        function right(t) {
            t.children[page+1].classList.toggle('active')
            page++
            t.children[page+1].classList.toggle('active')
            console.log(page);  
        }
        // 選取下面頁數標籤，設定click事件
        document.querySelector('.page-bar').addEventListener('click',function(e){
            console.dir(this.children);
            // 判斷案到的標籤改變page變數
            if (e.target.tagName==='A') {
                if (e.target.innerText==='<') {
                    page > 0 ? left(this) : e.preventDefault()
                    
                }else if (e.target.innerText==='>') {
                    page < 2 ? right(this) : e.preventDefault()
                    
                }else if (page ===e.target.innerText-1) {
                    e.preventDefault()
                }
                else {this.querySelector('.active').classList.remove('active')
                    page = e.target.innerText -1
                    e.target.classList.toggle('active')}
            }
            // 調用更換渲染函數，將對應到的頁面數據放入參數
            changePage(news[page])
        })

        // 初始載入調用
        changePage(news[page])