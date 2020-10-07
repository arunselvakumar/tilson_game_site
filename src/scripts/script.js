let map = new Map();
let selectedBox;

document.addEventListener('DOMContentLoaded', () => {
  init();
});

init = () => {
  document.getElementById('items-list').style.display = 'none';
  document.getElementById('add-item-container').style.display = 'none';
};

onDropDownMenuSelected = selectedItem => {
  selectedBox = selectedItem;

  if (selectedItem) {
    document.getElementById('add-item-container').style.display = 'block';
    document.getElementById('items-list').style.display = 'block';
  } else {
    document.getElementById('add-item-container').style.display = 'none';
    document.getElementById('items-list').style.display = 'none';
  }
};

onSaveButtonClicked = () => {
  const INPUT_VALUE = document.getElementById('input1').value.split(';');
  if (!map[selectedBox]) {
    map[selectedBox] = [];
  }

  map[selectedBox] = [...map[selectedBox], ...INPUT_VALUE];

  const itemsList = document.getElementById('items-list');
  if (itemsList) {
    const itemToBeAdded = document.createElement('li', { className: 'list-group-item' });
    itemToBeAdded.className = 'list-group-item';
    const textNode = document.createTextNode('Hello World');
    itemToBeAdded.appendChild(textNode);
    itemsList.appendChild(itemToBeAdded);
  }
};
