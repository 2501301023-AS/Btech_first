let p=new Promise((res,rej)=>{
    // it is api to use fetch function to fetch data from server
// fetch("https://dummyjson.com/posts")
fetch("https://dummyjson.com/recipes")
// this line is use to convert data into json to data
.then((res)=>res.json())
.then((data)=>res(data))
.catch((err)=>rej(err));
});
p.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})