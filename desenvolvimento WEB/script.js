function calcularMedia() {
    const nome = document.getElementById('nome').value.trim();
    const strNota1 = document.getElementById('nota1').value;
    const strNota2 = document.getElementById('nota2').value;
    const strNota3 = document.getElementById('nota3').value;
    
    const divErro = document.getElementById('erro-msg');
    const containerResultado = document.getElementById('resultado-container');

    divErro.textContent = '';
    containerResultado.classList.add('escondido');

    if (nome === '') {
        divErro.textContent = 'Erro: Por favor, informe o nome do estudante.';
        return;
    }

    if (strNota1 === '' || strNota2 === '' || strNota3 === '') {
        divErro.textContent = 'Erro: Todos os campos de notas devem ser preenchidos.';
        return;
    }

    const nota1 = parseFloat(strNota1);
    const nota2 = parseFloat(strNota2);
    const nota3 = parseFloat(strNota3);

    if (isNaN(nota1) || nota1 < 0 || nota1 > 10 ||
        isNaN(nota2) || nota2 < 0 || nota2 > 10 ||
        isNaN(nota3) || nota3 < 0 || nota3 > 10) {
        divErro.textContent = 'Erro: As notas devem ser valores numéricos válidos entre 0,0 e 10,0.';
        return;
    }
    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = '';
    let classeCss = '';

    if (media >= 7.0) {
        situacao = 'Aprovado(a)';
        classeCss = 'aprovado';
    } else if (media >= 5.0 && media < 7.0) {
        situacao = 'Recuperação';
        classeCss = 'recuperacao';
    } else {
        situacao = 'Reprovado(a)';
        classeCss = 'reprovado';
    }

    document.getElementById('txt-nome').textContent = `Estudante: ${nome}`;
    document.getElementById('txt-media').textContent = `Média Final: ${media.toFixed(2)}`;
    
    const txtSituacao = document.getElementById('txt-situacao');
    txtSituacao.innerHTML = `Situação: <span class="${classeCss}">${situacao}</span>`;

    containerResultado.classList.remove('escondido');
}

function reiniciarSistema() {
    document.getElementById('nome').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    
    document.getElementById('resultado-container').classList.add('escondido');
    document.getElementById('erro-msg').textContent = '';
}