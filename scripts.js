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
        "2026-02-04": "💖 You went out with your friend Kathy to the office \n\nand to accompany her\n on her brightness skin care",
        "2022-10-22": "💖 Hey dear this was your first arrival in Thailand.\nI know it has been tough but you manage to be strong!💕\n",
        "1995-01-09": "💖 Happy birthday my Love! More memories to come I Love You always 😘",
    }
}