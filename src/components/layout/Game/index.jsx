import React, { useState } from "react";
import GameList from "./childs/GameList";
import MyGame from "./childs/MyGame";
import IconFilter from '../../../assets/IconFilter.png';

const Game = () => {

    const [activeTab, setActiveTab] = useState("tab1"); // 탭 전환을 관리하는 상태

    const handleTab1 = () => {
        setActiveTab("tab1");
    };

    const handleTab2 = () => {
        setActiveTab("tab2");
    };

    const GameTabs = () => {
        return (
            <>
                <div className="WalletTabs">
                    <ul className="nav">
                        {/* SPENDING Tab 버튼 */}
                        <li
                            className={activeTab === "tab1" ? "activetab1" : "deactivetab1"}
                            onClick={handleTab1}
                        >
                            GAME LIST
                        </li>
                        {/* WALLET Tab 버튼 */}
                        <li
                            className={activeTab === "tab2" ? "activetab2" : "deactivetab2"}
                            onClick={handleTab2}
                        >
                            MY GAME
                        </li>
                    </ul>
                    <div>
                        <button className="GameFilterBtn"><img src={IconFilter} /></button>
                    </div>
                </div>
                <div className="outlet">
                    {activeTab === "tab1" ? <GameList /> : <MyGame />}
                </div>
            </>

        )
    }

    return (
        <>
            {GameTabs()}
            <div></div>
        </>
    )
}

export default Game;