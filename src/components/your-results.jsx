export function YourResultsCard() {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue text-white rounded-b-[25px] w-screen md:w-96 md:rounded-[25px] ">
            <h2 className="text-xl font-bold mt-8 text-light-lavender">Your Result</h2>
            <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-t from-persian-blue to-violet-blue w-32 h-32 my-5 md:mt-6 md:w-48 md:h-48">
                <h1 className="text-5xl md:text-7xl font-bold mb-2">76</h1>
                <p className="text-xs md:text-base text-light-lavender">of 100</p>
            </div>
            <h2 className="text-2xl md:text-3xl my-2 font-bold md:my-6">Great</h2>
            <p className="w-[260px] mb-8 text-center text-light-lavender">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}