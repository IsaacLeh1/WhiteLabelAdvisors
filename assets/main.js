// Sticky nav background on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// Blog category filtering
const filters = document.getElementById('blogFilters');
if (filters) {
  const posts = document.querySelectorAll('#blogList .post');
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    filters.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    posts.forEach(p => {
      const show = f === 'all' || p.dataset.category.split(' ').includes(f);
      p.style.display = show ? '' : 'none';
    });
  });
}

// Scroll-reveal (premium fade-up as sections enter view)
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// About photo carousel (Christine actively working)
const aboutCar = document.getElementById('aboutCarousel');
if (aboutCar) {
  const imgs = Array.from(aboutCar.querySelectorAll('img'));
  const dots = Array.from(document.querySelectorAll('#aboutDots button'));
  let j = 0, t;
  function go(n) {
    j = (n + imgs.length) % imgs.length;
    imgs.forEach((im, k) => im.classList.toggle('active', k === j));
    dots.forEach((d, k) => d.classList.toggle('active', k === j));
  }
  function loop() { clearInterval(t); t = setInterval(() => go(j + 1), 6000); }
  dots.forEach((d, k) => d.addEventListener('click', () => { go(k); loop(); }));
  loop();
}

// Testimonials carousel
const carousel = document.getElementById('clientsCarousel');
if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.client-slide'));
  const dots = Array.from(carousel.querySelectorAll('.client-dots button'));
  let i = 0, timer;
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
  }
  function reset() { clearInterval(timer); timer = setInterval(() => show(i + 1), 9000); }
  const prev = carousel.querySelector('.client-arrow.prev');
  const next = carousel.querySelector('.client-arrow.next');
  if (prev) prev.addEventListener('click', () => { show(i - 1); reset(); });
  if (next) next.addEventListener('click', () => { show(i + 1); reset(); });
  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); reset(); }));
  show(0); reset();
}

// Contact form (mailto fallback — no backend)
function handleSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent('Inquiry from ' + (f.name.value || 'Website'));
  const body = encodeURIComponent(
    'Name: ' + f.name.value + '\n' +
    'Company: ' + f.company.value + '\n' +
    'Email: ' + f.email.value + '\n\n' +
    f.message.value
  );
  window.location.href = 'mailto:christine@whitelabeladvisors.com?subject=' + subject + '&body=' + body;
}
