import React from "react";
import L_Bg_Mush from '../../../../assets/L_BackgroundMushrooms.png';
import L_Bg_Thief from '../../../../assets/L_BackgroundThief.png';
import R_Bg_Mush from '../../../../assets/R_BackgroundMushrooms.png';
import R_Bg_Thief from '../../../../assets/R_BackgroundThief.png';
import MushroomAdult from '../../../../assets/MushroomAdult.png';
import Thief from '../../../../assets/Thief.png';
import { Link } from "react-router-dom";

const ShowChoose = ({ handleFlow }) => {
    return (
        <>
            <div className="StoryChooseBox">
                <div className="StoryChooseTitle">CHOOSE WHAT DO YOU WANT TO BE</div>
                <div className="StoryChooseElementBox">
                    <div>
                        <div className="StoryImageBox">
                            <img src={MushroomAdult} />
                        </div>
                        <div>
                            <Link to="/labs">
                                <button className="StoryButtonBox">
                                    MUSHROOM
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="StoryImageBox">
                            <img src={Thief} />
                        </div>
                        <div>
                            <button className="StoryButtonBox">THIEF</button>
                        </div>
                    </div>
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

export default ShowChoose;