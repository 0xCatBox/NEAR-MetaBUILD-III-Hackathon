import React, { useState } from "react";
import ShowItems from "./invenchilds/items";
import ShowError from "./invenchilds/ShowError";
import FilterIcon from "../../../assets/Filter.png";
import { Col } from "react-bootstrap";
const Inventory = () => {
    const [flow, setFlow] = useState(0);

    const handleFlow = (val) => {
        setFlow(val);
    }

    const showComponents = () => {
        switch (flow) {
            case 0:
                return (<ShowItems handleFlow={handleFlow} />);
            // case 1:
            //     return (<ShowTitle handleFlow={handleFlow} />);
            // case 2:
            //     return (<ShowChoose handleFlow={handleFlow} />);
            default:
                return (<ShowError />);
        }
    }

    const filter = () => {
        return <div className="Filter">
            <Col className="ButtonBox">
                <img src={FilterIcon} className="FilterIcon" />
                <button className="ButtonALL">
                    ALL
                </button>
                <button className="ButtonMUSHROOM">
                    MUSHROOM
                </button>
                <button className="ButtonSPORES">
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

export default Inventory;