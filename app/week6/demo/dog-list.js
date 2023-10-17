const dogs = [
    {name: "Snickers", age = 2},
    {name: "Hugo", age = 8},
    {name: "Sunny", age = 1},
    {name: "Barkley", age = 6},
];

export default function DogList() {
    return(
        <div>
            <h1>Dogs</h1>
            <ul>
                {dogs.map(dog,index) => (
                    <div key={index}>
                        <Dog name={dog.name} age={dog.age} />
                    </div>
                )}
            </ul>
        </div>
    )
}