(function () {
  const track = document.getElementById('carousel-track');
  const prev  = document.getElementById('reviews-prev');
  const next  = document.getElementById('reviews-next');
  const cards = track.querySelectorAll('.carousel-card');
  const total = cards.length;
  let current = 0;

  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  }

  function go(n) {
    const max = total - getVisible();
    current = Math.max(0, Math.min(n, max));
    const step = cards[0].offsetWidth + 24; // 24px = gap-6
    track.style.transition = 'transform 0.5s ease';
    track.style.transform  = 'translateX(-' + (current * step) + 'px)';
    prev.disabled = current === 0;
    next.disabled = current === max;
  }

  prev.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));

  window.addEventListener('resize', () => go(current));
  go(0);
})();
