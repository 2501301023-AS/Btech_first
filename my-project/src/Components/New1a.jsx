import React from 'react'
import { useState,useEffect } from 'react';

const New1a = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const a = await fetch("https://dummyjson.com/posts");
            const b = await a.json();
            console.log(b.posts);
            setData(b.posts);
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
            <div>{data.map((each) => (
                <div>

                    <h1>{each.title}</h1>


                </div>
            ))}</div>
        </div>
    )
}

export default New1a
