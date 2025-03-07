const messages = [
    "Chúc em 8/3 thật vui vẻ và hạnh phúc! 💐",
    "8/3 rạng rỡ nhé em! Chúc em luôn xinh đẹp và yêu đời! 😊",
    "Chúc em ngày 8/3 đầy ắp yêu thương và niềm vui! 💖",
    "Mong em luôn cười thật tươi và hạnh phúc mỗi ngày! 💕",
    "8/3 thật nhiều niềm vui, yêu thương và những điều tốt đẹp nhất nhé em! 🎉",
    "Chúc em một ngày 8/3 ngọt ngào, ý nghĩa và luôn được yêu thương! 🌸",
    "Mừng 8/3! Chúc em luôn xinh đẹp, vui vẻ và gặp nhiều may mắn! 🌷",
    "Chúc em 8/3 rạng rỡ như những bông hoa đẹp nhất! 💐",
    "Mong ngày 8/3 mang đến cho em thật nhiều nụ cười và hạnh phúc! 💞",
    "Chúc em ngày 8/3 thật đặc biệt và tràn đầy yêu thương! 💗"
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
