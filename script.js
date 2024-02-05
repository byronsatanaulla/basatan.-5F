class RouteSimulator {
    constructor() {
        this.routes = {}; // Objeto para almacenar las rutas y su estado
    }

    addRoute(routeName) {
        this.routes[routeName] = true; // true significa que la ruta está activa
    }

    connectRoute(routeName) {
        if (routeName in this.routes) {
            this.routes[routeName] = true;
            document.getElementById('routesStatus').innerHTML = `La ruta ${routeName} ha sido conectada.`;
        } else {
            document.getElementById('routesStatus').innerHTML = `La ruta ${routeName} no existe.`;
        }
    }

    disconnectRoute(routeName) {
        if (routeName in this.routes) {
            this.routes[routeName] = false;
            document.getElementById('routesStatus').innerHTML = `La ruta ${routeName} ha sido desconectada.`;
        } else {
            document.getElementById('routesStatus').innerHTML = `La ruta ${routeName} no existe.`;
        }
    }

    showRoutesStatus() {
        let status = "Estado de las rutas:<br>";
        for (let route in this.routes) {
            status += `${route}: ${this.routes[route] ? 'Conectada' : 'Desconectada'}<br>`;
        }
        document.getElementById('routesStatus').innerHTML = status;
    }
}

const simulator = new RouteSimulator();
simulator.addRoute("Route1");
simulator.addRoute("Route2");
simulator.addRoute("Route3");

function connectRoute() {
    const routeName = prompt("Ingrese el nombre de la ruta a conectar:");
    simulator.connectRoute(routeName);
}

function disconnectRoute() {
    const routeName = prompt("Ingrese el nombre de la ruta a desconectar:");
    simulator.disconnectRoute(routeName);
}

function showRoutesStatus() {
    simulator.showRoutesStatus();
}