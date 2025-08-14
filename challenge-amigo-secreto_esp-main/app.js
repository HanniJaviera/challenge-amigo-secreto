// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    listaAmigos.push(nombre);
    mostrarAmigos();
    amigoInput.value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultadoDiv = document.getElementById('resultado');


    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = listaAmigos[indiceAleatorio];

    resultadoDiv.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
}


