document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.getElementById('scroll-arrow');
    const loader = document.getElementById('loader');

    if (arrow) {
        // Скроллим на описание при клике на стрелку
        arrow.addEventListener('click', function() {
            document.getElementById('description-section').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Убираем загрузчик
    requestAnimationFrame(() => loader.classList.add('fade-out'));
});






const carouselImages = document.querySelectorAll('.carousel-img');

let current = 0;

function updateCarousel() {
  carouselImages.forEach((img, index) => {
    img.classList.remove('active', 'next', 'prev');
  });

  const prev = (current - 1 + carouselImages.length) % carouselImages.length;
  const next = (current + 1) % carouselImages.length;

  carouselImages[current].classList.add('active');
  carouselImages[prev].classList.add('prev');
  carouselImages[next].classList.add('next');
}

setInterval(() => {
  current = (current + 1) % carouselImages.length;
  updateCarousel();
}, 5000);

updateCarousel(); // initial



const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;
const numberOfParticles = 80;

// Однажды устанавливаем размеры при загрузке
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// НЕ пересоздаём канвас на resize

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.1 + 0.05;

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();



// Плавное появление навбара при загрузке
window.addEventListener('load', () => {
    document.querySelector('.navbar').classList.add('visible');
  });
  



  // Плавное появление навбара
window.addEventListener('load', () => {
    document.querySelector('.navbar').classList.add('visible');
  });
  
  // Открытие/закрытие бургер-меню
  const burger = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
  });
  
// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 80;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
  
// === Локализация ===
const translations = {
  en: {
    home: 'Home',
    features: 'Features',
    screenshots: 'Screenshots',
    about: 'About',
    howToPlay: 'How to Play',
    download: 'Download',
    jumpHigher: 'Jump Higher. Play Faster.',
    description: 'Platform Jump is a dynamic arcade game where every leap brings you closer to a new record. Minimalism, style, and pure drive.',
    discover: 'Discover Features',
    featuresList: [
      {
        title: 'Smooth Physics-Based Gameplay',
        desc: 'Experience buttery-smooth physics and perfect timing.'
      },
      {
        title: 'Minimalistic Skill Challenge',
        desc: 'Pure, clean design focused on your true jumping skills.'
      },
      {
        title: 'Set New Personal Records',
        desc: 'Always push your limits and beat your highest scores.'
      },
      {
        title: 'Customize Your Ball',
        desc: 'Unlock new skins and make your ball truly yours.'
      },
      {
        title: 'Reach for the Stars',
        desc: 'Jump beyond platforms and conquer outer space.'
      }
    ],
    screenshots: 'In-Game Screenshots',
    aboutTitle: 'About Platform Jump',
    aboutText: `Platform Jump was born from a simple idea: pure skill, pure movement.\nI wanted to create a game that brings back the feeling of mastering every jump without distractions.\nClean design, responsive controls, and an endless chase for the next high score — that's what defines Platform Jump.`,
    downloadTitle: 'Download Platform Jump',
    downloadSoon: 'Coming soon to your favorite devices!',
    coming: 'Coming August 10, 2025',
    nav: ['Home','Features','Screenshots','About','How to Play','Download'],
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    email: 'support@platformjump.com',
    madeWith: 'Made with ❤️',
    mainSlogan: 'Jump higher, play faster!',
    faqTitle: 'FAQ',
    faq: [
      ['When will Platform Jump be released?', 'The game is scheduled for release on August 10.'],
      ['Which devices will the game be available on?', 'Platform Jump will be available for iOS and Android devices.'],
      ['Will the game be free?', 'Yes, the game will be free to play.'],
      ['What skins/customization are available?', 'The game offers a variety of unique skins to personalize your ball.'],
      ['What is the minimum Android/iOS required?', 'The game requires a modern Android or iOS device that meets current standards.'],
      ['How to contact support?', 'You can contact support at: support@platformjump.com'],
      ['Will other languages be supported?', 'At this time, support for other languages is not planned.']
    ],
  },
  ru: {
    home: 'Главная',
    features: 'Фишки',
    screenshots: 'Скриншоты',
    about: 'О игре',
    howToPlay: 'Как играть',
    download: 'Скачать',
    jumpHigher: 'Прыгай выше. Играй быстрее.',
    description: 'Platform Jump — это динамичная аркада, где каждый прыжок приближает тебя к новому рекорду. Минимализм, стиль и чистый драйв.',
    discover: 'Смотреть фишки',
    featuresList: [
      {
        title: 'Плавный физический геймплей',
        desc: 'Ощути идеальную физику и точный тайминг.'
      },
      {
        title: 'Минималистичный скилл-челлендж',
        desc: 'Чистый дизайн, где важны только твои прыжки.'
      },
      {
        title: 'Бей личные рекорды',
        desc: 'Постоянно улучшай результат и побеждай себя.'
      },
      {
        title: 'Кастомизируй шар',
        desc: 'Открывай новые скины и выделяйся.'
      },
      {
        title: 'Прыгай к звёздам',
        desc: 'Преодолевай платформы и покоряй космос.'
      }
    ],
    screenshots: 'Скриншоты из игры',
    aboutTitle: 'О Platform Jump',
    aboutText: `Platform Jump родилась из простой идеи: чистый скилл, чистое движение.\nЯ хотел создать игру, где важен каждый прыжок, без лишних отвлечений.\nЧистый дизайн, отзывчивое управление и вечная гонка за рекордом — вот что такое Platform Jump.`,
    downloadTitle: 'Скачать Platform Jump',
    downloadSoon: 'Скоро на ваших устройствах!',
    coming: 'Релиз 10 августа 2025',
    nav: ['Главная','Фишки','Скриншоты','О игре','Как играть','Скачать'],
    legal: 'Правовая информация',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    contact: 'Контакты',
    email: 'support@platformjump.com',
    madeWith: 'Сделано с любовью',
    mainSlogan: 'Прыгай выше, играй быстрее!',
    faqTitle: 'Часто задаваемые вопросы',
    faq: [
      ['Когда выйдет Platform Jump?', 'Релиз игры запланирован на 10 августа.'],
      ['На каких устройствах будет доступна игра?', 'Platform Jump будет доступна для устройств на базе iOS и Android.'],
      ['Будет ли игра бесплатной?', 'Да, игра будет распространяться бесплатно.'],
      ['Какие есть скины/кастомизация?', 'В игре доступно множество уникальных скинов для персонализации игрового шарика.'],
      ['Какой минимальный Android/iOS нужен для запуска?', 'Для запуска потребуется современное устройство на базе Android или iOS, соответствующее актуальным стандартам.'],
      ['Как связаться с поддержкой?', 'Вы можете связаться с поддержкой по адресу: support@platformjump.com'],
      ['Планируется ли поддержка других языков?', 'В настоящее время поддержка других языков не планируется.']
    ],
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('ru', lang === 'ru');
  // Навбар
  const navLinks = document.querySelectorAll('#nav-links a');
  navLinks.forEach((a, i) => {
    a.textContent = translations[lang].nav[i];
  });
  // Кнопки
  document.querySelector('.discover-button a').textContent = translations[lang].discover;
  // Заголовки и описания
  document.querySelector('#description-section h2').textContent = translations[lang].jumpHigher;
  document.querySelector('#description-section p').textContent = translations[lang].description;
  // Features
  const featureTitles = document.querySelectorAll('.feature-text h4');
  const featureDescs = document.querySelectorAll('.feature-text p');
  translations[lang].featuresList.forEach((f, i) => {
    if (featureTitles[i]) featureTitles[i].textContent = f.title;
    if (featureDescs[i]) featureDescs[i].textContent = f.desc;
  });
  // Screenshots
  document.querySelector('#screenshots-section h2').textContent = translations[lang].screenshots;
  // About
  document.querySelector('#about-section h2').textContent = translations[lang].aboutTitle;
  document.querySelector('#about-section p').textContent = translations[lang].aboutText;
  // Download
  document.querySelector('#download-section h2').textContent = translations[lang].downloadTitle;
  document.querySelector('#download-section .download-content p').textContent = translations[lang].downloadSoon;
  document.querySelector('.release-date').textContent = translations[lang].coming;
  // Footer
  const navFooter = document.querySelectorAll('.footer-section ul')[0].querySelectorAll('li a');
  navFooter.forEach((a, i) => {
    a.textContent = translations[lang].nav[i];
  });
  document.querySelector('.footer-section h4').textContent = translations[lang].legal;
  const legalLinks = document.querySelectorAll('.footer-section ul')[1].querySelectorAll('li a');
  legalLinks[0].textContent = translations[lang].privacy;
  legalLinks[1].textContent = translations[lang].terms;
  document.querySelectorAll('.footer-section h4')[2].textContent = translations[lang].contact;
  document.querySelectorAll('.footer-section ul')[2].querySelector('li a').textContent = translations[lang].email;
  // Кнопки активные
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.lang-btn[data-lang="'+lang+'"').classList.add('active');
  // Главный слоган под h1
  document.querySelector('.text-block p').textContent = translations[lang].mainSlogan || translations[lang].jumpHigher;
  // Made with ❤️
  const madeWithSpan = document.querySelector('.footer-content span');
  if (madeWithSpan) madeWithSpan.textContent = `© 2025 Platform Jump | ${translations[lang].madeWith}`;
  // FAQ
  document.querySelector('#faq-section h2').textContent = translations[lang].faqTitle;
  const faqItems = document.querySelectorAll('.faq-item');
  translations[lang].faq.forEach((pair, i) => {
    if (faqItems[i]) {
      faqItems[i].querySelector('.faq-question').textContent = pair[0];
      faqItems[i].querySelector('.faq-answer').textContent = pair[1];
    }
  });
}

// Обработчик переключения языка
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
  });
});

// Устанавливаем язык при загрузке
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const row = item.querySelector('.faq-question-row');
  row.addEventListener('click', () => {
    // Только один открытый
    faqItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
    item.classList.toggle('open');
  });
});

function resizeParticlesCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
}
window.addEventListener('resize', resizeParticlesCanvas);

// Ripple effect for buttons
function addRippleEffect(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}
addRippleEffect('.discover-button a');
addRippleEffect('.back-home-button');
addRippleEffect('.store-button.active');

// Cursor wave effect on hover
function addCursorWave(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    let wave = null;
    btn.addEventListener('mouseenter', e => {
      wave = document.createElement('span');
      wave.className = 'cursor-wave';
      btn.appendChild(wave);
      wave.classList.add('active');
    });
    btn.addEventListener('mousemove', e => {
      if (!wave) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      wave.style.left = x + 'px';
      wave.style.top = y + 'px';
    });
    btn.addEventListener('mouseleave', e => {
      if (wave) {
        wave.classList.remove('active');
        setTimeout(() => wave && wave.remove(), 200);
        wave = null;
      }
    });
  });
}
addCursorWave('.discover-button a');
addCursorWave('.back-home-button');
addCursorWave('.store-button.active');
  