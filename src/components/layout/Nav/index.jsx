import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from '../../../assets/NavLogo.png';

const Invenhover = () => {
    return <NavLink className="Invenhover">
        INVENTORY
        <div className="Dropdown">
            <NavLink to="/Inventory" className={({isActive}) => (isActive ? "NavMushActive" : "DropMenuMushroom")}>MUSHROOM</NavLink>
            <NavLink to="/Thief" className={({isActive}) => (isActive ? "NavThiefActive" : "DropMenuThief")}>Thief</NavLink>
        </div> 
    </NavLink>
}

const MarketHover = () => {
    return <NavLink className="Invenhover">
        MARKET
        <div className="Dropdown">
            <NavLink to="/MarketMush" className={({isActive}) => (isActive ? "NavMushActive" : "DropMenuMushroom")}>MUSHROOM</NavLink>
            <NavLink to="/MarketThief" className={({isActive}) => (isActive ? "NavThiefActive" : "DropMenuThief")}>Thief</NavLink>
        </div> 
    </NavLink>
}

const Nav = () => {
    return(
        <div className="Nav">
            <div className="NavLogo">
                <img src={NavLogo} />
            </div>
            <div className="NavElement">
                <NavLink to="/" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>STORY</NavLink>
                <NavLink to="/labs" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>LABS</NavLink>
                <NavLink to="/game" className={({isActive}) => (isActive ? "NavActive" : "NavDeactive")}>GAME</NavLink>
                <div> {Invenhover()}</div>
                <div> {MarketHover()}</div>
            </div>
            <div className="NavConnect">
                <button className="NavConnectBtn">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Nav;