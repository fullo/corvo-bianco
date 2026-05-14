/* ============================================================
   Corvo Bianco — main.js
   ============================================================
   Volutamente minimo. Sumi-e applicato al codice: solo i tratti
   necessari. Nessun framework, nessuna dipendenza.

   Responsabilità attuali:
     1. Inietta inline il logo yatagarasu come SVG con fill=currentColor
        (così segue il color: var(--sumi) del parent — sempre in palette).
     2. Toggle tema chiaro/scuro persistente in localStorage.
   ============================================================ */

(function () {
  'use strict';

  // --- 1. Inline injection del logo (per ereditare currentColor) ---
  var logoMount = document.getElementById('yatagarasu-logo');
  if (logoMount) {
    fetch('assets/images/yatagarasu-paint.svg')
      .then(function (r) { return r.text(); })
      .then(function (svg) {
        logoMount.innerHTML = svg;
        // Rimuovi width/height fissi dell'SVG così scala col container
        var svgEl = logoMount.querySelector('svg');
        if (svgEl) {
          svgEl.removeAttribute('width');
          svgEl.removeAttribute('height');
          svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }
      })
      .catch(function (err) {
        // Fallback silenzioso: lascia il container vuoto invece di crashare.
        console.warn('Logo SVG load failed:', err);
      });
  }

  // --- 2. Theme toggle ---
  var KEY = 'cb-theme';
  var btn = document.getElementById('themeToggle');
  var root = document.documentElement;

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (btn) btn.textContent = 'Giorno';
    } else {
      root.removeAttribute('data-theme');
      if (btn) btn.textContent = 'Notte';
    }
  }

  apply(localStorage.getItem(KEY) || 'light');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      apply(next);
    });
  }

})();
