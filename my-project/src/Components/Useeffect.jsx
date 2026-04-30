import React from 'react'
import { useState, useEffect } from 'react'
const Useeffect = () => {
    const [count, setcount] = useState([]);
    const getdata = async () => {
        try {
            const a = await fetch("https://dummyjson.com/posts");
            const b = await a.json();
            console.log(b);
            setcount(b.posts);
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
                        <h3>{each.title}</h3>
                        <p>{each.body}</p>
                        <div>{each.tags.map((each)=>(
                            <h5 key={each}>{each}</h5>
                        ))}
                            </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Useeffect
