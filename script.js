function showSection(section) {
  document.querySelectorAll('section').forEach(el => el.style.display = 'none');
  document.querySelector('.' + section).style.display = 'block';
}

function setActiveNav(link) {
  document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
  link.classList.add('active');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    setActiveNav(this);
    const section = this.textContent.trim().toLowerCase();
    showSection(section);
  });
});

showSection('home');
