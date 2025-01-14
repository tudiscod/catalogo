const products = {
    dourado: [
        { id: 1, category: 'nomes', img: 'https://i.imgur.com/2xyIKoJ.jpeg', name: 'Colar Nome Simples Laser c/ Ponto de Luz com corrente Veneziana com Bolinha', price: 129.9 },
        { id: 2, category: 'nomes', img: 'https://i.imgur.com/vKoZpq7.jpeg', name: 'Colar Nome Simples', price: 99.9 },
        { id: 3, category: 'nomes', img: 'https://i.imgur.com/nq37kAr.jpeg', name: 'Colar Nome Duplo', price: 149.9 },
        { id: 4, category: 'nomes', img: 'https://i.imgur.com/gy74O3A.jpeg', name: 'Colar Nome Simples Laser', price: 99.9 },
        { id: 5, category: 'nomes', img: 'https://i.imgur.com/uI16Z19.jpeg', name: 'Colar Nome Simples Laser c/ Ponto de Luz', price: 139.9 },
        { id: 6, category: 'nomes', img: 'https://i.imgur.com/Gf303Nz.jpeg', name: 'Colar Nome Simples com Adereço Fixo aplicação de ródio', price: 149.9 },
        { id: 7, category: 'profissao', img: 'https://i.imgur.com/ZWVW7jG.jpeg', name: 'Colar Nome Simples com Adereço Fixo Profissão', price: 129.9 },
        { id: 8, category: 'nomes', img: 'https://i.imgur.com/WfG56Ni.jpeg', name: 'Colar Nome Simples com Adereço Fixo de Pet', price: 139.9 },
        { id: 9, category: 'nomes', img: 'https://i.imgur.com/l6urRpo.jpeg', name: 'Colar Nome Simples com Dois Adereço Fixo de Pet', price: 149.9 },
        { id: 10, category: 'nomes', img: 'https://i.imgur.com/1ZONk5x.png', name: 'Colar Nome Simples Laser com Coração Separado', price: 189.9 },
        { id: 11, category: 'nomes', img: 'https://i.imgur.com/khjCdvI.jpeg', name: 'Colar Nome Duplo com Coração Cravejado', price: 179.9 },
        { id: 12, category: 'filhos', img: 'https://i.imgur.com/kvum0gM.jpeg', name: 'Colar Nome Triplo com Dois Acessórios', price: 199.9 },
        { id: 13, category: 'filhos', img: 'https://i.imgur.com/59mBtm7.jpeg', name: 'Colar Nome Duplo com Dois Acessórios Pendurados', price: 189.9 },
        { id: 14, category: 'filhos', img: 'https://i.imgur.com/r1ONTXh.jpeg', name: 'Colar Nome Duplo com Dois Acessórios Fixos', price: 189.9 },
        { id: 15, category: 'nomes', img: 'https://i.imgur.com/Miahf0J.png', name: 'Colar Nome Simples com Borboletas em Ródio', price: 189.9 },
        { id: 16, category: 'profissao', img: 'https://i.imgur.com/9GxESia.jpeg', name: 'Colar Mandala Profissão em Zircônia', price: 189.9 },
        { id: 17, category: 'profissao', img: 'https://i.imgur.com/YOTs4JT.jpeg', name: 'Colar Mandala Coração Vazado Profissão Por Amor', price: 149.9 },
        { id: 18, category: 'profissao', img: 'https://i.imgur.com/4dzfofk.jpeg', name: 'Colar Mandala Simples Profissão Laser', price: 179.9 },
        { id: 19, category: 'filhos', img: 'https://i.imgur.com/B0C3Cro.jpeg', name: 'Colar Canga Simples Gravação', price: 149.9 },
        { id: 20, category: 'infantil', img: 'https://i.imgur.com/w38AJ5m.jpeg', name: 'Pulseira Infantil c/ Personagem', price: 89.9 },
        { id: 21, category: 'infantil', img: 'https://i.imgur.com/ZGsVnVO.jpeg', name: 'Pulseira Infantil c/ Personagem', price: 89.9 },
        { id: 22, category: 'infantil', img: 'https://i.imgur.com/lBuMFTv.jpeg', name: 'Pulseira Infantil na Corrente de Bolinha', price: 89.9 },
        { id: 23, category: 'infantil', img: 'https://i.imgur.com/5f1d8Yd.jpeg', name: 'Pulseira Infantil Laser', price: 99.9 },
        { id: 24, category: 'infantil', img: 'https://i.imgur.com/lGAHJRh.jpeg', name: 'Pulseira Infantil com Acessório', price: 99.9 },
        { id: 25, category: 'infantil', img: 'https://i.imgur.com/LgNPhwx.png', name: 'Colar Infantil c/ Nome na Plaquinha e Personagem na Cartier ou Elo', price: 149.9 },
        { id: 26, category: 'infantil', img: 'https://i.imgur.com/9WpvE8x.jpeg', name: 'Colar Infantil c/ Nome e Personagem na Cartier ou Elo', price: 149.9 },
        { id: 27, category: 'infantil', img: 'https://i.imgur.com/OiBcaCU.jpeg', name: 'Kit Infantil Borboleta', price: 179.9 },
        { id: 28, category: 'infantil', img: 'https://i.imgur.com/CpzGFTq.jpeg', name: 'Kit Infantil Abelha', price: 179.9 },
        { id: 29, category: 'infantil', img: 'https://i.imgur.com/w0b9riu.jpeg', name: 'Kit Infantil Fada', price: 179.9 },
        { id: 30, category: 'braceletes', img: 'https://i.imgur.com/zmaDrfs.jpeg', name: 'Bracelete Coração com Ponto de Luz para Gravar', price: 179.9 },
        { id: 31, category: 'braceletes', img: 'https://i.imgur.com/TuGrOQT.jpeg', name: 'Bracelete Nó com Pingentes', price: 149.9 },
    ],
    prata: [
        { id: 4, category: 'nomes', img: 'https://imgur.com/2A6tkN5.jpeg', name: 'Nome Simples, Corrente veneziana 45cm', price: 999 },
		{ id: 5, category: 'nomes', img: 'https://imgur.com/e0WL5bi.jpeg', name: 'Personalizado com 3 letras, Corrente veneziana', price: 999 },
		{ id: 6, category: 'nomes', img: 'https://imgur.com/xaeyoIR.jpeg', name: 'Nome simples, corrente de elo portugues 45CM', price: 999 },
		{ id: 7, category: 'nomes', img: 'https://imgur.com/Wdf97QH.jpeg', name: 'Nome Composto, corrente de elo portugues', price: 999 },
		
		
		
    ],
};

/**
 * Exibe os produtos do tipo selecionado (Dourado ou Prata)
 */
function selectType(type) {
    document.getElementById('initial-screen').classList.add('hidden');
    document.getElementById('products-screen').classList.remove('hidden');
    document.getElementById('selected-type-title').innerText = type === 'dourado' ? 'Produtos Dourados' : 'Produtos Prata';
    loadProducts(type);
}

/**
 * Carrega os produtos do tipo selecionado dinamicamente
 */
function loadProducts(type) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    container.classList.remove('hidden');
    document.getElementById('categories').classList.remove('hidden');

    products[type].forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product', product.category);
        productEl.innerHTML = `
            <img src="${product.img}" alt="${product.name}" onclick="showPopup('${product.img}')">
            <h2>${product.name}</h2>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
        `;
        container.appendChild(productEl);
    });
}

/**
 * Exibe o pop-up com a imagem ampliada
 */
function showPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImage = popup.querySelector('img');
    popupImage.src = imageSrc;
    popup.classList.remove('hidden');
    popup.style.display = 'flex';
}

/**
 * Fecha o pop-up
 */
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    popup.classList.add('hidden');
}

/**
 * Retorna para a tela inicial
 */
function goHome() {
    document.getElementById('products-screen').classList.add('hidden');
    document.getElementById('initial-screen').classList.remove('hidden');
}

/**
 * Filtra os produtos com base na categoria selecionada
 */
function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = product.classList.contains(category) ? 'block' : 'none';
    });
}
