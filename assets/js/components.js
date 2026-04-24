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
      <div class="site-header__logo-wrap">
        <img src="assets/images/logo.png" alt="Punjab Physiotherapy Centre">
      </div>
      <nav class="site-header__nav">
        <a href="index.html"${isHome ? ' class="active"' : ''}>HOME</a>
        <a href="index.html#services">SERVICES</a>
        <a href="conditions.html"${isCond ? ' class="active"' : ''}>CONDITIONS</a>
      </nav>
      <div class="site-header__actions">
        <a href="#" aria-label="Instagram" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"  class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="WhatsApp"  class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#" aria-label="Gmail"     class="social-icon"><i class="fa-regular fa-envelope"></i></a>
        <button class="btn-book-header">BOOK TODAY</button>
      </div>
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
          <p class="mb-loose">Punjab Physiotherapy and Rehabilitation Centre<br>Malerkotla, Punjab, India</p>
          <p><strong>Phone:</strong> +91 9646329698</p>
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
            <li><span>Sunday</span>   <span>9:00 am – 9:00 pm</span></li>
          </ul>
        </div>
        <div class="footer__book-col">
          <button class="btn-book-footer">BOOK AN APPOINTMENT</button>
          <div class="footer__follow">
            <h3 class="footer__follow-heading">Follow Us</h3>
            <div class="footer__socials">
              <a href="#" aria-label="Instagram" class="footer__social-icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"  class="footer__social-icon"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="WhatsApp"  class="footer__social-icon"><i class="fa-brands fa-whatsapp"></i></a>
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
})();
