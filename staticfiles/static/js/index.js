document.addEventListener("DOMContentLoaded", () => {
    const photos = [
        "/media/general/photo_5222082398718201256_y.jpg",
        "/media/general/photo_5222082398718201257_y.jpg",
        "/media/general/photo_5222082398718201258_y.jpg",
        "/media/general/photo_5222082398718201259_y.jpg",
        "/media/general/photo_5222082398718201260_y.jpg",
        "/media/general/photo_5222082398718201262_y.jpg",
        "/media/general/photo_5222082398718201263_y.jpg",
        "/media/general/photo_5222082398718201264_y.jpg",
        "/media/general/photo_5222082398718201265_y.jpg",
        "/media/general/photo_5222082398718201267_y.jpg",
        "/media/general/photo_5222082398718201268_y.jpg",
        "/media/general/photo_5222082398718201269_y.jpg",
        "/media/general/photo_5222082398718201270_y.jpg",
        "/media/general/photo_5222082398718201271_y.jpg",
        "/media/general/photo_5222082398718201274_y.jpg",
        "/media/general/photo_5222082398718201275_y.jpg",
        "/media/general/photo_5222082398718201276_y.jpg",
        "/media/general/photo_5222082398718201277_y.jpg",
        "/media/general/photo_5222082398718201278_y.jpg",
        "/media/general/photo_5222082398718201279_y.jpg",
        "/media/general/photo_5222082398718201280_y.jpg",
        "/media/general/photo_5222082398718201281_y.jpg",
        "/media/general/photo_5222082398718201282_y.jpg",
        "/media/general/photo_5222082398718201283_y.jpg",
        "/media/general/photo_5222196670618078820_y.jpg",
        "/media/general/photo_5222196670618078821_y.jpg",
        "/media/general/photo_5222196670618078822_y.jpg",
        "/media/general/photo_5222196670618078823_y.jpg",
        "/media/general/photo_5222196670618078825_y.jpg",
        "/media/general/photo_5222196670618078826_y.jpg",
        "/media/general/photo_5222196670618078827_y.jpg",
        "/media/general/photo_5222196670618078828_y.jpg",
        "/media/general/photo_5222196670618078829_y.jpg",
        "/media/general/photo_5222196670618078830_y.jpg",
        "/media/general/photo_5222196670618078833_y.jpg",
        "/media/general/photo_5222196670618078834_y.jpg",
    ];

    const container = document.createElement("div");
    container.classList.add("photo-container");
    document.body.appendChild(container);

    const maxPhotos = 10;
    let activePhotos = new Set();

    // возвращает случайное фото, которого нет на экране
    function getRandomUniquePhoto() {
        const available = photos.filter(p => !activePhotos.has(p));
        if (available.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * available.length);
        return available[randomIndex];
    }

    function createFlyingPhoto() {
        const photoSrc = getRandomUniquePhoto();
        if (!photoSrc) return;

        activePhotos.add(photoSrc);

        const img = document.createElement("img");
        img.src = photoSrc;
        img.classList.add("photo");

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const margin = 300;
        const startX = margin + Math.random() * (viewportWidth - 300 - margin * 2);
        const startY = margin + Math.random() * (viewportHeight - 300 - margin * 2);

        img.style.left = `${startX}px`;
        img.style.top = `${startY}px`;
        img.style.opacity = "1";

        container.appendChild(img);

        let dx = (Math.random() - 0.5) * 2.5;
        let dy = (Math.random() - 0.5) * 2.5;
        let rotation = Math.random() * 360;

        function move() {
            let x = parseFloat(img.style.left);
            let y = parseFloat(img.style.top);

            x += dx;
            y += dy;
            rotation += 0.3;

            if (x <= 0 || x >= viewportWidth - 300) dx *= -1;
            if (y <= 0 || y >= viewportHeight - 300) dy *= -1;

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.transform = `rotate(${rotation}deg)`;

            requestAnimationFrame(move);
        }

        move();

        // удалить фото через 20 секунд и заменить новым
        setTimeout(() => {
            img.remove();
            activePhotos.delete(photoSrc);
            createFlyingPhoto();
        }, 10000);
    }

    // запуск первых фото
    for (let i = 0; i < maxPhotos; i++) {
        setTimeout(createFlyingPhoto, i * 1000);
    }

    // 💖 сердечки
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (6 + Math.random() * 4) + "s";
        heart.style.opacity = Math.random();
        heart.style.transform = `scale(${0.8 + Math.random() * 0.6}) rotate(45deg)`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }

    setInterval(createHeart, 800);
});
