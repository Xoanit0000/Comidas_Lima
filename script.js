/* ==========================================================================
   Sabores de Lima · comportamiento
   Todo es opcional: sin JavaScript el blog se lee y se navega igual, porque
   los enlaces del menú son anclas al contenido.
   1) año del pie  2) filtro por etiquetas  3) entrada activa en el menú
   4) botón «Arriba»
   ========================================================================== */

(function () {
  'use strict';

  /* 1. Año del pie ------------------------------------------------------- */
  var anio = document.getElementById('anio');
  if (anio) {
    anio.textContent = String(new Date().getFullYear());
  }

  /* 2. Filtro por etiquetas ---------------------------------------------- */
  var botones = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var tarjetas = Array.prototype.slice.call(document.querySelectorAll('.tarjeta'));
  var estado = document.getElementById('estado-filtro');

  function normalizar(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function aplicarFiltro(filtro) {
    var visibles = 0;

    tarjetas.forEach(function (tarjeta) {
      var etiquetas = normalizar(tarjeta.getAttribute('data-etiquetas') || '').split(/\s+/);
      var coincide = filtro === 'todas' || etiquetas.indexOf(filtro) !== -1;
      tarjeta.hidden = !coincide;
      if (coincide) {
        visibles += 1;
      }
    });

    botones.forEach(function (boton) {
      boton.setAttribute('aria-pressed', String(boton.getAttribute('data-filtro') === filtro));
    });

    if (estado) {
      if (filtro === 'todas') {
        estado.textContent = 'Mostrando las ' + visibles + ' entradas.';
      } else if (visibles === 0) {
        estado.textContent = 'No hay entradas con esa etiqueta.';
      } else {
        estado.textContent = 'Mostrando ' + visibles + ' de ' + tarjetas.length + ' entradas.';
      }
    }
  }

  if (botones.length && tarjetas.length) {
    botones.forEach(function (boton) {
      boton.addEventListener('click', function () {
        aplicarFiltro(boton.getAttribute('data-filtro'));
      });
    });
    aplicarFiltro('todas');
  }

  /* 3. Entrada activa en el menú ----------------------------------------- */
  var enlaces = Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  var articulos = Array.prototype.slice.call(document.querySelectorAll('.entrada'));

  function marcarActivo(id) {
    enlaces.forEach(function (enlace) {
      var destino = enlace.getAttribute('href');
      if (destino === '#' + id) {
        enlace.setAttribute('aria-current', 'true');
      } else {
        enlace.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && articulos.length) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            marcarActivo(entrada.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    articulos.forEach(function (articulo) {
      observador.observe(articulo);
    });
  }

  /* 4. Botón «Arriba» ---------------------------------------------------- */
  var arriba = document.getElementById('arriba');

  if (arriba) {
    var reduceMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function revisarAltura() {
      arriba.hidden = window.scrollY < 600;
    }

    window.addEventListener('scroll', revisarAltura, { passive: true });
    revisarAltura();

    arriba.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMovimiento ? 'auto' : 'smooth' });
      var primero = document.querySelector('.marca');
      if (primero) {
        primero.focus({ preventScroll: true });
      }
    });
  }
})();
