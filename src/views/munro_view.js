const MunroView = function (container, munro) {
    this.container = container;
    this.munro = munro;
};

MunroView.prototype.render = function () {
    // console.log("hello");
    const munroContainer = document.createElement('div');
    munroContainer.className = 'munro-container';
    this.container.appendChild(munroContainer);

    const munroName = document.createElement('h2');
    munroName.textContent = this.munro.name;
    munroContainer.appendChild(munroName);

    const munroDetailList = document.createElement('ul');
    const munroMeaning = document.createElement('li');
    const munroHeight = document.createElement('li');
    const munroRegion = document.createElement('li');
    munroMeaning.textContent = this.munro.meaning;
    munroHeight.textContent = this.munro.height;
    munroRegion.textContent = this.munro.region;
    munroDetailList.appendChild(munroMeaning);
    munroDetailList.appendChild(munroHeight);
    munroDetailList.appendChild(munroRegion);
    munroContainer.appendChild(munroDetailList);

}

module.exports = MunroView;

