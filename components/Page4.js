import { useState, useEffect } from "react";

const Page4 = ({increment}) => {
    const [input, setInput] = useState('');
    const [err, setErr] = useState(false);
    const [persistentErr, setPersistentErr] = useState(false);
    const conditional = () => {
        return input.toLowerCase() === '10-08-2022'
    }
    useEffect(() => {
        setErr(false);
    }, [input])

    const enterEvent = () => {
        if(conditional()){
            increment();
            setPersistentErr(false)
        }else{
            setErr(true);
            setPersistentErr(true)
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            enterEvent()
        }
    }    
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <p className="text-4xl text-pink-400">
                Question 3.
            </p>
            <p className="py-4">
                When did we start dating? (mm-dd-yyyy)
            </p>
            <input
                value={input} 
                onKeyUp={handleKeyPress}
                onChange={(e)=>setInput(e.target.value)}
                className={`w-80 mt-2 mb-8 py-2 px-4 rounded-lg border ${err?"border-red-500":'border-gray-500'}`}
            />{
               persistentErr?<p className="text-red-500 pb-4">Hint: I was very surprised!</p>:<></>
           }
            <div
                className={`py-1 ${input?'bg-blue-300':'bg-gray-500 pointer-events-none'} rounded-lg cursor-pointer text-white text-center w-80 margin-x-auto hover:scale-105 duration-300`}
                onClick={enterEvent}
                onKeyUp={handleKeyPress}
                >
                Next
            </div>
        </div>
    )
}
export default Page4;
