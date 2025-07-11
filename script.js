// Show elements with animations on scroll
const animatedElements = document.querySelectorAll('.fade-in, .slide-in');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight / 1.2;

  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
