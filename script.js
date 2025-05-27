function createCartModal(id) {
    let cartModalNode = document.querySelector(id);
    let overlay = cartModalNode.querySelector('.overlay');
    let closeButton = cartModalNode.querySelector('.close-button');

    function openCartModal() {
      cartModalNode.classList.add('active');
    }

    function closeCartModal() {
      cartModalNode.classList.remove('active');
    }

    overlay.addEventListener('click', closeCartModal);
    closeButton.addEventListener('click', closeCartModal);

    return openCartModal;
  }

let cartModal = createCartModal('#cart-modal');
document.querySelector('#cart-button').addEventListener('click', cartModal);

let listProductsHTML = document.querySelector('.product-list');
let listProducts = [];

const addDataToHTML = () => {
  listProducts.innerHTML = '';
  if(listProducts.length > 0) {
    listProducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Beli</button>
      `;
      listProductsHTML.appendChild(newProduct);
    })
  }
}
// Products List
const initApp = () => {
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    listProducts = data;
    console.log(listProducts);
    addDataToHTML();
  })
}

initApp();

