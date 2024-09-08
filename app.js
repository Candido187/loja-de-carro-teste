// Função para exibir todos os veículos
function exibirTodosVeiculos() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
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
            </div>
        `;
    }

    section.innerHTML = resultados;
}

// Função para realizar a pesquisa
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

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

        let deveExibir = titulo.includes(campoPesquisa) || marca.includes(campoPesquisa) || descricao.includes(campoPesquisa) || motor.includes(campoPesquisa) || preco.includes(campoPesquisa) || cor.includes(campoPesquisa) || ano.includes(campoPesquisa) || cambio.includes(campoPesquisa) || potencia.includes(campoPesquisa) || tags.includes(campoPesquisa);

        if (deveExibir) {
            encontrado = true;
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
                </div>
            `;
        }
    }

    if (!encontrado) {
        resultados = "<p>Nada encontrado.</p>";
    }

    section.innerHTML = resultados;
}

// Exibe todos os veículos ao carregar a página
window.onload = exibirTodosVeiculos;
