document.addEventListener("DOMContentLoaded", () => {
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

  const appRoot = document.getElementById('app-root');
  const smileBtn = document.getElementById('smileBtn');
  const welcome = document.getElementById('welcome');

  smileBtn.addEventListener('click', () => openGallery(0));

  function clearRoot() { appRoot.innerHTML = ''; }

  function createEl(tag, cls='', parent=null){
    const el=document.createElement(tag);
    if(cls) el.className=cls;
    if(parent) parent.appendChild(el);
    return el;
  }

  function openGallery(startIndex=0){
    welcome.style.display='none';
    clearRoot();

    const view = createEl('div','view',appRoot);
    const gallery = createEl('div','gallery',view);
    const backBtn = createEl('button','back-btn',gallery);
    backBtn.textContent='← Назад';
    backBtn.addEventListener('click',()=>{
      clearRoot();
      welcome.style.display='block';
    });

    const mainArea = createEl('div','main-area',gallery);
    const folderBig = createEl('div','folder-big',mainArea);
    const bigImg = createEl('img','',folderBig);
    const folderRelated = createEl('div','folder-related',mainArea);
    const descBox = createEl('div','photo-description-box',mainArea);
    const descTitle = createEl('h3','',descBox);
    const descText = createEl('p','',descBox);
    const thumbs = createEl('div','folder-thumbs',gallery);

    let currentIndex=startIndex;

    function showPhoto(index){
      currentIndex=(index+mainPhotos.length)%mainPhotos.length;
      const photo = mainPhotos[currentIndex];
      bigImg.src=photo.src;
      descTitle.textContent=`Папка ${currentIndex+1}`;
      descText.textContent=photo.desc;

      folderRelated.innerHTML='';
      photo.related.forEach(src=>{
        const t = createEl('img','thumb-related',folderRelated);
        t.src=src;
        t.addEventListener('click',()=>bigImg.src=src);
      });
    }

    mainPhotos.forEach((ph,i)=>{
      const t = createEl('img','thumb',thumbs);
      t.src=ph.src;
      t.addEventListener('click',()=>showPhoto(i));
    });

    showPhoto(currentIndex);
  }
});