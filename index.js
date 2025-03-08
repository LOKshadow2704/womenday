const messages = [
    "Chúc bạn 8/3 thật vui vẻ, hạnh phúc bên gia đình và những người thân yêu! 💐",
    "Mừng 8/3! Chúc bạn luôn khỏe mạnh, thành công và gặp nhiều may mắn! 😊",
    "Chúc bạn một ngày 8/3 đầy ắp niềm vui, yêu thương và thật nhiều sức khỏe! 💖",
    "8/3 rạng rỡ nhé! Mong bạn luôn hạnh phúc, gia đình êm ấm và công việc thuận lợi! 🎉",
    "Chúc bạn và gia đình một ngày 8/3 tràn ngập tiếng cười và những điều tốt đẹp nhất! 🌸",
    "Mừng ngày 8/3! Chúc bạn luôn xinh đẹp, vui vẻ và làm ăn phát đạt! 🌷",
    "Chúc bạn 8/3 thật đặc biệt, sức khỏe dồi dào và mọi điều suôn sẻ! 💞",
    "Mong bạn luôn giữ được nụ cười rạng rỡ, gia đình yên vui và công việc hanh thông! 💗",
    "Chúc bạn ngày 8/3 ngập tràn hạnh phúc, sức khỏe dồi dào và mọi ước mơ đều thành hiện thực! 💐"
];



document.getElementById("click").addEventListener("change", function () {
    let wishes = document.querySelector(".wishes");
    let music = document.getElementById("bg-music");
    let gift = document.querySelector(".gift");

    if (this.checked) {
        wishes.innerText = messages[Math.floor(Math.random() * messages.length)];
        music.play();

        createBalloons(10, ensureBalloonContainer());

        gift.classList.add("shake");
        setTimeout(() => gift.classList.remove("shake"), 500);

        for (let i = 0; i < 25; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
            confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }
    } else {
        removeBalloons();
        music.pause();
        music.currentTime = 0;
    }
});

function ensureBalloonContainer() {
    let container = document.getElementById("balloon-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "balloon-container";
        document.body.appendChild(container);
    }
    return container;
}

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let mt = random(200);
    let ml = random(50);
    let dur = random(5) + 5;
    return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite
    `;
}

function createBalloons(num, container) {
    for (let i = num; i > 0; i--) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        container.append(balloon);
    }
}

function removeBalloons() {
    let container = document.getElementById("balloon-container");
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => {
            container.innerHTML = "";
            container.style.opacity = 1;
        }, 500);
    }
}
