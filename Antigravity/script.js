document.addEventListener('DOMContentLoaded', () => {
    const scoreInput = document.getElementById('score-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const resultContainer = document.getElementById('result-container');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-description');
    const resultIcon = document.getElementById('result-icon');
    const progressBar = document.getElementById('progress-bar');

    // Define the scale ranges and results (Based on common Taiwan scales like John Tung Foundation)
    const results = [
        {
            min: 0,
            max: 8,
            title: "身心適應良好",
            desc: "您的情緒狀態非常穩定，目前的生活適應良好。這顯示您擁有不錯的情緒調節能力。\n\n建議：\n1. 繼續保持目前的規律作息與休閒活動。\n2. 多與親友分享快樂，維持正向的人際互動。",
            icon: "😊",
            color: "var(--color-normal)",
            width: "25%"
        },
        {
            min: 9,
            max: 14,
            title: "輕微情緒波動",
            desc: "您的情緒有些起伏，可能最近生活壓力稍大，讓您感到些許疲憊或煩躁。這是一個提醒訊號，告訴您該休息了。\n\n建議：\n1. 給自己一些喘息空間，安排運動或從事喜歡的興趣。\n2. 找信任的朋友或家人聊聊天，抒發心中的感受。\n3. 練習深呼吸或正念放鬆，幫助情緒回穩。",
            icon: "😐",
            color: "var(--color-mild)",
            width: "50%"
        },
        {
            min: 15,
            max: 18,
            title: "中度情緒困擾",
            desc: "您目前的情緒壓力負荷較大，可能已經感到相當困擾，甚至影響到睡眠或食慾。這不是您不夠好，而是心靈感冒了。\n\n建議：\n1. 請不要獨自承受，尋求親友的支持非常重要。\n2. 建議您尋求學校輔導中心、社區心理衛生中心或心理諮商所的專業協助。\n3. 撥打安心專線 1925，會有專人傾聽您的心聲。",
            icon: "😟",
            color: "var(--color-moderate)",
            width: "75%"
        },
        {
            min: 19,
            max: 999, // Catch all for high scores
            title: "重度情緒困擾",
            desc: "您的情緒困擾程度較高，可能已經嚴重影響到日常生活、工作或學業。請務必重視這個警訊，這需要專業的醫療協助。\n\n建議：\n1. 強烈建議您儘速尋求精神科醫師或心理師的協助，進行完整的評估與治療。\n2. 請身邊的親友多加陪伴與關懷。\n3. 記住，尋求幫助是勇敢的表現，您不孤單，專業人員可以陪您度過難關。",
            icon: "🆘",
            color: "var(--color-severe)",
            width: "100%"
        }
    ];

    function analyzeScore() {
        const score = parseInt(scoreInput.value);

        if (isNaN(score) || score < 0) {
            alert("請輸入有效的正整數分數");
            return;
        }

        // Find the matching result
        const result = results.find(r => score >= r.min && score <= r.max);

        if (result) {
            // Update UI content
            resultTitle.textContent = result.title;
            resultTitle.style.color = result.color;
            resultDesc.textContent = result.desc;
            resultIcon.textContent = result.icon;

            // Show container first to allow transitions
            resultContainer.classList.remove('hidden');

            // Reset progress bar width to 0 first to trigger animation if re-clicking
            progressBar.style.width = '0%';
            progressBar.style.backgroundColor = result.color;

            // Small timeout to allow the browser to register the width=0 change
            setTimeout(() => {
                progressBar.style.width = result.width;
            }, 50);

            // Scroll to result on mobile if needed
            if (window.innerWidth < 480) {
                resultContainer.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    analyzeBtn.addEventListener('click', analyzeScore);

    // Allow "Enter" key to submit
    scoreInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            analyzeScore();
        }
    });
});
