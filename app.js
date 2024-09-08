// Função para realizar a pesquisa
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // Usando trim() para remover espaços em branco

    // Converte o valor da pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let encontrado = false;

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let marca = dado.marca.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let motor = dado.motor.toLowerCase();
        let preco = dado.preco.toLowerCase();
        let cor = dado.cor.toLowerCase();
        let ano = dado.ano.toLowerCase();
        let cambio = dado.cambio.toLowerCase();
        let potencia = dado.potencia.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o item deve ser exibido com base na pesquisa
        let deveExibir = titulo.includes(campoPesquisa) || marca.includes(campoPesquisa) || descricao.includes(campoPesquisa) || motor.includes(campoPesquisa) || preco.includes(campoPesquisa) || cor.includes(campoPesquisa) || ano.includes(campoPesquisa) || cambio.includes(campoPesquisa) || potencia.includes(campoPesquisa) || tags.includes(campoPesquisa);

        if (deveExibir) {
            encontrado = true;

            // Verifica se dado.imagens é um array antes de usar map
            let imagensGaleria = Array.isArray(dado.imagens) ? dado.imagens.map(img => `<img src="${img}" alt="${dado.titulo} - Imagem">`).join('') : '';
            resultados += `
                <div class="item-resultado ${deveExibir ? 'destacar' : ''}">
                    <h2>${dado.titulo}</h2>
                    <p><strong>Marca:</strong> ${dado.marca}</p>
                    <p><strong>Descrição:</strong> ${dado.descricao}</p>
                    <p><strong>Motor:</strong> ${dado.motor}</p>
                    <p><strong>Preço:</strong> ${dado.preco}</p>
                    <p><strong>Cor:</strong> ${dado.cor}</p>
                    <p><strong>Ano:</strong> ${dado.ano}</p>
                    <p><strong>Câmbio:</strong> ${dado.cambio}</p>
                    <p><strong>Potência:</strong> ${dado.potencia}</p>
                    <p><strong>Tags:</strong> ${dado.tags}</p>
                    <!-- Adiciona a galeria de imagens -->
                    <div class="galeria-imagens">
                        ${imagensGaleria}
                    </div>
                </div>
            `;
        }
    }

    if (!encontrado) {
        resultados = "<p>Nada encontrado.</p>"; // Se nenhum resultado foi encontrado, exibe uma mensagem
    }

    section.innerHTML = resultados;
}
