const messages = [
    "Chúc em ngày 8/3 tràn ngập yêu thương, nụ cười và những khoảnh khắc ngọt ngào bên người thương! 💖",
    "Em là bông hoa đẹp nhất trong lòng anh, chúc em mãi rạng rỡ và hạnh phúc như hôm nay! 🌹",
    "Không chỉ 8/3, mà mỗi ngày anh đều muốn dành cho em những điều ngọt ngào nhất! Yêu em! ❤️",
    "Mong em luôn cười tươi như ánh nắng ban mai, dịu dàng như làn gió xuân, và hạnh phúc như những gì em xứng đáng có! 💕",
    "8/3 chỉ là một ngày để nhắc nhở anh yêu em nhiều như thế nào. Nhưng thật ra, mỗi ngày bên em đều là một ngày đặc biệt! 😘",
    "Anh chúc em luôn vui vẻ, xinh đẹp và tràn đầy năng lượng! Cảm ơn em vì đã là một phần quý giá trong cuộc đời anh! 💞",
    "Em là điều tuyệt vời nhất mà anh có được. Chúc em ngày 8/3 rạng rỡ, hạnh phúc và mãi bên anh! 💘",
    "Những bông hoa đẹp nhất dành cho người con gái tuyệt vời nhất – chính là em! Chúc em 8/3 tràn ngập yêu thương! 🌺",
    "Trên thế giới có hàng triệu bông hoa nhưng với anh, em vẫn là đóa hoa đẹp nhất! Chúc em ngày 8/3 thật ngọt ngào và ấm áp! 🌷",
    "Mỗi khoảnh khắc bên em đều là điều đáng trân trọng nhất. Chúc em 8/3 thật hạnh phúc, và hãy nhớ rằng anh luôn yêu em! 💓"
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
