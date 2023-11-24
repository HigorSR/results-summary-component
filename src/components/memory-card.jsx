import { MemoryIcon } from "@/images/memory-icon";

export function MemoryCard({ children }) {
    return (
        <div className="flex font-bold bg-yellow-200 rounded-[25px] justify-between p-3 pr-5">
            <div className="flex gap-2 items-center">
                <MemoryIcon />
                <p className="text-Orangey-yellow">Memory</p>
            </div>
            <p className="text-Dark-gray-blue">92 <span className="text-gray-500">/ 100</span></p>
        </div>
    );
}
