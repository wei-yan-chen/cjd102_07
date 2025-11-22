// 選取value容器
        const valueEl = document.querySelector('.value');
        // 設定變數 預設為1
        let value = 1;
        // 選-加click事件
        document.querySelector('.minus').onclick = () => {
            // 判斷如果大於1就-1
            value > 1 ? value-- : value
            // 附值給value容器
            valueEl.textContent = value;
        };

        document.querySelector('.plus').onclick = () => {
            // 判斷如果小於20就-1
            value < 20 ? value++ : value
            // 附值給value容器
            valueEl.textContent = value;
        };