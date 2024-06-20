import { addProduct } from "./endpoints.js";

const saveProducts = async (evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const img_path = document.querySelector("[data-image]")?.value || './assets/default.png'
    try {
        addProduct({ name, price, img_path });
    } catch (error) {
        alert(error)
    }
}

export { saveProducts }