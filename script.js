// Definir la topología de red inicial
let networkTopology = {
    "router1": ["router2", "router3"],
    "router2": ["router1", "router3"],
    "router3": ["router1", "router2"]
};

function disconnectLink(routerA, routerB) {
    // Verificar si los routers están en la topología
    if (networkTopology[routerA] && networkTopology[routerB]) {
        // Desconectar el enlace entre routerA y routerB
        networkTopology[routerA] = networkTopology[routerA].filter(router => router !== routerB);
        networkTopology[routerB] = networkTopology[routerB].filter(router => router !== routerA);
        console.log(`Se desconectó el enlace entre ${routerA} y ${routerB}.`);

        // Simular la actualización de la topología de red
        setTimeout(() => {
            console.log("Actualización de la topología de red:");
            console.log(networkTopology);
        }, 3000); // Simula un tiempo de 3 segundos para la detección y actualización
    } else {
        console.log("Al menos uno de los routers especificados no existe en la topología de red.");
    }
}

disconnectLink("router1", "router2");
