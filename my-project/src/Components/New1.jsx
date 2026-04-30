import React from 'react'
import { useState, useEffect } from 'react'

const New1 = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const a = await fetch("https://dummyjson.com/products");
            const b = await a.json();
            console.log(b.products);
            setData(b.products);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>hello</h1>
            <div>{data.map((each)=>(
                <div>
                    <img height="200" src={each.images[0]} alt="" />
                  <h1>{each.title}</h1>
                  <p>{each.description}</p>

                </div>
            ))}</div>
        </div>
    )
}

export default New1
