const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
    this.munros = null;
}

Munros.prototype.getData = function () {
    const request = new Request('https://munroapi.herokuapp.com/api/munros');
    request.get()
        .then((data) => {
            this.munros = data;
            // console.log(this.munros);
            PubSub.publish('Munros:munro-data-loaded', this.munros);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = Munros;