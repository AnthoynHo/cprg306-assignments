import Item from "./item";
import { useState } from "react"
import itemsData from "./items.json"

export default function ItemList() {
const [sortBy,setSortBy] = useState("name")

var sortedItems = [...itemsData].sort((a,b) => {
if (sortBy === "name"){
    return a.name.localeCompare(b.name)
} else if (sortBy === "quantity"){
    return a.quantity - b.quantity
}
});

  return(
    <div>
        <div>
            <ul>
            {sortedItems.map((item) => (
                <Item 
                key={item.id} 
                name = {item.name}
                quantity={item.quantity}
                category={item.category}
                />
            ))}
            </ul>
        </div>
        <div>
            <button 
                onClick={() => setSortBy("name")}
                className = "border-gray-600 border border-80px rounded-md ml-4 text-white-900"
            >
                Sort by Name
            </button>
            <button 
                onClick={() => setSortBy("quantity")}
                className = "border-gray-600 border border-80px rounded-md ml-4 text-white-900"
            >
                Sort by Quantity
            </button>
        </div>
    </div>
  )

}