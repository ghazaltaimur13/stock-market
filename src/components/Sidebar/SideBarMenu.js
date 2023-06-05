
import React from "react";
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideBarMenu(props) {
    const { t } = useTranslation();

    return (
        props.menuData.map((menu, index) => {
            return(
            <Card key={ index } className={props.activeId === menu.id ?"active-left-menu left-menu-card rounded-0":"left-menu-card rounded-0"}  eventkey="1">
                <Link to={menu.link} onClick={() => props.toggleActive(menu.id)} className={props.activeId === menu.id ? 'active-panel py-2  d-flex  card-header' : 'py-2 d-flex card-header'}>
                    <i className={menu.icon}></i>
                    <Card.Text className="mx-3 my-2">{t(menu.name)}</Card.Text>
                </Link>
            </Card>
        )}));
  };

export default SideBarMenu;