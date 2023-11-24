import { VisualIcon } from "@/images/visual-icon";

export function VisualCard({ children }) {
    return (
        <div className="flex font-bold bg-purple-300 rounded-[25px] justify-between p-3 pr-5">
            <div className="flex gap-2 items-center">
                <VisualIcon />
                <p className="text-Cobalt-blue">Visual</p>
            </div>
            <p className="text-Dark-gray-blue">72 <span className="text-gray-500">/ 100</span></p>
        </div>
    );
}
