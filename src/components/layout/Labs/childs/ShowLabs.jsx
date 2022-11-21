import React, { useEffect, useRef } from "react";
import LabsTree from '../../../../assets/LabsTree.png';
import Grid1 from '../../../../assets/Grid1.png';
import Grid2 from '../../../../assets/Grid2.png';
import Grid3 from '../../../../assets/Grid3.png';
import useGrowingStoreFour from "../../../../stores/GrowingStoreFour";
import Mush00 from '../../../../assets/mush00.png';
import Mush01 from '../../../../assets/mush01.png';
import Mush02 from '../../../../assets/mush02.png';
import useGrowingStoreTwo from "../../../../stores/GrowingStoreTwo";
import useGrowingStoreThree from "../../../../stores/GrowingStoreThree";
import useGrowingStoreOne from "../../../../stores/GrowingStoreOne";

const ShowLabs = () => {

    const timerRef = useRef(null);
    const { MushOneActive, setMushOneActive, MushOneEXP, MushOneStatus, MushOneType, SetMushOneEXP, SetMushOneStatus, SetMushOneType, InitMushOneEXP, InitMushOneStatus } = useGrowingStoreOne(state => state);
    const { MushTwoActive, setMushTwoActive, MushTwoEXP, MushTwoStatus, MushTwoType, SetMushTwoEXP, SetMushTwoStatus, SetMushTwoType, InitMushTwoEXP, InitMushTwoStatus } = useGrowingStoreTwo(state => state);
    const { MushThreeActive, setMushThreeActive, MushThreeEXP, MushThreeStatus, MushThreeType, SetMushThreeEXP, SetMushThreeStatus, SetMushThreeType, InitMushThreeEXP, InitMushThreeStatus } = useGrowingStoreThree(state => state);
    const { MushFourActive, setMushFourActive, MushFourEXP, MushFourStatus, MushFourType, SetMushFourEXP, SetMushFourStatus, SetMushFourType, InitMushFourEXP, InitMushFourStatus } = useGrowingStoreFour(state => state);

    let timer = setTimeout(() => {
        console.log(MushOneActive, MushTwoActive, MushThreeActive, MushFourActive);
        if (MushOneStatus != -1 && MushOneStatus < 2) {
            SetMushOneEXP();
        }
        if (MushTwoStatus != -1 && MushTwoStatus < 2) {
            SetMushTwoEXP();
        }
        if (MushThreeStatus != -1 && MushThreeStatus < 2) {
            SetMushThreeEXP();
        }
        if (MushFourStatus != -1 && MushFourStatus < 2) {
            SetMushFourEXP();
        }
        clearTimeout(timer);
    }, 200 * (MushOneActive + MushTwoActive + MushThreeActive + MushFourActive));

    useEffect(() => {
        if (MushOneStatus != -1 && MushOneStatus < 2) {
            console.log("ONE: ", MushOneEXP, MushOneStatus);
            if (MushOneEXP == 10) {
                if (MushOneStatus == 1) {
                    SetMushOneStatus();
                    setMushOneActive();
                    clearTimeout(timer);
                } else {
                    SetMushOneStatus();
                    InitMushOneEXP();
                }
            }
        }
        if (MushTwoStatus != -1 && MushTwoStatus < 2) {
            console.log("TWO: ", MushTwoEXP, MushTwoStatus);
            if (MushTwoEXP == 10) {
                if (MushTwoStatus == 1) {
                    SetMushTwoStatus();
                    setMushTwoActive();
                    clearTimeout(timer);
                } else {
                    SetMushTwoStatus();
                    InitMushTwoEXP();
                }
            }
        }
        if (MushThreeStatus != -1 && MushThreeStatus < 2) {
            console.log("THREE: ", MushThreeEXP, MushThreeStatus);
            if (MushThreeEXP == 10) {
                if (MushThreeStatus == 1) {
                    SetMushThreeStatus();
                    setMushThreeActive();
                    clearTimeout(timer);
                } else {
                    SetMushThreeStatus();
                    InitMushThreeEXP();
                }
            }
        }
        if (MushFourStatus != -1 && MushFourStatus < 2) {
            console.log("FOUR: ", MushFourEXP, MushFourStatus);
            if (MushFourEXP == 10) {
                if (MushFourStatus == 1) {
                    SetMushFourStatus();
                    setMushFourActive();
                    clearTimeout(timer);
                } else {
                    SetMushFourStatus();
                    InitMushFourEXP();
                }
            }
        }
    }, [timer]);

    useEffect(() => {
        console.log("init localstorage");
        let LocalOne = [localStorage.getItem('OneEXP'), localStorage.getItem('OneStatus'), localStorage.getItem('OneType')];
        let LocalTwo = [localStorage.getItem('TwoEXP'), localStorage.getItem('TwoStatus'), localStorage.getItem('TwoType')];
        let LocalThree = [localStorage.getItem('ThreeEXP'), localStorage.getItem('ThreeStatus'), localStorage.getItem('ThreeType')];
        let LocalFour = [localStorage.getItem('FourEXP'), localStorage.getItem('FourStatus'), localStorage.getItem('FourType')];

        if (LocalOne[0] != null && LocalOne[1] != null && LocalOne[2] != null) {
            SetMushOneEXP(LocalOne[0]);
            SetMushOneStatus(LocalOne[1]);
            SetMushOneType(LocalOne[2]);
        }
        if (LocalTwo[0] != null && LocalTwo[1] != null && LocalTwo[2] != null) {
            SetMushTwoEXP(LocalTwo[0]);
            SetMushTwoStatus(LocalTwo[1]);
            SetMushTwoType(LocalTwo[2]);
        }
        if (LocalThree[0] != null && LocalThree[1] != null && LocalThree[2] != null) {
            SetMushThreeEXP(LocalThree[0]);
            SetMushThreeStatus(LocalThree[1]);
            SetMushThreeType(LocalThree[2]);
        }
        if (LocalFour[0] != null && LocalFour[1] != null && LocalFour[2] != null) {
            SetMushFourEXP(LocalFour[0]);
            SetMushFourStatus(LocalFour[1]);
            SetMushFourType(LocalFour[2]);
        }
    }, []);

    const PlantSpore = (index) => {
        // 포자 제거 후 아이템 갱신
        if (MushOneStatus == -1) {
            SetMushOneStatus(0);
            SetMushOneType(0);
            setMushOneActive();
        } else if (MushTwoStatus == -1) {
            SetMushTwoStatus(0);
            SetMushTwoType(0);
            setMushTwoActive();
        } else if (MushThreeStatus == -1) {
            SetMushThreeStatus(0);
            SetMushThreeType(0);
            setMushThreeActive();
        } else if (MushFourStatus == -1) {
            SetMushFourStatus(0);
            SetMushFourType(0);
            setMushFourActive();
        }
    }

    const ItemElements = (type, index) => {
        if (type == "spore") {
            return (
                <div className="LabsItemBox" onClick={() => PlantSpore(index)}>
                    <div className="LabsItemImage"></div>
                    <div className="LabsItemAmount">0</div>
                </div>
            )
        }
        return (
            <div className="LabsItemBox">
                <div className="LabsItemImage"></div>
                <div className="LabsItemAmount">0</div>
            </div>
        )
    }

    const DummyElements = () => {
        return (
            <div className="LabsDummyItemBox"></div>
        )
    }

    const ShowSpores = () => {
        return (
            <div className="ShowSporesBox">
                <div className="ItemHorizontalBox">
                    {ItemElements("spore", 0)}
                    {ItemElements("spore", 1)}
                    {ItemElements("spore", 2)}
                    {ItemElements("spore", 3)}
                    {ItemElements("spore", 4)}
                </div>
                <div className="ShowItemTitle">Spores</div>
            </div>
        )
    }

    const ShowMushrooms = () => {
        return (
            <div className="ShowMushroomsBox">
                <div className="ShowItemTitle">Mushrooms</div>
                <div className="ItemHorizontalBox">
                    {ItemElements("mush", 0)}
                    {ItemElements("mush", 1)}
                    {ItemElements("mush", 2)}
                    {ItemElements("mush", 3)}
                    {ItemElements("mush", 4)}
                </div>
            </div>
        )
    }

    const ShowSpSpores = () => {
        return (
            <div className="ShowSpSporesBox">
                <div className="ShowItemTitle">SPECIAL SPORES</div>
                <div className="ItemVerticalBox">
                    {ItemElements(0)}
                    {ItemElements(1)}
                    {ItemElements(2)}
                    {ItemElements(3)}
                    {DummyElements()}
                </div>
            </div>
        )
    }

    const ShowSpMushrooms = () => {
        return (
            <div className="ShowSpMushroomsBox">
                <div className="ShowItemTitle">SPECIAL MUSHROOMS</div>
                <div className="ItemVerticalBox">
                    {ItemElements(0)}
                    {ItemElements(1)}
                    {ItemElements(2)}
                    {ItemElements(3)}
                    {DummyElements()}
                </div>
            </div>
        )
    }

    const GetMushroomImage = (status, sporetype) => {
        if (status == 0) { //포자
            if (sporetype == 0) {
                return Mush00;
            } else if (sporetype == 1) {

            }
        } else if (status == 1) { // 성장중
            return Mush01;

        } else if (status == 2) {
            return Mush02;
        }
    }

    const MushroomHarvest = (index) => {
        if (index == 1 && MushOneStatus == 2) {
            InitMushOneEXP();
            InitMushOneStatus();
        } else if (index == 2 && MushTwoStatus == 2) {
            InitMushTwoEXP();
            InitMushTwoStatus();
        } else if (index == 3 && MushThreeStatus == 2) {
            InitMushThreeEXP();
            InitMushThreeStatus();
        } else if (index == 4 && MushFourStatus == 2) {
            InitMushFourEXP();
            InitMushFourStatus();
        }
    }

    const MushroomElement = (val) => {
        switch (val) {
            case 1:
                return (<img onClick={() => MushroomHarvest(1)} src={GetMushroomImage(MushOneStatus, MushOneType)} className="GrowingOne" />);
            case 2:
                return (<img onClick={() => MushroomHarvest(2)} src={GetMushroomImage(MushTwoStatus, MushTwoType)} className="GrowingTwo" />);
            case 3:
                return (<img onClick={() => MushroomHarvest(3)} src={GetMushroomImage(MushThreeStatus, MushThreeType)} className="GrowingThree" />);
            case 4:
                return (<img onClick={() => MushroomHarvest(4)} src={GetMushroomImage(MushFourStatus, MushFourType)} className="GrowingFour" />);
        }
    }

    const GrowingStatus = () => {
        return (
            <div className="GrowingStatus">
                {MushroomElement(1)}
                {MushroomElement(2)}
                {MushroomElement(3)}
                {MushroomElement(4)}
            </div>
        )
    }

    const ShowGrowButton = () => {
        return (
            <div className="GrowingButtonBox">
                <button className="GrowingButton"></button>
            </div>
        )
    }

    return (
        <>
            <div className="LabsBox">
                {ShowSpores()}
                {ShowMushrooms()}
                {ShowSpSpores()}
                {ShowSpMushrooms()}
                <div className="LabsTree">
                    {GrowingStatus()}
                </div>
                {ShowGrowButton()}
            </div>
        </>

    )
}

export default ShowLabs;