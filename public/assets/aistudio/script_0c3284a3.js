const loader = document.querySelector('.page-loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('hide'), 450));
document.getElementById('year').textContent = new Date().getFullYear();

// Petit curseur-souris personnalisé (ordinateurs uniquement)
const cursor = document.querySelector('.mouse-cursor');
const finePointer = window.matchMedia('(pointer: fine)').matches;
if (finePointer && cursor) {
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let currentX = x, currentY = y;
  window.addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; });
  function followMouse() {
    currentX += (x - currentX) * 0.22;
    currentY += (y - currentY) * 0.22;
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
    requestAnimationFrame(followMouse);
  }
  followMouse();
  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
  window.addEventListener('mousedown', () => cursor.classList.add('click'));
  window.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

// Apparition progressive des sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Fenêtres de présentation des projets : contenu volontairement prudent, à personnaliser.
const projectInfo = {
  opportunite: { title: 'Opportunité', description: 'Un projet réalisé dans le cadre de ton parcours à Simplon. Ajoute ici le contexte exact, les utilisateurs concernés, le problème identifié et les écrans que tu as conçus.' },
  mairie: { title: 'Mairie Connectée', description: 'Un projet de service numérique autour de la relation entre une mairie et ses citoyens. Ajoute ici les fonctionnalités réellement étudiées, ta démarche UX et tes maquettes.' },
  keur: { title: 'Keur Facile', description: 'Un projet à présenter avec son besoin de départ, sa cible, le parcours utilisateur imaginé et les solutions d’interface que tu as réalisées.' },
  navaro: { title: 'NAVARO', description: 'Présente ici l’objectif de l’identité, les recherches graphiques, les choix de couleurs et de typographies ainsi que les supports réalisés.' },
  polel: { title: 'POLEL', description: 'Ton univers de marque : une identité inspirée d’une fleur à quatre pétales, symbole d’ouverture, de croissance et de créativité maîtrisée.' }
};
const modal = document.querySelector('.project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalKicker = document.getElementById('modal-kicker');
function openProject(key) {
  const info = projectInfo[key];
  if (!info) return;
  modalTitle.textContent = info.title;
  modalDescription.textContent = info.description;
  modalKicker.textContent = key === 'polel' ? 'IDENTITÉ & DIRECTION ARTISTIQUE' : 'PROJET · ÉTUDE DE CAS';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}
function closeProject() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
  });
});
modal.querySelectorAll('.modal-close, .modal-ok, .modal-backdrop').forEach(el => el.addEventListener('click', closeProject));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeProject(); });
