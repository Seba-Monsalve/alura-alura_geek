import { getProducts } from './endpoints.js'
import { createProducts } from './createProducts.js'

const loadProducts = async () => {
    const listaProduct = document.querySelector("[data-product-list]");
    try {
        const products = await getProducts();
        if (products.length == 0)
            listaProduct.innerHTML = `
        <br>
        <br>
        <br>
        <h2 class="mensaje__titulo">No hay Productos aún...
            </h2>
        `;
        else
            products.forEach(element => {
                listaProduct.appendChild(createProducts(element))
            });
    } catch (error) {
        throw new Error(error)
    }


}

export { loadProducts }