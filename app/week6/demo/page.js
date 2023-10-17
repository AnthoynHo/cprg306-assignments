import DogList from "./dog";

const dogsData = [
    {name:"Snickers", age:2},
    {name:"Hugo", age:8},
    {name:"Sunny", age:1},
]

export default function Page() {
    const [dogs, setDogs] = useState(dogsData);

    function handleSubmit(dog) {
        alert ('Adding ${dog.name} who is ${dog.age} years old')
        setDogs([...dogs, dog]);
    }

    function handleDelete(name){
        alert ('Deleting ${name}')
        setDogs(dogs.filter(dog => dog.name !== name));
    }

<main>
    <dog-FormDemo onSubmit={(dog) => handleSubmit(dog)} />
    <DogList dogs={dogs} onDelete = {handleDelete}/>
</main>

}