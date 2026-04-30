//promise is a object which is used to handle asynchronous operation in javascript and it is used to handle the result 
// of an asynchronous operation and it can be in one of three states:-pending,fulfilled,rejected.
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