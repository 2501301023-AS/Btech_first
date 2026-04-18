let a = document.querySelector("div");
const fetchData = async () => {
    try {
        const a = await fetch("https://dummyjson.com/products");
        const b = await a.json();
        console.log(b.products);
        displayData(b.products)
    } catch (error) {
        console.log(error);
    }
}
const displayData = (data) => {
    const products = data.map((each) => {
        return `
<div>
<h1>${each.title}</h1>
<p>${each.description}</p>
</div>`
    })
    a.innerHTML = products
}
fetchData();4