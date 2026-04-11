/* ── Year ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Nav: scrolled state ── */
const nav = document.getElementById('main-nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Mobile nav ── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ── Scroll-reveal (opacity only — no translateY) ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => revealObs.observe(el));

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spyObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;

    navAnchors.forEach(a => a.classList.remove('active'));

    const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
    if (match) match.classList.add('active');
  });
}, { rootMargin: '-35% 0px -60% 0px' });

sections.forEach(s => spyObs.observe(s));