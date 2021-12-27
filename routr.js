class Routr {

    #routes = [];

    constructor() {
        window.addEventListener('popstate', (event) => {
            if (!event.state)
                return;

            for (const i in this.#routes) {
                if (this.#routes[i].route === event.state.route) {
                    this.#routes[i].callback.call();
                }
            }
        });
    }

    register(route, callback) {
        this.#routes.push({route, callback});
    }

    navTo (route) {
        for (const i in this.#routes) {
            if (this.#routes[i].route === route) {
                this.#routes[i].callback.call();
                window.history.pushState({route}, '', route)

                return;
            }
        }

        throw new Error('Route is not registered.')
    }
}
