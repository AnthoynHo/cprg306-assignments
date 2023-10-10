"use client"
import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (event) => {
        const item = ({
            name: name,
            quantity: quantity,
            category: category
        });
        event.preventDefault();
        if (event.input.required = true){
            alert('Please fill out all fields.');
        }
        else {

        console.log(item);

        alert('Buying' + ' ' + quantity + ' ' + name + ' ' + 'from' + ' ' + category + ' ' + 'section.'),
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    };
    
    return(
        <form>
            <label> {/*label for name*/}
                Name:
                <input
                required 
                id = "name"
                className="text-black" 
                type="text" 
                placeholder="Enter name of item." 
                value={name} 
                onChange={event => setName(event.target.value)}
                
                />
            </label>
            <label> {/*label for quantity*/}
                Quantity:
                <input
                name = "quantity" 
                className="text-black" 
                type="number"
                min = "1"
                max = "99"
                value={quantity}
                placeholder="Enter quantity."  
                onChange={event => setQuantity(event.target.value)}
                required
                />
            </label>
            <label> {/*label for category*/}
                Category:
                <select
                name = "category" 
                className="text-black" 
                type="text" 
                placeholder="Enter category." 
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
            <label>
                <input type="submit" value="Add item to list" onClick={handleSubmit} />
            </label>
        </form>
    )
}