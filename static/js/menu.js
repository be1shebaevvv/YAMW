// Подключение CDN через JS (динамически)
function loadCDN(url, type = 'js') {
  return new Promise((resolve, reject) => {
    let el;
    if (type === 'js') {
      el = document.createElement('script');
      el.src = url;
      el.onload = resolve;
      el.onerror = reject;
      document.head.appendChild(el);
    } else if (type === 'css') {
      el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = url;
      el.onload = resolve;
      el.onerror = reject;
      document.head.appendChild(el);
    }
  });
}

// Пример подключения CDN для Lightbox2
Promise.all([
  loadCDN('https://cdn.jsdelivr.net/npm/lightbox2@2.11.4/dist/css/lightbox.min.css', 'css'),
  loadCDN('https://cdn.jsdelivr.net/npm/lightbox2@2.11.4/dist/js/lightbox.min.js')
]).then(() => {
  console.log('CDN Lightbox загружен');
  
  // Твой массив mainPhotos
  const mainPhotos = [
    {
      src: 'media/beatiful/photo_5222196670618078826_y.jpg',
      related: [
        "media/beatiful/photo_5222082398718201252_y.jpg",
        "media/beatiful/photo_5222082398718201262_y.jpg",
        "media/beatiful/photo_5222082398718201263_y.jpg",
        "media/beatiful/photo_5222196670618078820_y.jpg",
        "media/beatiful/photo_5222196670618078825_y.jpg",
        "media/beatiful/photo_5222196670618078826_y.jpg",
        "media/beatiful/photo_5222196670618078834_y.jpg",
        "media/fotbol/photo_5222082398718201271_y.jpg",
      ],
      desc: `Не знаю, в чём прикол, но на этих фото ты выглядишь невероятно 💫`
    },
    {
      src: "media/estetik/photo_5222196670618078820_y.jpg",
      related: [
        "media/estetik/photo_5222082398718201272_y.jpg",
        "media/estetik/photo_5222082398718201273_y.jpg",
        "media/estetik/photo_5222082398718201280_y.jpg",
      ],
      desc: "Эти фото просто поражают своей эстетикой ✨"
    }
    // Добавь остальные объекты так же
  ];

  // Пример использования: логирование всех фото
  mainPhotos.forEach(photo => {
    console.log('Главное фото:', photo.src);
    console.log('Связанные фото:', photo.related);
    console.log('Описание:', photo.desc);
  });

}).catch(err => console.error('Ошибка загрузки CDN:', err));


  const appRoot = document.getElementById('app-root');
  const smileBtn = document.getElementById('smileBtn');
  const welcome = document.getElementById('welcome');

  smileBtn.addEventListener('click', () => openGallery(0));

  function clearRoot() {
    appRoot.innerHTML = '';
  }

  function createEl(tag, cls = '', parent = null) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (parent) parent.appendChild(el);
    return el;
  }

  function openGallery(startIndex = 0) {
    welcome.style.display = 'none';
    clearRoot();

    const view = createEl('div', 'view', appRoot);
    const gallery = createEl('div', 'gallery', view);
    const backBtn = createEl('button', 'back-btn', gallery);
    backBtn.textContent = '← Назад';
    backBtn.addEventListener('click', () => {
      clearRoot();
      welcome.style.display = 'block';
    });

    const mainArea = createEl('div', 'main-area', gallery);
    const bigWrap = createEl('div', 'folder-big', mainArea);
    const bigImg = createEl('img', '', bigWrap);
    const relatedWrap = createEl('div', 'folder-related', mainArea);
    const descBox = createEl('div', 'photo-description-box', mainArea);
    const descTitle = createEl('h3', '', descBox);
    const descText = createEl('p', '', descBox);
    const thumbs = createEl('div', 'folder-thumbs', gallery);

    let currentIndex = startIndex;

    function showPhoto(index) {
      currentIndex = (index + mainPhotos.length) % mainPhotos.length;
      const photo = mainPhotos[currentIndex];
      bigImg.src = photo.src;
      descTitle.textContent = `Папка ${currentIndex + 1}`;
      descText.textContent = photo.desc;

      relatedWrap.innerHTML = '';
      photo.related.forEach(src => {
        const thumb = createEl('img', 'thumb-related', relatedWrap);
        thumb.src = src;
        thumb.addEventListener('click', () => (bigImg.src = src));
      });
    }

    mainPhotos.forEach((ph, i) => {
      const t = createEl('img', 'thumb', thumbs);
      t.src = ph.src;
      t.addEventListener('click', () => showPhoto(i));
    });

    // Свайп для телефонов
    enableSwipe(bigImg, () => showPhoto(currentIndex + 1), () => showPhoto(currentIndex - 1));

    // Предзагрузка фото
    mainPhotos.forEach(ph => {
      new Image().src = ph.src;
      ph.related.forEach(r => (new Image().src = r));
    });

    showPhoto(currentIndex);
  }

  function enableSwipe(img, onNext, onPrev) {
    let startX = 0;
    img.addEventListener('touchstart', e => (startX = e.touches[0].clientX), { passive: true });
    img.addEventListener(
      'touchend',
      e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) (dx < 0 ? onNext() : onPrev());
      },
      { passive: true }
    );
  }
});
