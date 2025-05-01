// 1. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// 2. Fade-In Elements on Scroll
const faders = document.querySelectorAll('.fade-in')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.2 })
faders.forEach(fader => observer.observe(fader))

// 3. Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navbar')
  nav.classList.toggle('scrolled', window.scrollY > 50)
})

// 4. Animated Counters
const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText
    const increment = target / 200

    if (count < target) {
      counter.innerText = Math.ceil(count + increment)
      setTimeout(updateCount, 10)
    } else {
      counter.innerText = target
    }
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount()
        counterObserver.unobserve(counter)
      }
    })
  }, { threshold: 0.5 })

  counterObserver.observe(counter)
})

// 5. Modal / CTA Popup Trigger
// Modal / CTA Popup Trigger
const modal = document.getElementById('ctaModal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

if (modal && openModal && closeModal) {
  openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// 6. Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.querySelector('.scroll-progress')
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollPercent = (scrollTop / scrollHeight) * 100
  if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`
})


window.addEventListener('load', () => {
  document.querySelector('.hero').classList.add('visible');
});

window.addEventListener('load', () => {
  document.querySelector('.navbar').classList.add('visible');
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener("mousemove", e => {
  const layers = document.querySelectorAll(".parallax");
  layers.forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    layer.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
  });
});


// 7. Typing Text Effect


// 7. Typing Text Effect
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  console.log("Hamburger script loaded");

  if (!hamburger || !navLinks) {
    console.error("Hamburger or navLinks not found");
    return;
  }

  hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      console.log("Nav link clicked");
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });

  // ✅ Start the typing effect here
  if (words.length) setTimeout(type, 1000);
});

const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = [
  "We Build AI Automations That Save You Time, Money, and Headaches",
  "Custom AI Systems That Scale With You",
  "No Templates. Just Results."
];

let wordIndex = 0;
let charIndex = 0;
let typingDelay = 80;
let erasingDelay = 50;
let newWordDelay = 1800;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  });
});
