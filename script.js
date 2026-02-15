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
