import { ReactionCard } from "./reaction-card";
import { MemoryCard } from "./memory-card";
import { VerbalCard } from "./verbal-card";
import { VisualCard } from "./visual-card";

export function SummaryCards() {
    return (
        <div className="flex flex-col justify-center items-start w-screen bg-white rounded-r-[25px] px-[40px] md:w-96" >
            <h2 className="text-xl font-bold mt-8 md:mt-0 mb-8 ">Summary</h2>
            <div className="flex flex-col w-full gap-5">
                <ReactionCard />
                <MemoryCard />
                <VerbalCard />
                <VisualCard />
            </div>
            <button className="mt-8 bg-Dark-gray-blue text-Pale-blue rounded-[25px] p-3 hover:bg-violet-blue w-full">Continue</button>
        </div>
    );
}
