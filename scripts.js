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
        "2026-02-15": "💖 Our first sex on video call my love\nI love you my dear 😍"
    }
}