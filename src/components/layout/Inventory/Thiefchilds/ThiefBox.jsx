import React from "react";
import Mushroom from '../../../../assets/Thief.png';

const ThiefBox = ({ Name,TokenID,LIFE,COUNTS }) => {
    return (
        <div className="Items">
            <img src={Mushroom} className="ItemImg" />
            <div className="Box">
                <div className="Description">
                    <div className="ThiefName">{Name} #{TokenID}</div>
                    <div className="ThiefDescription">LIFE: {LIFE}</div>
                    <div className="ThiefDescription">COUNTS: {COUNTS}</div>
                </div>
            </div>
        </div>)
};

export default ThiefBox;