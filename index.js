// Função para formatar a matriz antes de exibi-la
function formatarMatriz(matriz) {
    let resultado = "";
    // Itera sobre as linhas da matriz
    for (let i = 0; i < matriz.length; i++) {
        resultado += "[ ";
        // Itera sobre os elementos de cada linha
        for (let j = 0; j < matriz[i].length; j++) {
            resultado += matriz[i][j];
            // Adiciona uma vírgula e espaço se não for o último elemento da linha
            if (j !== matriz[i].length - 1) {
                resultado += ", ";
            }
        }
        resultado += " ]\n"; // Adiciona uma quebra de linha após cada linha da matriz
    }
    return resultado;
}

// Função para substituir uma linha da matriz por zeros
function substituirLinhaPorZeros(matriz, numeroDaLinha) {
    // Verifica se o número da linha é válido
    if (numeroDaLinha < 0 || numeroDaLinha >= matriz.length) {
        console.error("Número da linha inválido.");
        return;
    }

    // Substitui todos os elementos da linha especificada por zeros
    for (let i = 0; i < matriz[numeroDaLinha].length; i++) {
        matriz[numeroDaLinha][i] = 0;
    }
}

// Função principal que é chamada quando o botão é clicado
function substituirLinha() {
    // Obtém a matriz da área de texto e converte para um array bidimensional
    let matrizInput = document.getElementById("matriz").value;
    let linhas = matrizInput.split(";");
    let matriz = linhas.map(linha => linha.split(",").map(Number));

    // Obtém o número da linha a ser substituída
    let numeroDaLinha = parseInt(document.getElementById("linha").value);

    // Substitui a linha por zeros
    substituirLinhaPorZeros(matriz, numeroDaLinha);

    // Atualiza o conteúdo do elemento resultado com a matriz formatada
    document.getElementById("resultado").textContent = formatarMatriz(matriz);
}
