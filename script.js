(function () {
  const timeEl = document.querySelector(".clock-time");
  const dateEl = document.querySelector(".clock-date");
  if (!timeEl || !dateEl) return;

  const fmt = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    timeEl.textContent =
      pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
    dateEl.textContent = fmt.format(now);
  }

  tick();
  setInterval(tick, 1000);
})();
