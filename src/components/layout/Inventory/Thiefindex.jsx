import React, { useState } from "react";
import ShowThief from "./Thiefchilds/Thief"
import ShowError from "./Thiefchilds/ShowError";
const Thief = () => {
    const [flow, setFlow] = useState(0);

    const handleFlow = (val) => {
        setFlow(val);
    }

    const showComponents = () => {
        switch (flow) {
            case 0:
                return (<ShowThief handleFlow={handleFlow} />);
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
            <div className="ThiefList">
                Thief List
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

export default Thief;