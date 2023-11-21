"use client"
import Header from 'app/Header'
import ItemList from './item-list'
import NewItem from './new-item'
import { useState } from 'react'
import MealIdeas from './meal-ideas'
import { useUserAuth } from '../_utils/auth-context'
import {getItems,addItem} from '../_services/shopping-list-service'
import{useEffect} from 'react'



export default function Page() {
const [itemsList, setItemsList] = useState([]);
const [selectItemName, setSelectItemName] = useState(null);
const {user}=useUserAuth();
//Event handler for adding new item to list
/*
newItem = new item;
updatedItemsList = new list with new item added to old list;
setItemsList = refresh item list with updated list;
*/


async function loadItems(){
    try{
        console.log(user.uid);
        const itemsList = await getItems(user.uid);
        setItemsList(itemsList);
    } catch (error){
        console.error("Error loading items:", error);
    }
}    

useEffect(() => {
    if (!user){
        console.log("No user known.");
    } else{
        console.log("User known.");
        console.log(user.uid);
        loadItems(); 
    }    
},[user]);

const handleAddItem = async (newItem) => {
	//Make new item list(updatedItemsList) from old list(itemsList) and new item(newItem)
	//const updatedItemsList = [...itemsList, newItem];
    
	//Update setItemsList with new list(updatedItemsList)
	//setItemsList(updatedItemsList);
	//console.log(updatedItemsList);
    const addedItem = await addItem(user.uid, newItem);
    setItemsList(prevItems =>[...prevItems, addedItem]);
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

