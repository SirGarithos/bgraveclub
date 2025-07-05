// script.js
function showSection(sectionClass) {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.events').style.display = 'none';
  document.querySelector(sectionClass).style.display = 'block';
}

document.querySelector('nav a.active').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('.home');
});

document.querySelector('nav a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('.about');
});

document.querySelector('nav a[href="#events"]').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('.events');
});
