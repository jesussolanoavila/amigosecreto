// El principal objetivo de este desafío es// Declaramos una variable para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    document.getElementById('amigo').value = "";

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡Tu amigo secreto es: ${amigoSorteado}!</li>`;
}