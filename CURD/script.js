let items = [];

// Fetch all items from the backend when the page loads
function fetchItems() {
    fetch('http://localhost:4000/items')
        .then(response => response.json())
        .then(data => {
            items = data;
            renderTable();
        })
        .catch(error => console.error('Error fetching items:', error));
}

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button onclick="editItem(${item.id})">Edit</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function createItem() {
    const newItemName = document.getElementById('newItemName').value;
    if (newItemName) {
        const newItem = { name: newItemName };

        fetch('http://localhost:4000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(data => {
            items.push(data);  // Assuming the response contains the new item with an id
            document.getElementById('newItemName').value = '';
            renderTable();
        })
        .catch(error => console.error('Error adding item:', error));
    }
}

function editItem(id) {
    const itemName = prompt("Enter new name:");
    if (itemName) {
        fetch(`http://localhost:4000/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: itemName })
        })
        .then(response => response.json())
        .then(data => {
            const item = items.find(item => item.id === id);
            if (item) {
                item.name = itemName;
                renderTable();
            }
        })
        .catch(error => console.error('Error updating item:', error));
    }
}

function deleteItem(id) {
    fetch(`http://localhost:4000/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        items = items.filter(item => item.id !== id);
        renderTable();
    })
    .catch(error => console.error('Error deleting item:', error));
}

document.addEventListener('DOMContentLoaded', fetchItems);
