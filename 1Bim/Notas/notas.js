//calcular as médias dos alunos e mostrar se eles foram aprovados ou reprovados
const ra = document.getElementById('ra');
const nome = document.getElementById('nome');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const atividades = document.getElementById('atividades');
const resultSection = document.getElementById('result-section');
const alunoP = document.getElementById('aluno');
const raP = document.getElementById('ra-display');
const mediaP = document.getElementById('media-value');
const conceitoP = document.getElementById('conceito');
const situacaoP = document.getElementById('situacao');
const notas = document.getElementById('notas');
const atividadesDisplay = document.getElementById('atividades-display');
const errorP = document.getElementById('error');

// Adicionar validação em tempo real para impedir valores negativos
nota1.addEventListener('input', () => { if (parseFloat(nota1.value) < 0 || parseFloat(nota1.value) > 10) nota1.value = Math.max(0, Math.min(10, parseFloat(nota1.value) || 0)); });
nota2.addEventListener('input', () => { if (parseFloat(nota2.value) < 0 || parseFloat(nota2.value) > 10) nota2.value = Math.max(0, Math.min(10, parseFloat(nota2.value) || 0)); });
nota3.addEventListener('input', () => { if (parseFloat(nota3.value) < 0 || parseFloat(nota3.value) > 10) nota3.value = Math.max(0, Math.min(10, parseFloat(nota3.value) || 0)); });
nota4.addEventListener('input', () => { if (parseFloat(nota4.value) < 0 || parseFloat(nota4.value) > 10) nota4.value = Math.max(0, Math.min(10, parseFloat(nota4.value) || 0)); });
atividades.addEventListener('input', () => { if (parseFloat(atividades.value) < 0 || parseFloat(atividades.value) > 10) atividades.value = Math.max(0, Math.min(10, parseFloat(atividades.value) || 0)); });

// Preencher com 0 se o campo ficar vazio ao sair
nota1.addEventListener('blur', () => { if (nota1.value === '') nota1.value = '0'; });
nota2.addEventListener('blur', () => { if (nota2.value === '') nota2.value = '0'; });
nota3.addEventListener('blur', () => { if (nota3.value === '') nota3.value = '0'; });
nota4.addEventListener('blur', () => { if (nota4.value === '') nota4.value = '0'; });
atividades.addEventListener('blur', () => { if (atividades.value === '') atividades.value = '0'; });

// Função para calcular a média e determinar o conceito e situação do aluno
function calcularMedia() {
    const media = ((parseFloat(nota1.value) + parseFloat(nota2.value) * 2 + parseFloat(nota3.value) * 3 + parseFloat(nota4.value) * 4 + parseFloat(atividades.value)) / 11);

    const mediaFormatada = media.toFixed(2);

    resultSection.classList.remove('hidden');
    alunoP.innerHTML = `Aluno: <strong>${nome.value}</strong>`;
    raP.innerHTML = `R.A: <strong>${ra.value}</strong>`;
    mediaP.innerHTML = `Média: <strong>${mediaFormatada}</strong>`;
    notas.innerHTML = `Notas: <strong>${nota1.value}, ${nota2.value}, ${nota3.value}, ${nota4.value}</strong>`;
    atividadesDisplay.innerHTML = `Atividades: <strong>${atividades.value}</strong>`;


    if (media > 9.0) {
        conceitoP.innerHTML = `Conceito: <strong>A</strong>`;
        situacaoP.innerHTML = `Situação: <strong>Aprovado com louvor!</strong>`;
    }
    else if (media >= 7.5 && media <= 9.0) {
        conceitoP.innerHTML = `Conceito: <strong>B</strong>`;
        situacaoP.innerHTML = `Situação: <strong>Aprovado!</strong>`;
    }
    else if (media >= 6.0 && media <= 7.5) {
        conceitoP.innerHTML = `Conceito: <strong>C</strong>`;
        situacaoP.innerHTML = `Situação: <strong>Aprovado mas pode melhorar!</strong>`;
    }
    else if (media >= 4.0 && media <= 6.0) {
        conceitoP.innerHTML = `Conceito: <strong>D</strong>`;
        situacaoP.innerHTML = `Situação: <strong>Reprovado, faltou pouco!</strong>`;
    }
    else {
        conceitoP.innerHTML = `Conceito: <strong>E</strong>`;
        situacaoP.innerHTML = `Situação: <strong>Reprovado!</strong>`;
    }
    // Limpa os campos após o cálculo
    ra.value = '';
    nome.value = '';
    nota1.value = '';
    nota2.value = '';
    nota3.value = '';
    nota4.value = '';
    atividades.value = '';
}

