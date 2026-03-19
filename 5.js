//promise
let p=new Promise((res,rej)=>{
    // promise created
    let flag=true;
    if(flag){
        res('Promise fulfill');
    }
    else{
rej('Promise rejected');
    }
    });
    //it is use for consumtion
    p.then((res)=>{
        console.log(res)
    }).catch((rej)=>{
        console.log(rej);
    });