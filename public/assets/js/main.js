/* ==========================================================================
   MV Gestão Web — main.js
   Protocolo CORE MV™ | defer | Sem bloqueio de renderização
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. FAQ TOGGLE
-------------------------------------------------------------------------- */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-open');

      // Fecha todos
      faqItems.forEach(function (i) {
        i.classList.remove('is-open');
        const b = i.querySelector('.faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado (se não estava aberto)
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. MENU MOBILE
-------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = toggle.classList.toggle('is-open');
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha ao clicar em link do menu mobile
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. ANIMAÇÕES DE ENTRADA — Intersection Observer
-------------------------------------------------------------------------- */
function initFadeUp() {
  // Se prefers-reduced-motion, exibe tudo imediatamente
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Dispara uma só vez
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   4. HEADER — adiciona classe ao scrollar
-------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.style.backgroundColor = 'rgba(10, 15, 30, 1)';
    } else {
      header.style.backgroundColor = 'rgba(10, 15, 30, 0.95)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   5. SMOOTH SCROLL para âncoras internas
-------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '64',
        10
      );
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

/* --------------------------------------------------------------------------
   6. INIT
-------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initFAQ();
  initMobileMenu();
  initFadeUp();
  initHeaderScroll();
  initSmoothScroll();
});
