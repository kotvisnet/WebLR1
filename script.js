class StoreCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Товар';
    const desc = this.getAttribute('desc') || '';
    this.innerHTML = `<article class="card"><h3>${title}</h3><p>${desc}</p></article>`;
  }
}
customElements.define('store-card', StoreCard);

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('contrast');
      if (document.body.classList.contains('contrast')) {
        document.body.style.filter = 'contrast(1.1) saturate(1.1)';
      } else {
        document.body.style.filter = 'none';
      }
    });
  }

  const calcForm = document.getElementById('calcForm');
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const qty = Number(document.getElementById('qty').value) || 0;
      const price = Number(document.getElementById('price').value) || 0;
      document.getElementById('calcResult').textContent = `Итого: ${qty * price} ₽`;
    });
  }
});
