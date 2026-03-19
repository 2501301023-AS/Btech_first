// create a promise that resolve if no is even and reject when is odd
let p=new Promise((even,odd)=>{
let int=6;
if(int%2==0){
    even('even number');

}
else{
    odd('odd number');
}
});
 p.then((even)=>{
        console.log(even)
    }).catch((odd)=>{
        console.log(odd);
    });