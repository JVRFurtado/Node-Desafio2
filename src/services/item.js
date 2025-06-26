//CASOS DE USO DOS ITEMS

// -> criar item com subtotal certo
async function createItem(name, price, quantity, type) {
    return {
        name,
        price,
        quantity,
        type,
        subtotal: () => price * quantity,
    }
}

// exporta função
export default createItem