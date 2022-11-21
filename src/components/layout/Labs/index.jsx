import React, {useState} from "react";
import ShowDummyUI from "./childs/ShowDummyUI";
import ShowLabs from "./childs/ShowLabs";
import ShowSideUI from "./childs/ShowSideUI";

const Labs = () => {
    const [sidetext,setSidetext] = useState("");
    const [sidemush,setSidemush] = useState("");
    return (
        <div className="Labs">
            <div className="LabsCollocate">
                <ShowSideUI />
                <ShowLabs />
                {/* <ShowDummyUI /> */}
            </div>
        </div>
    )
}

export default Labs;