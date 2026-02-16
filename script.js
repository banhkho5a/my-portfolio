const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => { entry.target.classList.add('visible'); }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

function closeNav() {
  navToggle.classList.remove('active');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('active');
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
  navOverlay.classList.toggle('active');
});

navOverlay.addEventListener('click', closeNav);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Resume modal
const resumeBtn = document.getElementById('resume-btn');
const resumeModal = document.getElementById('resume-modal');
const modalClose = document.getElementById('modal-close');

const navResumeBtn = document.getElementById('nav-resume-btn');

function openResumeModal(e) {
  e.preventDefault();
  resumeModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

resumeBtn.addEventListener('click', openResumeModal);
navResumeBtn.addEventListener('click', openResumeModal);

modalClose.addEventListener('click', () => {
  resumeModal.classList.remove('active');
  document.body.style.overflow = '';
});

resumeModal.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
