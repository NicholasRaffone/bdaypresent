const Page1 = ({increment}) => {
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <p className="text-4xl text-pink-400">
                Welcome!
            </p>
            <p className="py-12">
                So happy you could make it! Let's start off with a few questions to verify your identity
            </p>
            <div
                className='py-1 bg-blue-300 rounded-lg cursor-pointer text-white text-center w-80 margin-x-auto hover:scale-105 duration-300'
                onClick={increment}
                >
                Next
            </div>
        </div>
    )
}
export default Page1;
