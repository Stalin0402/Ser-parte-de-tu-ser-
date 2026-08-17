/* =====================================================================
   TOCADISCOS INTERACTIVO — script.js
   ===================================================================== */

(function () {
  "use strict";

  const audio = document.getElementById("audio");
  const disco = document.getElementById("disco");
  const brazo = document.getElementById("brazo");

  const btnPlay = document.getElementById("btn-play");
  const iconoPlay = document.getElementById("icono-play");
  const iconoPausa = document.getElementById("icono-pausa");
  const btnAtras = document.getElementById("btn-atras");
  const btnAdelante = document.getElementById("btn-adelante");

  const barraProgreso = document.getElementById("barra-progreso");
  const tiempoActual = document.getElementById("tiempo-actual");
  const tiempoTotal = document.getElementById("tiempo-total");
  const barraVolumen = document.getElementById("barra-volumen");

  let arrastrandoProgreso = false;

  audio.volume = 0.8;

  function formatearTiempo(segundos) {
    if (!isFinite(segundos)) return "0:00";
    const m = Math.floor(segundos / 60);
    const s = Math.floor(segundos % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function reproducir() {
    audio.play().then(() => {
      disco.classList.add("girando");
      brazo.classList.add("tocando");
      iconoPlay.classList.add("oculto");
      iconoPausa.classList.remove("oculto");
      btnPlay.setAttribute("aria-label", "Pausar");
    }).catch(() => {
      // el navegador bloqueó la reproducción automática o hubo un error de carga
      btnPlay.setAttribute("aria-label", "No se pudo reproducir");
    });
  }

  function pausar() {
    audio.pause();
    disco.classList.remove("girando");
    brazo.classList.remove("tocando");
    iconoPlay.classList.remove("oculto");
    iconoPausa.classList.add("oculto");
    btnPlay.setAttribute("aria-label", "Reproducir");
  }

  btnPlay.addEventListener("click", () => {
    if (audio.paused) reproducir();
    else pausar();
  });

  btnAtras.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });

  btnAdelante.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration || audio.currentTime + 10, audio.currentTime + 10);
  });

  audio.addEventListener("loadedmetadata", () => {
    tiempoTotal.textContent = formatearTiempo(audio.duration);
    barraProgreso.max = audio.duration || 0;
  });

  audio.addEventListener("timeupdate", () => {
    if (arrastrandoProgreso) return;
    tiempoActual.textContent = formatearTiempo(audio.currentTime);
    barraProgreso.value = audio.currentTime;
  });

  audio.addEventListener("ended", () => {
    pausar();
    audio.currentTime = 0;
    barraProgreso.value = 0;
    tiempoActual.textContent = "0:00";
  });

  barraProgreso.addEventListener("input", () => {
    arrastrandoProgreso = true;
    tiempoActual.textContent = formatearTiempo(parseFloat(barraProgreso.value));
  });

  barraProgreso.addEventListener("change", () => {
    audio.currentTime = parseFloat(barraProgreso.value);
    arrastrandoProgreso = false;
  });

  barraVolumen.addEventListener("input", () => {
    audio.volume = parseFloat(barraVolumen.value) / 100;
  });

})();
