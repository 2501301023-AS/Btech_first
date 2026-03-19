// create a promise that generate a random no. If no greater than 60 it fulfill else rejected
let p=new Promise((res,rej)=>{
let a=Math.random()*100;
console.log(Math.floor(a));
if(a>60){
    res('fullfill');

} 
else{
    rej('rejected');
}
});
 p.then((res)=>{
        console.log(res)
    }).catch((rej)=>{
        console.log(rej);
    });