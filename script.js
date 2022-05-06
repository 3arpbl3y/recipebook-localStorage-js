const addItemsForm = document.querySelector(".add-items-form");
const itemList = document.querySelector(".items-list");
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = e.target.item.value;
  const item = {
    text: text,
    checked: false,
  };
  items.push(item);
  displayItems(items, itemList);
  this.reset();
}

function displayItems(ingridients, ingridientsList) {
  console.log(ingridients, ingridientsList);
  ingridientsList.innerHTML = ingridients.map((ingridient, index) => {
    return `<ul>${ingridient.text}</ul>`;
  });
}

addItemsForm.addEventListener("submit", addItem);
