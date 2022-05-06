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
  this.reset();
  console.log(items);
}

addItemsForm.addEventListener("submit", addItem);
