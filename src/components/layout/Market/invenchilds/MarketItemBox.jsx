import React from "react";
import Mushroom from '../../../../assets/MushroomAdult.png';

const MarketItemList = ({ TokenID, Staking_Reward,type, Rank }) => {
    return (
        <div className="MarketItems">
            <img src={Mushroom} className="MarketItemImg" />
            <div className="MarketBox">
                <div className="MarketDescription">
                    <div className="MarketItemName">{type} #{TokenID}</div>
                    <div className="MarketItemDescription">Rank: {Rank}</div>
                    <div className="MarketItemDescription">Staking ReWard: {Staking_Reward}</div>
                </div>
            </div>
        </div>)
};

export default MarketItemList;