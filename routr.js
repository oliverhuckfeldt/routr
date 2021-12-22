class Routr {
    constructor() {
        window.addEventListener('hashchange', () => {
            console.log('New Route: ', window.location.hash)
        });
    }
}
