// quais ações meu carrinho pode fazer

// CASOS DE USO

// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log(`\nShopee Cart total is:`);
    const result = (userCart.reduce((total, item) => total + item.subtotal(), 0));
    console.log(result);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, item) {

    // 1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // 2. caso não encontre o item
    if(indexFound === -1) {
        console.log("item não encontrado");
        return;
    }

    // 3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // 4. caso item === 1 deletar o item
    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// -> mostra o carrinho
async function displayCart(userCart, filter) {
    // -> mostra todos os itens do carrinho, sem filtro
    if(filter === undefined || filter === "all") {
        console.log(`\nShopee cart list:`);
        userCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra todos os itens do carrinho, com o filtro de maior até o menor preço
    if(filter === "maior preço") {
        console.log(`\nShopee cart list filter "maior preço":`);
        userCart.sort((a, b) => b.price - a.price);
        userCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra todos os itens do carrinho, com o filtro de menor até o maior preço
    if(filter === "menor preço") {
        console.log(`\nShopee cart list filter "menor preço":`);
        userCart.sort((a, b) => a.price - b.price);
        userCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra os itens do carrinho com filtro o filtro "brinquedo"
    if(filter === "brinquedo") {
        console.log(`\nShopee cart list filter "brinquedo":`);
        const filterCart = userCart.filter(f => f.type === filter)
        filterCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra os itens do carrinho com filtro o filtro "roupa"
    if(filter === "roupa") {
        console.log(`\nShopee cart list filter "roupa":`);
        const filterCart = userCart.filter(f => f.type === filter)
        filterCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra os itens do carrinho com filtro o filtro "livro"
    if(filter === "livro") {
        console.log(`\nShopee cart list filter "livro":`);
        const filterCart = userCart.filter(f => f.type === filter)
        filterCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }

    // -> mostra os itens do carrinho com filtro o filtro "música"
    if(filter === "música") {
        console.log(`\nShopee cart list filter "música":`);
        const filterCart = userCart.filter(f => f.type === filter)
        filterCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }
    
    // -> mostra os itens do carrinho com filtro o filtro "eletrônico"
    if(filter === "eletrônico") {
        console.log(`\nShopee cart list filter "eletrônico":`);
        const filterCart = userCart.filter(f => f.type === filter)
        filterCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);      
        });
    }
}

// exporta as funções
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}