// Переключение персонажей
const characterBtns = document.querySelectorAll(".character-btn");
const characterInfos = document.querySelectorAll(".character-info");
 
      // Переключение языков
      const langButtons = document.querySelectorAll(".lang-btn");

      langButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          langButtons.forEach((b) => b.classList.remove("active"));
          this.classList.add("active");

          const lang = this.dataset.lang;
          changeLanguage(lang);
        });
      });

      // Функция смены языка (заглушка)
      function changeLanguage(lang) {
        console.log(
          `Язык изменён на: ${lang === "ru" ? "teamкий" : "English"}`
        );
        // Здесь будет реальная логика смены языка
      }

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
        modalCounter.textContent = `${index + 1}/${totalItems}`;
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

      // Language switcher (placeholder)
      document
        .getElementById("RU")
        .addEventListener("click", () => alert("Переключение на русский язык"));
      document
        .getElementById("EN")
        .addEventListener("click", () => alert("Switching to English"));
        
// Переключение Персонажей
        function selectCharacter(index) {
  const characters = document.querySelectorAll('.character');
  characters.forEach((char, i) => {
    if (i === index) {
      char.classList.toggle('active');
    } else {
      char.classList.remove('active');
    }
  });
}