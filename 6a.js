const getData=async()=>{
  
    try{
          const res=await fetch("https://dummyjson.com/recipes");
          const result=await res.json();
          console.log(result)
;
    }catch(error){
console.log(error);
    }
}
getData();