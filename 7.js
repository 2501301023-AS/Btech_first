let a = document.getElementById("plus")
let b = document.getElementById("minus");
let h1 = document.querySelector("h1");

let size = 30;


a.addEventListener("click", () => {
    size += 5
    h1.style.fontSize = size + "px"
})
b.addEventListener("click", () => {
    size -= 5
    h1.style.fontSize = size + "px"

})