import React, { useState } from "react";
import ShowMarketItems from "./invenchilds/Marketitems";
import ShowError from "./invenchilds/ShowError";
import FilterIcon from "../../../assets/Filter.png";
import { Col } from "react-bootstrap";
const MarketMush = () => {
    const [flow, setFlow] = useState(0);

    const handleFlow = (val) => {
        setFlow(val);
    }

    const showComponents = () => {
        switch (flow) {
            case 0:
                return (<ShowMarketItems handleFlow={handleFlow} />);
            // case 1:
            //     return (<ShowTitle handleFlow={handleFlow} />);
            // case 2:
            //     return (<ShowChoose handleFlow={handleFlow} />);
            default:
                return (<ShowError />);
        }
    }

    const filter = () => {
        return <div className="MarketFilter">
            <Col className="MarketButtonBox">
                <div className="MarketTitle">Item Market</div>
                <img src={FilterIcon} className="MarketFilterIcon" />
                <button className="MarketButtonALL">
                    ALL
                </button>
                <button className="MarketButtonMUSHROOM">
                    MUSHROOM
                </button>
                <button className="MarketButtonSPORES">
                    SPORES
                </button>
            </Col>

        </div>
    }

    return (
        <>
            
            {filter()}
            {showComponents()}
        </>
    )
}

export default MarketMush;