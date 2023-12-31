import Item from "./item";
import { useState } from "react"

export default function ItemList({items, onItemSelect}) {
const [sortBy,setSortBy] = useState("name")

//const handleShowRecipe = (event) => {onItemSelect(event);}

var sortedItems = [...items].sort((a,b) => {
    if (sortBy === "name"){
        return a.name.localeCompare(b.name)
    } 
    else if (sortBy === "quantity"){
        return a.quantity - b.quantity
    }
}); 

  return(
    <div>
        <div>
            <button 
                onClick={() => setSortBy("name")}
                className = "border-white border border-80px rounded-md ml-4 bg-orange-500 text-white-900 p-5"
            >
                Sort by Name
            </button>
            <button 
                onClick={() => setSortBy("quantity")}
                className = "border-white-600 border border-80px rounded-md ml-4 text-white-900 p-5 bg-pink-500"
            >
                Sort by Quantity
            </button>
        </div>
        <div>
            <ul>
                {/*Make and sort new list from list generated by itemsData*/}
            {sortedItems.map((item) => (
                <Item 
                key={item.id} 
                name = {item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
                />
            ))}
            </ul>
        </div>        
    </div>
  )

}