let a = document.querySelector("select");//id se bhi kar sakta hai animal name se
let i = document.querySelector("img");



a.addEventListener("change", () => {//it is a function take two argument one is event and 2 is call back
    if (a.value === "Tiger") {
        i.src = "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlnZXJ8ZW58MHx8MHx8fDA%3D"
    }

    else if (a.value === "Lion") {
        i.src = "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    else if (a.value === "Cow") {
        i.src = "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293fGVufDB8fDB8fHww"
    }
    else {
        i.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww"
    }
})
