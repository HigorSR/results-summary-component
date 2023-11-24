import { VerbalIcon } from "@/images/verbal-icon";

export function VerbalCard({ children }) {
    return (
        <div className="flex font-bold bg-green-200 rounded-[25px] justify-between p-3 pr-5">
            <div className="flex gap-2 items-center">
                <VerbalIcon />
                <p className="text-Green-teal">Verbal</p>
            </div>
            <p className="text-Dark-gray-blue">61 <span className="text-gray-500">/ 100</span></p>
        </div>
    );
}
