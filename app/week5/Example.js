"use client";

export default function Page() {
    //Array of objects
    let dogList = [
        {
            name:"sad Dog",
            description: "This dog is sad",
            imageUrl:"https://www.pexels.com/photo/soft-focus-photo-of-dachshund-895259/",
        },
        {
            name: "happy Dog",
            description: "This dog is happy",
            imageUrl:"https://www.pexels.com/photo/animal-dog-pet-cute-39996/",
        },
        {
            name: "angry Dog",
            description: "This dog is angry",
            imageUrl:"https://www.pexels.com/photo/animal-dog-pet-cute-39996/",
        }
    ]

    
//Sort list
    //localeCompare compares two strings locally
    //dogList.sort((a,b) => {a.name.localeCompare(b.name)});
    

    return(
        <main>
            <h1>My Dog List</h1>
            <ul>
                //Map through array of objects into list
                {dogList.map((dog) => (
                    <li>
                        <h2>{dog.name}</h2>
                        <p>{dog.description}</p>
                        <img src={dog.imageUrl} alt={dog.name}/>
                    </li>
                ))}
            </ul>
        </main>
    );
}
