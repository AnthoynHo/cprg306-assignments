"use client"
import Header from 'app/Header'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items.json"
import { useState } from 'react'

export default function Page() {
const [itemsList, setItemsList] = useState(itemsData)


const handleAddItem = (newItem) => {
	//Make new item list(updatedItemsList) from old list(itemsList) and new item(newItem)
	const updatedItemsList = [...itemsList, newItem];
	//Update setItemsList with new list(updatedItemsList)
	setItemsList(updatedItemsList);
}

    return(
        <main>
            <Header title="Shopping List"/>
			<NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsList}/>
        </main>
    )
}
