// index.js (Обновлено, Чище и Быстрее)

// --- МАССИВ ФОТО (Перенесен сюда для корректной работы анимации) ---
const photos = [
    "media/general/photo_5222082398718201256_y.jpg",
    "media/general/photo_5222082398718201257_y.jpg",
    "media/general/photo_5222082398718201258_y.jpg",
    "media/general/photo_5222082398718201259_y.jpg",
    "media/general/photo_5222082398718201260_y.jpg",
    "media/general/photo_5222082398718201262_y.jpg",
    "media/general/photo_5222082398718201263_y.jpg",
    "media/general/photo_5222082398718201264_y.jpg",
    "media/general/photo_5222082398718201265_y.jpg",
    "media/general/photo_5222082398718201267_y.jpg",
    "media/general/photo_5222082398718201268_y.jpg",
    "media/general/photo_5222082398718201269_y.jpg",
    "media/general/photo_5222082398718201270_y.jpg",
    "media/general/photo_5222082398718201271_y.jpg",
    "media/general/photo_5222082398718201274_y.jpg",
    "media/general/photo_5222082398718201275_y.jpg",
    "media/general/photo_5222082398718201276_y.jpg",
    "media/general/photo_5222082398718201277_y.jpg",
    "media/general/photo_5222082398718201278_y.jpg",
    "media/general/photo_5222082398718201279_y.jpg",
    "media/general/photo_5222082398718201280_y.jpg",
    "media/general/photo_5222082398718201281_y.jpg",
    "media/general/photo_5222082398718201282_y.jpg",
    "media/general/photo_5222082398718201283_y.jpg",
    "media/general/photo_5222196670618078820_y.jpg",
    "media/general/photo_5222196670618078821_y.jpg",
    "media/general/photo_5222196670618078822_y.jpg",
    "media/general/photo_5222196670618078823_y.jpg",
    "media/general/photo_5222196670618078825_y.jpg",
    "media/general/photo_5222196670618078826_y.jpg",
    "media/general/photo_5222196670618078827_y.jpg",
    "media/general/photo_5222196670618078828_y.jpg",
    "media/general/photo_5222196670618078829_y.jpg",
    "media/general/photo_5222196670618078830_y.jpg",
    "media/general/photo_5222196670618078833_y.jpg",
    "media/general/photo_5222196670618078834_y.jpg"
];

const photoContainer = document.querySelector(".photo-container");
const numPhotos = photos.length;

function createFloatingImage() {
    const randomIndex = Math.floor(Math.random() * numPhotos);
    const img = document.createElement("img");
    
    img.src = photos[randomIndex];
    img.className = "floating-photo";
    
    // Случайная позиция (left)
    img.style.left = Math.random() * 90 + "vw"; 
    
    // Случайная длительность анимации (от 5 до 10 секунд)
    const duration = 5 + Math.random() * 5; 
    img.style.animationDuration = duration + "s";
    
    // Случайная начальная задержка
    img.style.animationDelay = -(Math.random() * 3) + "s"; 

    photoContainer.appendChild(img);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        if (img && img.parentElement) { 
            img.remove();
        }
    }, duration * 1000 + 1000); 
}

document.addEventListener("DOMContentLoaded", () => {
    // Запуск появления фото каждую 1 секунду
    setInterval(createFloatingImage, 1000); 
});