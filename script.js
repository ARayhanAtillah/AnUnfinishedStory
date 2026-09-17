const music = document.getElementById("bgMusic");
const musicControl = document.getElementById("musicControl");
const heroMusicButton = document.getElementById("heroMusicButton");
const musicState = document.getElementById("musicState");
const musicIcon = document.getElementById("musicIcon");
const progress = document.getElementById("readingProgress");
const sideNav = document.getElementById("sideNav");
const mobileMenuButton = document.getElementById("mobileMenuButton");

music.volume = 0.30;
let isPlaying = false;

async function toggleMusic() {
  try {
    if (!isPlaying) {
      await music.play();
      isPlaying = true;
      musicControl.classList.add("playing");
      musicState.textContent = "Jeda Musik";
      musicIcon.textContent = "❚❚";
      heroMusicButton.textContent = "❚❚ Jeda Musik";
      musicControl.setAttribute("aria-label", "Jeda musik");
    } else {
      music.pause();
      isPlaying = false;
      musicControl.classList.remove("playing");
      musicState.textContent = "Putar Musik";
      musicIcon.textContent = "♫";
      heroMusicButton.textContent = "♫ Musik Cerita";
      musicControl.setAttribute("aria-label", "Putar musik");
    }
  } catch (error) {
    console.error("Audio tidak dapat diputar:", error);
  }
}

musicControl.addEventListener("click", toggleMusic);
heroMusicButton.addEventListener("click", toggleMusic);

document.addEventListener("keydown", (event) => {
  if (
    event.key.toLowerCase() === "m" &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    toggleMusic();
  }
});

mobileMenuButton.addEventListener("click", () => {
  sideNav.classList.toggle("open");
});

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => sideNav.classList.remove("open"));
});

// Reading progress
function updateProgress() {
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
  progress.style.width = `${pct}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Reveal animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => {
  revealObserver.observe(item);
});

// Active navigation item
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".side-nav nav a")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.dataset.section === visible.target.id
      );
    });
  },
  { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] }
);

sections.forEach((section) => sectionObserver.observe(section));

// Subtle parallax on hero
const heroCopy = document.querySelector(".hero-copy");
const castle = document.querySelector(".castle-scene");
const moon = document.querySelector(".hero-moon");

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroCopy.style.transform = `translateY(${y * 0.06}px)`;
      castle.style.transform = `translateY(${y * 0.025}px)`;
      moon.style.transform = `translate(-50%, ${y * 0.02}px)`;
    }
  },
  { passive: true }
);
