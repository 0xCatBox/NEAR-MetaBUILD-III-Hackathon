import React from "react";
import Mushroom from '../../../../assets/MushroomAdult.png';

const ItemList = ({ TokenID, Staking_Reward,type, Rank }) => {
    return (
        <div className="Items">
            <img src={Mushroom} className="ItemImg" />
            <div className="Box">
                <div className="Description">
                    <div className="ItemName">{type} #{TokenID}</div>
                    <div className="ItemDescription">Rank: {Rank}</div>
                    <div className="ItemDescription">Staking ReWard: {Staking_Reward}</div>
                </div>
            </div>
        </div>)
};

export default ItemList;