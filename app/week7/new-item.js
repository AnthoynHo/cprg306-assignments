"use client"
import { useState } from "react"

export default function NewItem({onAddItem}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (event) => {
        const item = ({
            id : Date.now(),
            name: name,
            quantity: quantity,
            category: category
        });
        event.preventDefault();
        if (name == '' || quantity < 1){
            alert('Please fill out all fields.');
        }
        else {
        console.log(item);
        {/*}
        alert('Buying' + ' ' + quantity + ' ' + name + ' ' + 'from' + ' ' + category + ' ' + 'section.'),
        */}
        onAddItem(item); //invoke addItem function using item as argument
        setName("");
        setQuantity(1);
        setCategory("Produce");
        
        
    }
    };
    
    return(
        <form className="flex justify-center">
            <div className="grid-cols-2 place-items-center">
                <div className="col-span-2 justify-center m-8 flex">
                    <label className="grow-1 p-4"> {/*label for name*/}
                        <input
                        required 
                        id = "name"
                        className="text-white p-2 bg-purple-700 border-purple-700 border-8 rounded" 
                        type="text" 
                        placeholder="Enter name of item." 
                        value={name} 
                        onChange={event => setName(event.target.value)}                
                        />
                    </label>
                </div>
                <div className="flex">
                    <label className="p-4"> {/*label for quantity*/}
                        <input
                        name = "quantity" 
                        className="text-white p-2 border-purple-700 border-8 rounded bg-purple-700" 
                        type="number"
                        min = "1"
                        max = "99"
                        value={quantity}
                        placeholder="Enter quantity."
                        flex-grow="1"  
                        onChange={event => setQuantity(event.target.value)}
                        required
                        />
                    </label>
                    <label className="p-4"> {/*label for category*/}
                        <select
                        name = "category" 
                        className="text-white p-2 bg-purple-700 border-purple-700 border-8 rounded" 
                        type="text" 
                        placeholder="Enter category."
                        flex-grow="1" 
                        onChange={event => setCategory(event.target.value)}
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                            </select>
                    </label>
                </div>
                <div className="p-5 m-8 flex justify-center">
                    <label className="p-8 rounded border-8 border-cyan-700 bg-red-700">
                        <input type="submit" value="Add item to list" onClick={handleSubmit} />
                    </label>
                </div>
            </div>
        </form>
    )
}