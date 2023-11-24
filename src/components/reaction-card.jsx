import { ReactionIcon } from "../images/reaction-icon";

export function ReactionCard() {
    return (
        <div className="flex font-bold bg-red-200 rounded-[25px] justify-between p-3 pr-5" >
            <div className="flex gap-2 items-center">
                <ReactionIcon />
                <p className='text-Light-red font-bold'>Reaction</p>
            </div>
            <p className="text-Dark-gray-blue">80 <span className="text-gray-500">/ 100</span></p>
        </div>
    );
}
