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
  ingridientsList.innerHTML = ingridients
    .map((ingridient, index) => {
      return `<ul>${ingridient.text}</ul>`;
    })
    .join("");
}

addItemsForm.addEventListener("submit", addItem);

let ab = [1, 2, 3];
let result = ab.map((e) => e * 3);
console.log(ab);
console.log(result);
console.log(ab);
