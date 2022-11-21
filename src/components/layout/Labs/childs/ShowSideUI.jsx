import React from "react";
import Grid1 from '../../../../assets/Grid1.png';
import Grid2 from '../../../../assets/Grid2.png';
import Grid3 from '../../../../assets/Grid3.png';

import Testspore from '../../../../assets/Test_spore.png';

const ShowSideUI = () => {

    // spores & mushrooms image, amount

    const ItemElement = () => {
        return(
            <div className="SideUIItem">
                <img src={Testspore} className="SideUIItemImage"/>
                <div className="SideUIItemAmount">0</div>
            </div>
        )
    }

    return (
        <>
            <div className="SideUIBox">
                <div className="SideUITextBox">
                    <div className="SideUIText">MUSHROOM</div>
                    <div className="SideUIText">DECOMPOSITION</div>
                    <div className="SideUIText">EXPERIMENT</div>
                </div>
                <div className="SideUIMushroomBox">
                    <img src={Grid3} className="SideMushRoom" />
                </div>
                <div className="SideUIButtonBox">
                    <button className="SideUIButton">DECOMPOSE<span className="SideUIButtonToken">100MT</span></button>
                </div>

                <div className="SideUIItemBox">
                    {ItemElement()}
                    {ItemElement()}
                    {ItemElement()}
                    {ItemElement()}
                    {ItemElement()}
                </div>
            </div>
        </>
    )
}

export default ShowSideUI;