function toggleNav() {
  const nav = document.getElementById('nav-center');
  const btn = document.getElementById('nav-toggle');
  const open = nav.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

document.querySelectorAll('#nav-center a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav-center');
    const btn = document.getElementById('nav-toggle');
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});

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

const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const submitBtn = orderForm.querySelector('.form-submit');
    const errorMsg = document.getElementById('form-error');
    errorMsg.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch(orderForm.action, {
      method: 'POST',
      body: new FormData(orderForm),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        orderForm.reset();
        document.querySelectorAll('.order-fields').forEach(f => f.style.display = 'none');
        orderForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        throw new Error('Form submission failed');
      }
    }).catch(() => {
      errorMsg.style.display = 'block';
    }).finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Enquiry';
    });
  });
}
