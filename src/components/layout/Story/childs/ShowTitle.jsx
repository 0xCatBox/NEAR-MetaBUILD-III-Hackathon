import React from "react";
import { useState } from "react";
import L_Bg_Mush from '../../../../assets/L_BackgroundMushrooms.png';
import L_Bg_Thief from '../../../../assets/L_BackgroundThief.png';
import R_Bg_Mush from '../../../../assets/R_BackgroundMushrooms.png';
import R_Bg_Thief from '../../../../assets/R_BackgroundThief.png';
import TitleGif from '../../../../assets/TitleGif.gif';

const ShowTitle = ({ handleFlow }) => {

    const [account, setAccount] = useState("0xA1B2"); // Must be received as a prop, it's a just for test.

    const AccountButton = () => {
        if(account==""){ // If not logged in...
            // need to send log in
            return(<button className="GameStartBtn">CONNECT</button>);
        } else {
            // Handling new user cases here
            return(<button onClick={() => handleFlow(3)} className="GameStartBtn">GAME START</button>);
        }
    }

    return (
        <>
            <div className="GameTitleBox">
                <div className="GameTitle">MUSHROOM WAR</div>
                <div className="GameSubTitle">Produce or Steal!</div>
                <img src={TitleGif} className="GameTitleGIF"/>
                <div>
                    {AccountButton()}
                </div>
            </div>
            <div className="L_BG">
                <img src={L_Bg_Mush} />
                <img src={L_Bg_Thief} className="L_BG_Thief" />
            </div>
            <div className="R_BG">
                <img src={R_Bg_Mush} />
                <img src={R_Bg_Thief} className="R_BG_Thief" />
            </div>
        </>
    )
}

export default ShowTitle;