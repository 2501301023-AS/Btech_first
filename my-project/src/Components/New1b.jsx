import React from 'react'
import { useState, useEffect } from 'react'
const Useeffect = () => {
    const [count, setcount] = useState([]);
    const getdata = async () => {
        try {
            const a = await fetch("https://dummyjson.com/recipes");
            const b = await a.json();
            console.log(b);
            setcount(b.recipes);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata();
    }, []);
    return (
        <div>
            {
                count.map((each) => (
                    <div key={each.id}>
                        <h5>{each.name}</h5>
                        <img style={{ width: '200px', height: '200px', }} src={each.image} alt={each.name} />
                        <ol>{each.instructions.map((each)=>
                         <li key={each}>{each}</li>
                        )}</ol>
                        <ul>{each.ingredients.map((each)=>(
                            <li key={each}>{each}</li>
                        ))}
                            </ul>
                            </div>

                   
                ))
            }
        </div>
    )
}

export default Useeffect
