# 🛒 Carrinho de Compras da Shopee com Node.js

> Projeto desenvolvido no desafio de projeto da formação **Node.js Fundamentals** promovida pela [DIO](https://www.dio.me/)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/Licença-ISC-blue?style=for-the-badge)



## 🧾 Descrição

Este projeto simula um sistema de carrinho de compras inspirado na Shopee, com funcionalidades para adicionar, remover e listar produtos, além de calcular o valor total. O sistema é modularizado, com separação das responsabilidades por arquivos e usa `ESModules` (com `type: module` no `package.json`).



## 🚀 Funcionalidades

- ✅ Adicionar produtos ao carrinho  
- ✅ Remover um item ou deletar o produto  
- ✅ Calcular o valor total do carrinho  
- ✅ Filtrar produtos por categoria (`brinquedo`, `roupa`, `livro`, `música`, `eletrônico`)  
- ✅ Ordenar itens por **maior** ou **menor preço**  
- ✅ Subtotais por produto



## 📦 Estrutura do Projeto

```

📁 carrinho-de-compras-da-shopee-com-node/
┣ 📂 src/
┃ ┣ 📄 index.js          # Script principal
┃ ┣ 📂 services/
┃ ┃ ┣ 📄 cart.js         # Lógica de manipulação do carrinho
┃ ┃ ┗ 📄 item.js         # Lógica de criação de itens
┣ 📄 package.json

````



## 💡 Exemplo de Saída

```text
Welcome to the your Shopee Cart

Shopee cart list filter "menor preço":
1. hotwheels audi - R$ 18.99 | 3x | Subtotal = 56.97
2. hotwheels nissan - R$ 19.99 | 2x | Subtotal = 39.98
3. hotwheels ferrari - R$ 24.99 | 3x | Subtotal = 74.97
...
Shopee Cart total is:
1392.17
````



## 📘 Tecnologias utilizadas

* **Node.js** (JavaScript backend)
* **ESModules** (`import/export`)
* Visual Studio Code 



## 📜 Licença

Este projeto está licenciado sob a licença ISC.



## 👨‍🔧 Autor

Desenvolvido com 💻 por JVRFurtado durante o desafio da [DIO](https://www.dio.me/).



> 🛍️ Explore, refatore e divirta-se criando seu próprio marketplace com Node.js!
