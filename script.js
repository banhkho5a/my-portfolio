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

// Stagger glare animation on tech tags
document.querySelectorAll('.tech-tag').forEach((tag, i) => {
  tag.style.animationDelay = `${i * 0.3}s`;
  tag.style.setProperty('--glare-delay', `${i * 0.3}s`);
});

// Stagger glare animation on project tags
document.querySelectorAll('.project-tags span').forEach((tag, i) => {
  tag.style.setProperty('--glare-delay', `${i * 0.3}s`);
});

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

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function openResumeModal(e) {
  e.preventDefault();
  if (isMobile) {
    if (confirm('Open resume in a new tab for better viewing?')) {
      window.open('assets/resume.pdf', '_blank');
    }
    return;
  }
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
