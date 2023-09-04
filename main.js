const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./aprovado.png" alt="Emoji Festejando"/>'
const imgReprovado = '<img src="./reprovado.png" alt="Emoji decepcionado"/>'
const atividades = []
const notas = []
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const NotaMinima = parseFloat(prompt("Digite a nota minima"));
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= NotaMinima ?imgAprovado : imgReprovado}</td>`
        linha += '</tr>';
        linhas += linha;
        
    }
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const MediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = MediaFinal
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado ;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;;

}