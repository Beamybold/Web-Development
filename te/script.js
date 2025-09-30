const addForm = document.getElementById('addForm');
const menuTableBody = document.querySelector('#menuTable tbody');

let menuItems = [];

function renderTable() {
  menuTableBody.innerHTML = '';
  menuItems.forEach((item, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>₦${item.price}</td>
      <td>${item.description}</td>
      <td>
        <input type="number" value="${item.price}" onchange="updatePrice(${index}, this.value)" />
      </td>
      <td>
        <button onclick="removeItem(${index})">Remove</button>
      </td>
    `;

    menuTableBody.appendChild(row);
  });
}

function updatePrice(index, newPrice) {
  menuItems[index].price = parseFloat(newPrice);
  renderTable();
}

function removeItem(index) {
  if (confirm(`Are you sure you want to remove "${menuItems[index].name}"?`)) {
    menuItems.splice(index, 1);
    renderTable();
  }
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const price = parseFloat(document.getElementById('price').value);
  const description = document.getElementById('description').value.trim();

  if (name && !isNaN(price) && description) {
    menuItems.push({ name, price, description });
    addForm.reset();
    renderTable();
  }
});
