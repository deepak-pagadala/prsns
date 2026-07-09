function updateOrderForm(type) {
  document.querySelectorAll('.order-fields').forEach(f => f.style.display = 'none');
  if (type) {
    const el = document.getElementById('fields-' + type);
    if (el) el.style.display = 'block';
  }
}

function showNote(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? 'block' : 'none';
}

function showCategory(id, btn) {
  document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('panel-' + id).classList.remove('hidden');
}

function filterGallery(cat, btn) {
  document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.classList.toggle('g-hidden', cat !== 'all' && item.dataset.cat !== cat);
  });
}

function handleSubmit(btn) {
  btn.textContent = "Enquiry Sent — We'll Be in Touch Soon";
  btn.style.background = 'var(--sage-dark)';
  btn.style.letterSpacing = '.12em';
  setTimeout(() => {
    btn.textContent = 'Send Enquiry';
    btn.style.background = '';
  }, 4000);
}
