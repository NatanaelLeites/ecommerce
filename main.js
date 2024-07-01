const productContainer = document.getElementById('product-container')

document.addEventListener('DOMContentLoaded', function(){
    const products = [
        { id: 1, name: 'Produto 1', quantity: 1 },
        { id: 2, name: 'Produto 2', quantity: 1 },
        { id: 3, name: 'Produto 3', quantity: 1 },
        { id: 4, name: 'Produto 4', quantity: 1 },
        { id: 5, name: 'Produto 5', quantity: 1 },
        { id: 6, name: 'Produto 6', quantity: 1 },
        { id: 7, name: 'Produto 7', quantity: 1 },
        { id: 8, name: 'Produto 8', quantity: 1 },
        { id: 9, name: 'Produto 9', quantity: 1 },
        { id: 10, name: 'Produto 10', quantity: 1 },
        { id: 11, name: 'Produto 11', quantity: 1 },
      ]

      products.sort(() => Math.random() - 0.5) //Embaralhar os produtos

      const showProducts = products.slice(0, 9) //Exibir só os 9

      for(let i = 0; i < 3; i++) {
        const row = document.createElement('div')
        row.className = 'row'

        for(let j = 0; j < 3; j++){
            const col = document.createElement('div')
            col.className = 'col'
            const product = showProducts[i * 3 + j]
            const html = `
            <h2>${product.name}</h2>
            <p>Quantidade: <input type="number" value="${product.quantity}" min="1" max="10" /></p>
            <button class="add-to-cart">Carrinho</button>
            `
            col.innerHTML = html
            row.appendChild(col)

            const addButton = col.querySelector('.add-to-cart')
            addButton.addEventListener('click', () => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]')
                localStorage.setItem('cart', JSON.stringify(cart))
                alert(`${product.name} adicionado ao carrinho!`)
            })
        }

        productContainer.appendChild(row)
      }
    })
