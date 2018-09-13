const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
    this.selectElement = selectElement;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Munros:munro-data-loaded', (event) => {
        const allMunros = event.detail;
        this.populateDropdown(allMunros);
    });

    this.selectElement.addEventListener('change', (event) => {
        const regionSelected = event.target.value;
        PubSub.publish('SelectView:change-region', regionSelected);
    })
}

SelectView.prototype.populateDropdown = function (munroArray) {
    const regions = munroArray.map((munro) => {
        return munro.region;
    });

    const uniqueRegions = regions.filter((region, index) => {
        return (regions.indexOf(region) === index);
    })

    uniqueRegions.forEach((region) => {
        const newOption = document.createElement('option');
        newOption.textContent = region;
        this.selectElement.appendChild(newOption);
    })

}

module.exports = SelectView;