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
