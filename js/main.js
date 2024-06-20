import { loadProducts} from './loadProducts.js'
import { saveProducts} from './saveProducts.js'

const form = document.querySelector("[data-form]")
form.addEventListener('submit', evento => saveProducts(evento))


loadProducts();
