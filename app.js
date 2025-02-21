// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim().toLowerCase();  // Converte o nome para minúsculas

    // Verificar se o nome não está vazio e não está repetido (agora ignorando maiúsculas/minúsculas)
    if (nome && !amigos.some(amigo => amigo.toLowerCase() === nome)) {  // Verifica no array de amigos se já existe o nome
        amigos.push(inputAmigo.value.trim());  // Adiciona o nome original (sem alterar o caso)
        // Atualiza a lista na interface
        atualizarListaAmigos();

        // Limpa o campo de entrada
        inputAmigo.value = '';
    } else {
        alert('Por favor, digite um nome válido ou não repita o nome!');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    // Embaralha a lista de amigos para o sorteio
    let amigosSorteados = [...amigos];
    let sorteio = [];

    // Para garantir que ninguém sorteie a si mesmo
    for (let i = 0; i < amigos.length; i++) {
        let sorteado;

        // Garante que o amigo não sorteie a si mesmo
        do {
            sorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (sorteado === amigos[i] || sorteio.includes(sorteado));  // Verifica se já foi sorteado ou se é o próprio nome

        sorteio.push(sorteado);  // Adiciona o sorteio para esse amigo
    }

    // Cria a lista de sorteios e exibe
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpa resultados anteriores

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${sorteio[index]}`;
        resultado.appendChild(li);
    });

    // Exibe o resultado
    document.querySelector('.button-draw').disabled = true;  // Desabilita o botão após o sorteio
    alert('O sorteio foi realizado com sucesso!');
}

//git add .
//git commit -m "Atualização automática // O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema."
//git push origin master
