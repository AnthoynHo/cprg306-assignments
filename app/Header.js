import StudentInfo from './StudentInfo'

 export default function Header({title}){
    return(
        <div className="container flex justify-center items-center h-full">
            <h1 className="flex-grow justify-start text-4xl">
            {title}
            </h1>
        <div className="flex-grow"><StudentInfo /></div>
        </div>
    );
  }
  
