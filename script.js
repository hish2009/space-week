
// =================================
// 1. Interactive Star Background
// =================================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let mouse = { x: -1000, y: -1000 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars = [];

  const count = Math.min(
    180,
    Math.floor(window.innerWidth / 6)
  );

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      speed: Math.random() * 0.35 + 0.08,
      opacity: Math.random(),
      direction: Math.random() * 0.03
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {

    star.y += star.speed;
    star.opacity += star.direction;

    if (star.opacity > 1 || star.opacity < 0.2) {
      star.direction *= -1;
    }

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    // Mouse interaction
    const dx = mouse.x - star.x;
    const dy = mouse.y - star.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let x = star.x;
    let y = star.y;

    if (distance < 100) {
      x -= dx * 0.015;
      y -= dy * 0.015;
    }

    ctx.beginPath();
    ctx.arc(x, y, star.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(180,215,255,${star.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

resizeCanvas();
animateStars();


// =================================
// 2. Arabic and English Translation
// =================================

const translations = {

  ar: {
    navHome: "الرئيسية",
    navAbout: "عن الأسبوع",
    navImportance: "الأهمية",
    navExplore: "استكشف",
    navProject: "المشروع",

    heroTag: "✦ احتفل بعظمة الكون",
    heroTitle: "أسبوع الفضاء|العالمي",
    heroDescription: "رحلة استثنائية لاكتشاف أسرار الكون، والتعرف على عالم مليء بالإبداع والاكتشافات.",
    heroButton: "اكتشف المزيد ↗",
    heroButton2: "استكشف الفضاء",
    statOne: "أكتوبر",
    statTwo: "بداية الاحتفال",
    statThree: "اكتشافات بلا حدود",
    scroll: "اكتشف المزيد",

    aboutEyebrow: "ABOUT THE EVENT",
    aboutTitle: "ما هو أسبوع الفضاء العالمي؟",
    aboutDescription: "مناسبة عالمية تحتفي بإنجازات الإنسان في علوم الفضاء والتكنولوجيا واستكشاف الكون.",

    aboutCard1Title: "احتفال عالمي",
    aboutCard1: "يشارك العالم في فعاليات وأنشطة تعليمية تهدف إلى نشر علوم الفضاء.",
    aboutCard2Title: "الابتكار والتكنولوجيا",
    aboutCard2: "التعرف على التطورات العلمية والتقنيات الحديثة في مجال الفضاء.",
    aboutCard3Title: "اكتشاف المستقبل",
    aboutCard3: "إلهام الأجيال القادمة للمشاركة في صناعة مستقبل استكشاف الكون.",

    importanceEyebrow: "WHY SPACE MATTERS",
    importanceTitle: "لماذا نهتم بالفضاء؟",
    importanceDescription: "الفضاء ليس مجرد نجوم وكواكب، بل عالم من العلوم والفرص.",

    importance1Title: "الاتصالات",
    importance1: "تساعد الأقمار الصناعية في تطوير الاتصالات العالمية.",
    importance2Title: "الطقس والمناخ",
    importance2: "تساعد تقنيات الفضاء في مراقبة الأرض والتنبؤ بالطقس.",
    importance3Title: "البحث العلمي",
    importance3: "تفتح الأبحاث الفضائية أبوابًا جديدة للمعرفة.",

    exploreEyebrow: "EXPLORE THE UNIVERSE",
    exploreTitle: "رحلة إلى أعماق الكون",
    exploreDescription: "تعرف على بعض العوالم المذهلة في مجموعتنا الشمسية.",

    planet1Label: "OUR HOME",
    planet1Title: "الأرض",
    planet1Description: "كوكبنا الجميل، موطن الحياة في المجموعة الشمسية.",
    planet2Label: "THE RED PLANET",
    planet2Title: "المريخ",
    planet2Description: "كوكب أحمر يثير اهتمام العلماء والباحثين.",
    planet3Label: "THE RINGED PLANET",
    planet3Title: "زحل",
    planet3Description: "يتميز بحلقاته الرائعة التي تجعله فريدًا.",

    missionEyebrow: "OUR MISSION",
    missionTitle: "المستقبل يبدأ من هنا...",
    missionDescription: "بالعلم والخيال والابتكار، نستطيع أن نصل إلى آفاق جديدة ونصنع مستقبلًا أفضل للبشرية.",
    missionButton: "تعرف على المشروع ↗",

    projectEyebrow: "THE PROJECT",
    projectTitle: "معلومات المشروع",
    projectDescription: "هذا الموقع مشروع تعليمي للتعريف بأسبوع الفضاء العالمي.",

    studentLabel: "تصميم الطالب",
    schoolLabel: "المدرسة",
    coordinatorLabel: "منسق البرنامج",
    supervisorLabel: "المعلم المشرف",
    principalLabel: "مدير المدرسة",

    footerText: "استكشف الكون، فالمعرفة ليس لها حدود."
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navImportance: "Importance",
    navExplore: "Explore",
    navProject: "Project",

    heroTag: "✦ CELEBRATE THE UNIVERSE",
    heroTitle: "WORLD SPACE|WEEK",
    heroDescription: "An extraordinary journey to discover the mysteries of the universe and explore a world full of innovation and discovery.",
    heroButton: "Discover More ↗",
    heroButton2: "Explore Space",
    statOne: "October",
    statTwo: "Celebration Started",
    statThree: "Endless Discoveries",
    scroll: "SCROLL TO EXPLORE",

    aboutEyebrow: "ABOUT THE EVENT",
    aboutTitle: "What Is World Space Week?",
    aboutDescription: "A global celebration of humanity's achievements in space science, technology, and exploration.",

    aboutCard1Title: "Global Celebration",
    aboutCard1: "People around the world participate in educational activities that promote space science.",
    aboutCard2Title: "Innovation & Technology",
    aboutCard2: "Discover scientific developments and modern space technologies.",
    aboutCard3Title: "Discover the Future",
    aboutCard3: "Inspire future generations to contribute to space exploration.",

    importanceEyebrow: "WHY SPACE MATTERS",
    importanceTitle: "Why Do We Care About Space?",
    importanceDescription: "Space is more than stars and planets. It is a world of science and opportunities.",

    importance1Title: "Communications",
    importance1: "Satellites help improve global communication systems.",
    importance2Title: "Weather & Climate",
    importance2: "Space technologies help monitor Earth and predict weather.",
    importance3Title: "Scientific Research",
    importance3: "Space research opens new doors to knowledge.",

    exploreEyebrow: "EXPLORE THE UNIVERSE",
    exploreTitle: "A Journey Into the Universe",
    exploreDescription: "Discover some amazing worlds in our solar system.",

    planet1Label: "OUR HOME",
    planet1Title: "Earth",
    planet1Description: "Our beautiful planet and the home of life in the solar system.",
    planet2Label: "THE RED PLANET",
    planet2Title: "Mars",
    planet2Description: "A red planet that fascinates scientists and researchers.",
    planet3Label: "THE RINGED PLANET",
    planet3Title: "Saturn",
    planet3Description: "Famous for its magnificent rings.",

    missionEyebrow: "OUR MISSION",
    missionTitle: "The Future Starts Here...",
    missionDescription: "Through science, imagination, and innovation, we can reach new horizons and build a better future for humanity.",
    missionButton: "Explore the Project ↗",

    projectEyebrow: "THE PROJECT",
    projectTitle: "Project Information",
    projectDescription: "This website is an educational project about World Space Week.",

    studentLabel: "Designed by",
    schoolLabel: "School",
    coordinatorLabel: "Program Coordinator",
    supervisorLabel: "Teacher Supervisor",
    principalLabel: "School Principal",

    footerText: "Explore the universe. Knowledge has no limits."
  }

};


// =================================
// 3. Language Switch Button
// =================================

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

function changeLanguage(lang) {

  currentLanguage = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[lang][key]) {

      const value = translations[lang][key];

      if (key === "heroTitle") {
        const parts = value.split("|");

        element.innerHTML = `${parts[0]}<span>${parts[1]}</span>`;
      } else {
        element.textContent = value;
      }
    }

  });

  languageBtn.textContent = lang === "ar" ? "ENGLISH" : "العربية";
}

languageBtn.addEventListener("click", () => {

  const nextLanguage = currentLanguage === "ar" ? "en" : "ar";

  changeLanguage(nextLanguage);

});


// =================================
// 4. Back To Top Button
// =================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// =================================
// 5. Start in Arabic
// =================================

changeLanguage("ar");
