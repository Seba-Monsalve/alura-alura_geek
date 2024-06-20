
async function addProduct({ name, price, img_path }) {
    const request = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name
            , price
            , img_path
        })
    });
    if (!request.ok)
        throw new Error('No fue posible agregar el producto');
    return await request.json();
}

const removeProduct = async (id) => {
    const request = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })

    if (!request.ok)
        throw new Error('No fue posible eliminar el producto');
    return await request.json();
}

const getProducts = async () => {
    const request = await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    if (!request.ok) {
        throw new Error('No fue posible listar la lista de productos');
    }
    return await request.json();
}

export { addProduct, removeProduct, getProducts }