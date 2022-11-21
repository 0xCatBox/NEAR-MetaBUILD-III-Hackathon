import React, { useState } from "react";
import ShowMarketThief from "./Thiefchilds/MarketThief"
import ShowError from "./Thiefchilds/ShowError";
const MarketThief = () => {
    const [flow, setFlow] = useState(0);

    const handleFlow = (val) => {
        setFlow(val);
    }

    const showComponents = () => {
        switch (flow) {
            case 0:
                return (<ShowMarketThief handleFlow={handleFlow} />);
            // case 1:
            //     return (<ShowTitle handleFlow={handleFlow} />);
            // case 2:
            //     return (<ShowChoose handleFlow={handleFlow} />);
            default:
                 return (<ShowError />);
        }
    }

    const filter = () =>{
        return (
            <div className="MarketThiefList">
                Thief Market List
            </div>
        )
    }

    return (
        <>
            {filter()}
            {showComponents()}
        </>
    )
}

export default MarketThief;