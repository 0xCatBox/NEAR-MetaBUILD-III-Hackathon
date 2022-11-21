import React from "react";
import Thief from '../../../../assets/Thief.png';

const MarketThiefBox = ({ Name,TokenID,LIFE,COUNTS }) => {
    return (
        <div className="MarketItems">
            <img src={Thief} className="MarketItemImg" />
            <div className="MarketBox">
                <div className="MarketDescription">
                    <div className="MarketThiefName">{Name} #{TokenID}</div>
                    <div className="MarketThiefDescription">LIFE: {LIFE}</div>
                    <div className="MarketThiefDescription">COUNTS: {COUNTS}</div>
                </div>
            </div>
        </div>)
};

export default MarketThiefBox;