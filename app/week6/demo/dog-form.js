"use client"

import { useState } from "react"

export default function DogFormDemo(onSubmit) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.PreventDefault();
        onSubmit(dog);
    }
    
    return (
        <div>
            <h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input className="text-black" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />             
                    <label htmlFor="age">Age</label>
                    <input className="text-black" id="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </form>
            </h2>
        </div>
    )
};