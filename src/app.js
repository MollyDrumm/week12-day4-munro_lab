const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const munros = new Munros();
  munros.getData();

  const regionSelectDropdown = document.querySelector('#region-selector');
  const selectView = new SelectView(regionSelectDropdown);
  selectView.bindEvents();

  const munroListContainer = document.querySelector('#munro-list-container');
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

})
