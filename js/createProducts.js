
import { removeProduct } from './endpoints.js'
const createProducts = ({ name, img_path, price, id }) => {
    const product = document.createElement('li');
    product.className = 'product';
    product.innerHTML =
        `
        <img class="product__img" src="${img_path}" alt="img_prueba">
        <h3 class="product__name">${name}</h3>
        <div class="product__info">
        <h2 class="product__info__price">$ ${price}</h2>
        <img class="trash-icon" src="./assets/trash.svg" alt="trash_icon" data-trash-icon>
        </div>`;
    product.querySelector('[ data-trash-icon]').addEventListener('click', () => {
        removeProduct(id);
    })
    return product;
}
export { createProducts }