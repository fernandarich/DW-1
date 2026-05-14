// Carrega o carrinho do LocalStorage ou cria um vazio
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(nome, preco, quantidade = 1) {
    let itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        });
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    let divCarrinho = document.getElementById("carrinho");
    let spanContador = document.getElementById("contador");
    let total = 0;
    let totalItens = 0;

    if (!divCarrinho) return; 

    divCarrinho.innerHTML = "";

    carrinho.forEach((item, index) => {
        let linha = document.createElement("p");
        
        // Criamos um HTML interno mais bonito
        linha.innerHTML = `
            <span><strong>${item.quantidade}x</strong> ${item.nome}<br>
            <small style="color: #666;">R$ ${item.preco.toFixed(2)} cada</small></span>
            <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
        `;
        
        divCarrinho.appendChild(linha);

        total += item.preco * item.quantidade;
        totalItens += item.quantidade;
    });

    if (document.getElementById("total")) {
        document.getElementById("total").innerHTML = `Total: <span style="color: #00adef;">R$ ${total.toFixed(2)}</span>`;
    }

    if (spanContador) spanContador.innerText = totalItens;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Função nova para o torcedor poder remover itens
function removerItem(index) {
    carrinho.splice(index, 1); // Tira o item da lista
    atualizarCarrinho(); // Atualiza a tela
}
// Garante que o carrinho carregue ao abrir a página
window.addEventListener('load', atualizarCarrinho);

function toggleCarrinho() {
    document.getElementById("carrinhoLateral").classList.toggle("ativo");
}

function fecharCarrinho() {
    document.getElementById("carrinhoLateral").classList.remove("ativo");
}