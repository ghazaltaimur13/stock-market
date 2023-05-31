import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import SideBarMenu from "./SideBarMenu";
import Menu from "./Menu";

function SideBar() {
    const [activeId, setActiveId] = useState(1);

    async function toggleActive(id) {
        setActiveId(id);
    }

    return (
        <Accordion defaultActiveKey="1">
            <SideBarMenu activeId={activeId} toggleActive={toggleActive} menuData={Menu} />
        </Accordion>
    );
}

export default SideBar;
