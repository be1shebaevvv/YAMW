document.addEventListener('DOMContentLoaded', () => {

  // --- Подключение CDN динамически ---
  function loadCDN(url, type = 'js') {
    return new Promise((resolve, reject) => {
      let el;
      if (type === 'js') {
        el = document.createElement('script');
        el.src = url;
      } else if (type === 'css') {
        el = document.createElement('link');
        el.rel = 'stylesheet';
        el.href = url;
      }
      el.onload = resolve;
      el.onerror = reject;
      document.head.appendChild(el);
    });
  }

  // Подключаем Lightbox CSS и JS
  Promise.all([
    loadCDN('https://cdn.jsdelivr.net/npm/lightbox2@2.11.4/dist/css/lightbox.min.css', 'css'),
    loadCDN('https://cdn.jsdelivr.net/npm/lightbox2@2.11.4/dist/js/lightbox.min.js')
  ]).then(() => {
    console.log('CDN Lightbox загружен');

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
        desc: `
        Не знаю, в чём прикол,  
        но на этих фото ты выглядишь просто невероятно.  
        Настолько красивая, что хочется смотреть бесконечно.  
        Ты — лучшая, без сомнений 💫
        `
      },
      {
        src: "media/estetik/photo_5222196670618078820_y.jpg",
        related: [
          "media/estetik/photo_5222082398718201272_y.jpg",
          "media/estetik/photo_5222082398718201273_y.jpg",
          "media/estetik/photo_5222082398718201280_y.jpg",
          "media/estetik/photo_5222196670618078820_y.jpg",
          "media/estetik/photo_5222196670618078821_y.jpg",
          "media/estetik/photo_5222196670618078827_y.jpg",
          "media/estetik/photo_5222196670618078828_y.jpg",
          "media/estetik/photo_5222196670618078834_y.jpg",
        ],
        desc: `
        Эти фото просто поражают своей эстетикой.  
        Каждый кадр словно маленький шедевр — гармония света, линий и эмоций.  
        Ты выглядишь невероятно, и хочется наслаждаться каждой деталью. ✨  
        Самое главное ты самая красивая💫
        `
      },
      {
        src: "media/fotbol/photo_5222082398718201257_y.jpg",
        related: [
          "media/fotbol/photo_5222082398718201252_y.jpg",
          "media/fotbol/photo_5222082398718201253_y.jpg",
          "media/fotbol/photo_5222082398718201254_y.jpg",
          "media/fotbol/photo_5222082398718201256_y.jpg",
          "media/fotbol/photo_5222082398718201257_y.jpg",
          "media/fotbol/photo_5222082398718201258_y.jpg",
          "media/fotbol/photo_5222082398718201259_y.jpg",
          "media/fotbol/photo_5222082398718201260_y.jpg",
          "media/fotbol/photo_5222082398718201262_y.jpg",
          "media/fotbol/photo_5222082398718201263_y.jpg",
          "media/fotbol/photo_5222082398718201265_y.jpg",
          "media/fotbol/photo_5222082398718201268_y.jpg",
          "media/fotbol/photo_5222082398718201269_y.jpg",
          "media/fotbol/photo_5222082398718201270_y.jpg",
          "media/fotbol/photo_5222082398718201271_y.jpg",
          "media/fotbol/photo_5222082398718201274_y.jpg",
          "media/fotbol/photo_5222082398718201275_y.jpg",
          "media/fotbol/photo_5222082398718201276_y.jpg",
          "media/fotbol/photo_5222082398718201278_y.jpg",
          "media/fotbol/photo_5222082398718201281_y.jpg",
          "media/fotbol/photo_5222082398718201283_y.jpg",
        ],
        desc: `
        Ты в полном азартe, наблюдая за игрой. ⚽  
        Энергия футбола сочетается с твоей харизмой — это просто круто!  
        Каждый момент на фото передает эмоции и атмосферу матча. 💥
        `
      },
      {
        src: "media/kafe/photo_5222196670618078825_y.jpg",
        related: [
          "media/kafe/photo_5222196670618078822_y.jpg",
          "media/kafe/photo_5222196670618078825_y.jpg",
          "media/kafe/photo_5222196670618078826_y.jpg",
        ],
        desc: 'Красота, комфорт и настроение в каждом снимке'
      },
      {
        src: "media/kol/photo_5222196670618078827_y.jpg",
        related: [
          "media/kol/photo_5222196670618078827_y.jpg",
          "media/kol/photo_5222196670618078831_y.jpg",
          "media/kol/photo_5222196670618078833_y.jpg",
        ],
        desc: `
        Природа Ысык-Куля и твоя грация создают невероятную гармонию. 🌊⛰️    
        Эти фото словно маленький отпуск, полный света и вдохновения. ✨
        `
      },
      {
        src: "media/mountains/photo_5222196670618078834_y.jpg",
        related: [
          "media/mountains/photo_5222196670618078828_y.jpg",
          "media/mountains/photo_5222196670618078829_y.jpg",
          "media/mountains/photo_5222196670618078830_y.jpg",
          "media/mountains/photo_5222196670618078834_y.jpg",
        ],
        desc: `
        Кажется, что время замерло на этих кадрах.  
        Просто восхитительно! 💫
        `
      }
    ];

    // --- Создаем базовые элементы ---
    const appRoot = document.getElementById('app-root') || document.createElement('div');
    appRoot.id = 'app-root';
    if (!document.getElementById('app-root')) document.body.appendChild(appRoot);

    const welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.innerHTML = `
      Добро пожаловать!<br>
      <button id="smileBtn">Открыть галерею</button>
    `;
    appRoot.appendChild(welcome);

    const smileBtn = document.getElementById('smileBtn');

    // --- Вспомогательные функции ---
    function clearGallery() { 
      const existingGallery = document.querySelector('.view');
      if (existingGallery) existingGallery.remove(); 
    }

    function createEl(tag, cls = '', parent = null) {
      const el = document.createElement(tag);
      if (cls) el.className = cls;
      if (parent) parent.appendChild(el);
      return el;
    }

    // --- Галерея ---
    function openGallery(startIndex = 0) {
      clearGallery(); // очищаем только галерею, не welcome

      welcome.style.display = 'none'; // скрываем welcome

      const view = createEl('div', 'view', appRoot);
      const gallery = createEl('div', 'gallery', view);

      const backBtn = createEl('button', 'back-btn', gallery);
      backBtn.textContent = '← Назад';
      backBtn.addEventListener('click', () => {
        view.remove(); // удаляем галерею
        welcome.style.display = 'block'; // показываем welcome
      });

      const mainArea = createEl('div', 'main-area', gallery);
      const bigWrap = createEl('div', 'folder-big', mainArea);
      const bigImg = createEl('img', '', bigWrap);
      bigImg.setAttribute('data-lightbox', 'gallery');
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

    smileBtn.addEventListener('click', () => openGallery(0));

  }).catch(err => console.error('Ошибка загрузки CDN:', err));

});
