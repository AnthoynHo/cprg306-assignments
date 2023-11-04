"use client"
import Header from 'app/Header'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items.json"
import { useState } from 'react'
import MealIdeas from './meal-ideas'
import { useUserAuth } from '../_utils/auth-context'


export default function Page() {
const [itemsList, setItemsList] = useState(itemsData);
const [selectItemName, setSelectItemName] = useState("");
const {user}=useUserAuth();
//Event handler for adding new item to list
/*
newItem = new item;
updatedItemsList = new list with new item added to old list;
setItemsList = refresh item list with updated list;
*/
const handleAddItem = (newItem) => {
	//Make new item list(updatedItemsList) from old list(itemsList) and new item(newItem)
	const updatedItemsList = [...itemsList, newItem];
    
	//Update setItemsList with new list(updatedItemsList)
	setItemsList(updatedItemsList);
	//console.log(updatedItemsList);
}
function handleItemSelect(item){
    let name = item.name.split(",")[0].replace(/[^a-zA-Z]/g, " ").replace(/[^a-zA-Z]*(s)(?=[^s]*$)/, " ").trim();
    setSelectItemName(name);
    console.log(name);
}
if (!user) return;
    return(
        <main>
            <Header title="Shopping List"/>
            <div className="flex">            
            <div className="w-1/2">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsList} onItemSelect={handleItemSelect}/>
            </div>
			<div className="w-1/2">
            <MealIdeas ingredient={selectItemName}/>
            </div>
            </div>
        </main>
    )
}
