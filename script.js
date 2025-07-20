// Объект с переводами
    const translations = {
      ru: {
        nav_info: "Инфо",
        nav_characters: "Персонажи",
        nav_gallery: "Галерея",
        nav_news: "Новости",
        pre_order: "Pre-order",
        section_news: "Новости",
        section_info: "Инфо",
        section_characters: "Персонажи",
        section_gallery: "Галерея",
        news1_p1: "Друзья, это свершилось! Демо-версия «Под покровом солнца» вышла в Steam! Ссылка для скачивания: store.steampowered.com/app/217816...",
        news1_p2: "Добро пожаловать в уютную и живописную деревню, где время течет медленно и спокойно, словно река, которая тихо протекает по зеленым полям и лесам.",
        news2_p1: "Друзья, это свершилось! Демо-версия «Под покровом солнца» вышла в Steam! Ссылка для скачивания: store.steampowered.com/app/217816...",
        news2_p2: "Добро пожаловать в уютную и живописную деревню, где время течет медленно и спокойно, словно река, которая тихо протекает по зеленым полям и лесам.",
        info_p1: "\"SOLAR DALL\" - визуальная новелла, которая перенесёт тебя в атмосферу деревенской жизни 1982 года. Здесь ты познакомишься с множеством интересных персонажей. Узнаешь много захватывающего об этом загадочном мире и, возможно, даже встретишь свою настоящую любовь! Приготовься окунуться в увлекательное приключение, полное тайн, загадок и даже опасностей.",
        info_p2: "Плиса - это реально существующая деревня в Беларуси, где проживают около 300 человек. Её даже можно найти на карте. Здесь прошло лето автора идеи \"Под покровом солнца\". Каждое лето для него здесь было маленьким и захватывающим приключением. Множество приятных воспоминаний детства легли в основу нашей новеллы. Мы уверены, каждый из вас найдёт здесь что-то родное и знакомое и для себя!",
        char0_name: "Виталик",
        char0_desc: "Лето для Виталика — это возможность сбежать от привычного ритма школы...",
        char0_alt: "Виталик",
        char1_name: "Персонаж 2",
        char1_desc: "Описание персонажа 2",
        char1_alt: "Персонаж 2",
        char2_name: "Персонаж 3",
        char2_desc: "Описание персонажа 3",
        char2_alt: "Персонаж 3",
        char3_name: "Персонаж 4",
        char3_desc: "Описание персонажа 4",
        char3_alt: "Персонаж 4",
        char4_name: "Персонаж 5",
        char4_desc: "Описание персонажа 5",
        char4_alt: "Персонаж 5",
        char5_name: "Персонаж 6",
        char5_desc: "Описание персонажа 6",
        char5_alt: "Персонаж 6",
        char6_name: "Персонаж 7",
        char6_desc: "Описание персонажа 7",
        char6_alt: "Персонаж 7",
        gallery_alt_1: "Скриншот 1",
        gallery_alt_2: "Скриншот 2",
        gallery_alt_3: "Скриншот 3",
        gallery_alt_4: "Скриншот 4",
        gallery_alt_5: "Скриншот 5",
        gallery_alt_6: "Скриншот 6",
        gallery_alt_7: "Скриншот 7",
        gallery_alt_8: "Скриншот 8",
        gallery_alt_9: "Скриншот 9",
        gallery_alt_10: "Скриншот 10",
        platforms_title: "Доступно на платформах:",
        logo_alt: "Логотип",
        info_img_alt: "Об игре",
        footer_logo_alt: "Логотип",
        image_counter: "1/10"
      },
      en: {
        nav_info: "Info",
        nav_characters: "Characters",
        nav_gallery: "Gallery",
        nav_news: "News",
        pre_order: "Pre-order",
        section_news: "News",
        section_info: "Info",
        section_characters: "Characters",
        section_gallery: "Gallery",
        news1_p1: "Friends, it happened! The demo version of 'Under the Cover of the Sun' is out on Steam! Download link: store.steampowered.com/app/217816...",
        news1_p2: "Welcome to a cozy and picturesque village where time flows slowly and calmly, like a river quietly flowing through green fields and forests.",
        news2_p1: "Friends, it happened! The demo version of 'Under the Cover of the Sun' is out on Steam! Download link: store.steampowered.com/app/217816...",
        news2_p2: "Welcome to a cozy and picturesque village where time flows slowly and calmly, like a river quietly flowing through green fields and forests.",
        info_p1: "\"SOLAR DALL\" is a visual novel that will transport you to the atmosphere of village life in 1982. Here you will meet many interesting characters. You will learn a lot of exciting things about this mysterious world and perhaps even find your true love! Get ready to dive into an exciting adventure full of secrets, mysteries and even dangers.",
        info_p2: "Plisa is a real village in Belarus where about 300 people live. You can even find it on the map. This is where the author of 'Under the Cover of the Sun' spent his summer. Every summer here was a small and exciting adventure for him. Many pleasant childhood memories formed the basis of our novel. We are sure that each of you will find something familiar and close to you here!",
        char0_name: "Vitalik",
        char0_desc: "Summer for Vitalik is an opportunity to escape from the usual rhythm of school...",
        char0_alt: "Vitalik",
        char1_name: "Character 2",
        char1_desc: "Character 2 description",
        char1_alt: "Character 2",
        char2_name: "Character 3",
        char2_desc: "Character 3 description",
        char2_alt: "Character 3",
        char3_name: "Character 4",
        char3_desc: "Character 4 description",
        char3_alt: "Character 4",
        char4_name: "Character 5",
        char4_desc: "Character 5 description",
        char4_alt: "Character 5",
        char5_name: "Character 6",
        char5_desc: "Character 6 description",
        char5_alt: "Character 6",
        char6_name: "Character 7",
        char6_desc: "Character 7 description",
        char6_desc: "Character 7",
        gallery_alt_1: "Screenshot 1",
        gallery_alt_2: "Screenshot 2",
        gallery_alt_3: "Screenshot 3",
        gallery_alt_4: "Screenshot 4",
        gallery_alt_5: "Screenshot 5",
        gallery_alt_6: "Screenshot 6",
        gallery_alt_7: "Screenshot 7",
        gallery_alt_8: "Screenshot 8",
        gallery_alt_9: "Screenshot 9",
        gallery_alt_10: "Screenshot 10",
        platforms_title: "Available on platforms:",
        logo_alt: "Logo",
        info_img_alt: "About the game",
        footer_logo_alt: "Logo",
        image_counter: "1/10"
      }
    };

    // Текущий язык
    let currentLang = 'ru';

    // Функция смены языка
    function changeLanguage(lang) {
      currentLang = lang;
      
      // Обновляем тексты
      document.querySelectorAll('.lang').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang][key]) {
          if (element.tagName === 'IMG') {
            element.alt = translations[lang][key];
          } else {
            element.textContent = translations[lang][key];
          }
        }
      });
      
      // Обновляем активную кнопку языка
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
          btn.classList.add('active');
        }
      });
      
      // Обновляем выбранного персонажа
      const activeCharacter = document.querySelector('.character.active');
      if (activeCharacter) {
        const characterId = activeCharacter.dataset.id;
        const characterData = translations[lang][`char${characterId}_desc`];
        if (characterData) {
          document.querySelector('.selected-description').innerHTML = `
            <h3>${translations[lang][`char${characterId}_name`]}</h3>
            <p>${characterData}</p>
          `;
        }
      }
    }

    // Переключение персонажей
    const characters = document.querySelectorAll('.character');
    const selectedDescription = document.querySelector('.selected-description');

characters.forEach(character => {
  character.addEventListener('click', function () {
    characters.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    const characterId = this.dataset.id;
    const characterName = translations[currentLang][`char${characterId}_name`];
    const characterDesc = translations[currentLang][`char${characterId}_desc`];

    // Обновление текста и изображения в новом блоке
    document.getElementById('character-name').textContent = characterName;
    document.getElementById('character-description').textContent = characterDesc;
    const img = document.getElementById('character-image');

    // Сброс старой анимации
    img.classList.remove('character-fade');
    void img.offsetWidth; // Трюк для перезапуска анимации
      
    // Обновляем данные
    img.src = `characters/${parseInt(characterId) + 1}pod_awa.png`;
    img.alt = characterName;
      
    // Применяем новую анимацию
    img.classList.add('character-fade');
    document.getElementById('character-image').alt = characterName;

    // Показываем блок
    document.getElementById('character-info-block').style.display = 'flex';
  });
});

    // Галерея
    const gallerySlider = document.querySelector(".gallery-slider");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevArrow = document.querySelector(".gallery-arrow.prev");
    const nextArrow = document.querySelector(".gallery-arrow.next");
    const modal = document.querySelector(".gallery-modal");
    const modalImg = modal.querySelector("img");
    const modalCounter = modal.querySelector(".image-counter");
    const modalPrev = modal.querySelector(".modal-arrow.prev");
    const modalNext = modal.querySelector(".modal-arrow.next");
    const modalClose = modal.querySelector(".modal-close");

    let currentIndex = 0;
    let slidesToShow = 3;
    const totalItems = galleryItems.length;

    function updateSlider() {
      const itemWidth = galleryItems[0].offsetWidth + 20;
      const offset = -currentIndex * itemWidth;
      gallerySlider.style.transform = `translateX(${offset}px)`;
    }

    function goToSlide(index) {
      const maxIndex = totalItems - slidesToShow;
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      updateSlider();
    }

    prevArrow.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextArrow.addEventListener("click", () => goToSlide(currentIndex + 1));

    galleryItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        openModal(index);
      });
    });

    function openModal(index) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      updateModalImage(index);
    }

    function updateModalImage(index) {
      const imgSrc = galleryItems[index].querySelector("img").src;
      modalImg.src = imgSrc;
      modalCounter.textContent = translations[currentLang].image_counter.replace('1', index + 1);
      currentModalIndex = index;
    }

    let currentModalIndex = 0;

    modalPrev.addEventListener("click", () => {
      const newIndex = (currentModalIndex - 1 + totalItems) % totalItems;
      updateModalImage(newIndex);
    });

    modalNext.addEventListener("click", () => {
      const newIndex = (currentModalIndex + 1) % totalItems;
      updateModalImage(newIndex);
    });

    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
          const newIndex = (currentModalIndex - 1 + totalItems) % totalItems;
          updateModalImage(newIndex);
        } else if (e.key === "ArrowRight") {
          const newIndex = (currentModalIndex + 1) % totalItems;
          updateModalImage(newIndex);
        } else if (e.key === "Escape") {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      }
    });

    function updateSlidesToShow() {
      if (window.innerWidth < 768) {
        slidesToShow = 1;
      } else if (window.innerWidth < 992) {
        slidesToShow = 2;
      } else {
        slidesToShow = 3;
      }

      const maxIndex = Math.ceil(totalItems / slidesToShow) - 1;
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      updateSlider();
    }

    updateSlidesToShow();
    window.addEventListener("resize", () => {
      updateSlidesToShow();
      updateSlider();
    });

    setTimeout(updateSlider, 100);

    // Переключатель языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        changeLanguage(lang);
      });
    });

    // Инициализация первого персонажа
    document.addEventListener('DOMContentLoaded', function() {
      if (characters.length > 0) {
        characters[0].click();
      }
    });