const form = document.getElementById('form-atvd');
const imgApr = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgRpr = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atvds = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtvd = document.getElementById('nome-atvd');
    const inputNotaAtvd = document.getElementById('nota-atvd');

    if (atvds.includes(inputNomeAtvd.value)) {
        alert(`A atividade: ${inputNomeAtvd.value} ja foi inserida`);
    } else {
    atvds.push(inputNomeAtvd.value);
    notas.push(parseFloat(inputNotaAtvd.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtvd.value}</td>`;
    linha += `<td>${inputNotaAtvd.value}</td>`;
    linha += `<td>${inputNotaAtvd.value >= notaMinima ? imgApr : imgRpr }</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeAtvd.value = '';
    inputNotaAtvd.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() { 
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}