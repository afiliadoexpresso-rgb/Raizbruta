const whatsappNumber = '558132998083';

function whatsappLink(message) {
  return 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
}

const products = [
  { name: 'Força da Terra', category: 'Agro', image: 'agro-5d.webp', alt: 'Camisa verde com trator e lavoura' },
  { name: 'Tucunaré Bruto', category: 'Pesca', image: 'pesca-5d.webp', alt: 'Camisa azul com tucunaré saltando da água' },
  { name: 'Trilha Selvagem', category: 'Aventura', image: 'aventura-5d.webp', alt: 'Camisa escura com montanhas e pôr do sol' },
  { name: 'Fé que Guia', category: 'Religioso', image: 'religioso-5d.webp', alt: 'Camisa preta com cruz dourada e raios de luz' },
  { name: 'Alma Country', category: 'Country', image: 'country-5d.webp', alt: 'Camisa em tons de cobre com chapéu e botas country' },
  { name: 'Poeira de Arena', category: 'Vaquejada', image: 'vaquejada-5d.webp', alt: 'Camisa em tons terrosos com vaqueiros a cavalo na arena' },
];

const grid = document.querySelector('#products');
for (const product of products) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = product.category.toLowerCase();
  card.innerHTML = `
    <img src="${product.image}" alt="${product.alt}" width="560" height="560" loading="lazy" decoding="async">
    <div class="card-info">
      <p class="category">${product.category}</p>
      <h3>${product.name}</h3>
      <p class="product-spec">Estampa 5D · Zíper na gola</p>
      <a data-whatsapp="Olá! Gostaria de consultar preço, tamanhos e disponibilidade do modelo ${product.name}." href="#personalizados"><svg aria-hidden="true"><use href="#wa"/></svg> Consultar modelo</a>
    </div>`;
  grid.append(card);
}

for (const link of document.querySelectorAll('[data-whatsapp]')) {
  link.href = whatsappLink(link.dataset.whatsapp);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
}

const filters = document.querySelectorAll('[data-filter]');
for (const filter of filters) {
  filter.addEventListener('click', () => {
    for (const button of filters) {
      button.setAttribute('aria-pressed', String(button === filter));
    }
    for (const card of grid.children) {
      card.hidden = filter.dataset.filter !== 'todos' && card.dataset.category !== filter.dataset.filter;
    }
  });
}
