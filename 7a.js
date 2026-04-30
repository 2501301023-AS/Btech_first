
let users = [];

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await res.json();
    displayData(users);
}


function displayData(data) {
    const container = document.getElementById('data');
    container.innerHTML = '';

    data.forEach(user => {
        container.innerHTML += `
          <div class="card">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
        `;
    });
}


document.getElementById('search').addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    displayData(filtered);
});
fetchData();