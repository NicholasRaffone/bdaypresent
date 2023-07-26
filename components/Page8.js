import { useEffect } from "react";

const Page1 = ({increment}) => {
    useEffect(()=>{

    },[])
    return(
        <div className="min-h-[100vh] py-5 w-[80%] mx-auto flex flex-col justify-center items-center">
            <p className="text-4xl text-pink-400">
                Success!
            </p>
            <p className="py-6 text-center">
                Hi Eri, decided to do something new this time!
                <br /><br />
                Happy birthday! One whole year since SIE and all those shenanigans.
                You're 22 now! I want to congratulate you for how far you've come since all those stand ups and retros.
                You really deserve all the success you've had and I'm so happy you're enjoying your time as a working adult.
                <br/><br />
                I'm so grateful for all the support you've given me and I've truly grown as a person ever since we've met.
                Thank you so much for sticking with me no matter how far we are and how rarely we can meet in person.
                I look back at our pictures from this past year and it gets me very emotional thinking about how we survived SIE, commuting between Toronto and NYC, managing the time difference between Abu Dhabi and Toronto, and now living out our internship lives across the Atlantic Ocean.
                <br/> <br />
                I hope you enjoy the rest of your time in New York and I can't wait for the day we get to gyuu again.
                <br/> <br />
                I love you,
                和羅州
            </p>
            <div
                className={`py-1 bg-blue-300 rounded-lg cursor-pointer text-white text-center w-80 margin-x-auto hover:scale-105 duration-300`}
                onClick={()=>location.reload()}
                >
                Start Again!
            </div>
        </div>
    )
}
export default Page1;
