const form = document.getElementById('form-contato')
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('contato-nome');
    const inputTelefoneContato = document.getElementById('contato-telefone');

    if (telefone.includes(inputTelefoneContato.value)) {
        alert(`O telefone ${inputTelefoneContato.value} já foi inserida`);
    } else {
        adiciona();
    }

    function adiciona(){
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}