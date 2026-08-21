document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('contact-email');
  if (!el) return;

  var user = el.getAttribute('data-user');
  var domain = el.getAttribute('data-domain');
  if (!user || !domain) return;

  var email = user + '@' + domain;
  var link = document.createElement('a');
  link.href = 'mailto:' + email;
  link.textContent = email;

  el.textContent = '';
  el.appendChild(link);
});
