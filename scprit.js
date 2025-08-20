
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    navbar.style.backgroundColor = "rgba(0,0,0,0.85)";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.backgroundColor = "black";
  }
});


const revealElements = document.querySelectorAll('.product, .organic, .store, .details');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('reveal');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 


document.querySelector('form')?.addEventListener('submit', e => {
  const inputs = e.target.querySelectorAll('input, textarea');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "1px solid #ccc";
    }
  });
  if (!valid) {
    e.preventDefault();
    alert("⚠️ Please fill out all fields before submitting.");
  }
});


const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "12px 16px";
backToTop.style.fontSize = "18px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "green";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";


window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});


backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
