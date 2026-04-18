let p = document.getElementById("hello");
console.log(p);
let body = document.querySelector('body');

p.addEventListener('click', () => {
    p.style.color = 'Red';
    p.style.fontsize = "25px";

    body.style.backgroundColor = "green";
    body.style.height = "80vh"
});
