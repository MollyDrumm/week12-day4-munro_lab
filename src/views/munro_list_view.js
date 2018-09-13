const MunroView = require('./munro_view.js');
const PubSub = require('../helpers/pub_sub.js');

const MunroListView = function (container) {
    this.container = container;
    this.munros = null;
    this.filteredMunros = null;
}

MunroListView.prototype.bindEvents = function () {
    PubSub.subscribe('Munros:munro-data-loaded', (event) => {
        this.munros = event.detail;
        this.render(this.munros);
    });

    PubSub.subscribe('SelectView:change-region', (event) => {
        const regionSelected = event.detail;
        const filteredMunros = this.munros.filter((munro) => {
            return munro.region === regionSelected;
        })
        this.filteredMunros = filteredMunros;
        this.container.innerHTML = '';
        this.render(filteredMunros);
    })
}

MunroListView.prototype.render = function (munros) {

    munros.forEach((munro) => {
        const munroView = new MunroView(this.container, munro);
        munroView.render();
    })
}

module.exports = MunroListView;