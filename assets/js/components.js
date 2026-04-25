(function () {
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '';
  const isCond = page === 'conditions.html';

  function inject(selector, html) {
    const el = document.querySelector(selector);
    if (!el) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = html.trim();
    el.replaceWith(tmp.firstElementChild);
  }

  inject('[data-component="header"]', `
    <header class="site-header">
      <a href="index.html" class="site-header__logo-wrap" aria-label="Punjab Physiotherapy Centre — Home">
        <img src="assets/images/logo.png" alt="Punjab Physiotherapy Centre">
      </a>
      <nav class="site-header__nav" id="site-nav">
        <a href="index.html"${isHome ? ' class="active"' : ''}>HOME</a>
        <a href="index.html#services">SERVICES</a>
        <a href="conditions.html"${isCond ? ' class="active"' : ''}>CONDITIONS</a>
      </nav>
      <div class="site-header__actions">
        <a href="https://www.instagram.com/punjabphysio?igsh=MWJrcnFyZTB6YXV3OA==" target="_blank" rel="noopener" aria-label="Instagram" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="tel:+919646329698" aria-label="Call" class="social-icon"><i class="fa-solid fa-phone"></i></a>
        <a href="https://wa.me/919646329698?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20physiotherapy%20appointment.%20Please%20share%20available%20slots." target="_blank" rel="noopener" aria-label="WhatsApp" class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#" aria-label="Gmail"     class="social-icon"><i class="fa-regular fa-envelope"></i></a>
        <a href="book.html" class="btn-book-header">BOOK TODAY</a>
      </div>
      <button class="site-header__menu-btn" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </header>
  `);

  inject('[data-component="footer"]', `
    <footer class="site-footer">
      <div class="footer__cta">
        <h2 class="section-heading footer__cta-heading">Ready to begin your recovery?</h2>
        <p class="footer__cta-text">Take the first step towards a life without pain. Schedule your comprehensive evaluation at Punjab Physiotherapy and Rehabilitation Centre today.</p>
      </div>
      <div class="footer__cols">
        <div class="footer__col">
          <h3 class="footer__col-heading">Contact Us</h3>
          <p class="mb-loose"><a href="https://maps.google.com/maps?q=Punjab+Physiotherapy+Rehabilitation+Centre+Malerkotla+Punjab+India" target="_blank" rel="noopener" class="footer__maps-link"><i class="fa-solid fa-location-dot"></i> Punjab Physiotherapy and Rehabilitation Centre<br>Malerkotla, Punjab, India</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919646329698" style="color:rgba(255,255,255,.8)">+91 9646329698</a></p>
          <p><strong>Email:</strong> </p>
        </div>
        <div class="footer__col">
          <h3 class="footer__col-heading">Hours</h3>
          <ul class="footer__hours">
            <li><span>Monday</span>   <span>9:00 am – 9:00 pm</span></li>
            <li><span>Tuesday</span>  <span>9:00 am – 9:00 pm</span></li>
            <li><span>Wednesday</span><span>9:00 am – 9:00 pm</span></li>
            <li><span>Thursday</span> <span>9:00 am – 9:00 pm</span></li>
            <li><span>Friday</span>   <span>9:00 am – 9:00 pm</span></li>
            <li><span>Saturday</span> <span>9:00 am – 9:00 pm</span></li>
          </ul>
        </div>
        <div class="footer__book-col">
          <a href="book.html" class="btn-book-footer">BOOK AN APPOINTMENT</a>
          <div class="footer__follow">
            <h3 class="footer__follow-heading">Follow Us</h3>
            <div class="footer__socials">
              <a href="https://www.instagram.com/punjabphysio?igsh=MWJrcnFyZTB6YXV3OA==" target="_blank" rel="noopener" aria-label="Instagram" class="footer__social-icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="tel:+919646329698" aria-label="Call" class="footer__social-icon"><i class="fa-solid fa-phone"></i></a>
              <a href="https://wa.me/919646329698?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20physiotherapy%20appointment.%20Please%20share%20available%20slots." target="_blank" rel="noopener" aria-label="WhatsApp" class="footer__social-icon"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#" aria-label="Gmail"     class="footer__social-icon"><i class="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>PUNJAB PHYSIOTHERAPY AND REHABILITATION CENTRE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  `);
  // Mobile nav toggle
  const menuBtn = document.getElementById('menu-toggle');
  const nav     = document.getElementById('site-nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('mobile-open');
      menuBtn.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click (for same-page anchor links too)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('mobile-open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove('mobile-open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
