document.addEventListener("DOMContentLoaded", () => {
    let resultDiv = document.getElementById("result");

    btnLogic(resultDiv);
})

function btnLogic(resultDiv) {
    let btn = document.getElementById("buttonPress");
    let dateValue = document.getElementById("date_picker");

    btn.addEventListener("click", () => {
        const events = dateEvents();

        if (events[dateValue.value]) {
            resultDiv.innerText = events[dateValue.value]
        } else {
            resultDiv.innerText = "💖 You didn't have plans for this day my dear 😊💖"
        }
    })
}

function dateEvents() {
    return {
        "2026-02-01": "💖 You found my favorite date! 💖\n\nOh my love 😍\nYou guessed it! This date makes my heart flutter ❤️\nEvery moment with you feels like magic ✨\nI love you Jane Christine Fabiola!!! 💕",
        "2026-02-02": "💖 My dear Jane shared to me a that a few weeks back \nshe heard something suspicious happening on the room next to her. \nAnd saying when I get there we should have revenge on them 🤣😂",
        "2026-02-04": "💖 You went out with your friend Kathy to the office\nand to accompany her\n on her brightness skin care\nThis was also the first time we had video call what a memorable moment 😘😂\nYou're sweet my dear but really having difficulty \nchosing wearing a glass or not 🤣",
        "2022-10-22": "💖 Hey dear this was your first arrival in Thailand.\nI know it has been tough but you manage to be strong!💕\n",
        "1995-01-09": "💖 Happy birthday my Love! More memories to come I Love You always 😘",
        "2025-12-05": "💖 Our very first interaction my love. Thank you for existing 😘",
        "2026-02-13": "💖 My love you have been very naughty girl!\nMade me hard during my Bus travel >< 🥴",
        "2026-02-14": "💖 My love today you booked a ticket to go here in the Philippines by February 23-25, 2026.\nYehey our first meeting will be in this date! I love you! 😘",
        "2026-02-15": "💖 Our first sex on video call my love\nI love you my dear 😍",
        "2026-02-24": "💖 Our first meeting my love\nWe really enjoyed our time together 😍",
        "2026-02-25": "💖 Second day of our meeting my love\nReally a blast!\nJust wanna spend the rest of my life with you 😘",
        "2026-02-27": "💖 This was the first time you did delivered something to me love using Grab\nI didn't expect this at all 🤣\nThank you my love!\nI love you! 😘",
        "2026-02-28": "💖 My love you went bowling with your team/company. And you also received a certificate award for being the least complain Customer Support\nHoooray!!! 😘",
        "2026-03-03": "💖 We celebrate my regularazation day my love. Also during this day\nYou were very sweet! Like really sweet morning till the next day\nCrazy Inlove!!!! 😘",
        "2026-03-04": "💖 First time my love called me while she was at work HEHEHE 😍\nWhen I kissed the phone, she even puckered her lips too 🥰\nBut she quickly looked around to check if anyone saw her hahaha 😂",
        "2026-03-17": "💖 First time you express your feeling in Bahasa my love.\nCongrats to you 😂"
    }
}