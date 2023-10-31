export default function Item ({name, quantity, category,onSelect}){
    return(
        <div onClick={onSelect}>
            <h2 className= "text-2xl font-bold">{name}</h2>
            <p className= "text-base">Purchase {quantity} units from {category} area.</p>
        </div>
    )
    }