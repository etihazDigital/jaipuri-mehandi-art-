const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const gallery = document.getElementById('photo-grid');
const captions = ['Royal bridal detail','Full hand bridal story','Classic bridal mehndi','Dark henna bridal work','Baby bracelet design','Petite pattern detail','Sweet celebration hands','Barbie mehndi for kids','Penguin design for kids','Modern front-hand bridal','Floral Arabic artistry','Easy Arabic design','Floral front-hand design','Paisley Arabic detail','Abstract mirror motifs','Maroon nail bridal detail','Latest mehndi style','Floral & paisley idea','Stylish bridal florals','Party mehndi style','Groom story detail','Bride & groom motif','Groom mehndi collection','Modern groom mehndi','Simple groom mehndi','Groom design detail','Elegant groom design','Bridal henna inspiration','Mehndi function inspiration','Wedding bridal mehndi'];
gallery.innerHTML = captions.map((caption, index) => { const number = String(index + 1).padStart(2, '0'); return `<figure class="gallery-tile"><img src="assets/mehndi-gallery-${number}.jfif" loading="lazy" alt="${caption} by Jaipuri Mehandi Art" /><figcaption>${caption}</figcaption></figure>`; }).join('');
