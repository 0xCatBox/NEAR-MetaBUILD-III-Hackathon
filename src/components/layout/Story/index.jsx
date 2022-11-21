import React, { useState } from "react";
import ShowChoose from "./childs/ShowChoose";
import ShowCrawl from "./childs/ShowCrawl";
import ShowError from "./childs/ShowError";
import ShowInit from "./childs/ShowInit";
import ShowTitle from "./childs/ShowTitle";

const Story = () => {

    const [flow, setFlow] = useState(0);

    const handleFlow = (val) => {
        setFlow(val);
    }

    const showComponents = () => {
        switch (flow) {
            case 0:
                return (<ShowCrawl handleFlow={handleFlow} />);
            case 1:
                return (<ShowTitle handleFlow={handleFlow} />);
            case 2:
                return (<ShowInit handleFlow={handleFlow} />);
            case 3:
                return (<ShowChoose handleFlow={handleFlow} />);
            default:
                return (<ShowError />);
        }
    }

    return (
        <>
            {showComponents()}
        </>
    )

}

export default Story;