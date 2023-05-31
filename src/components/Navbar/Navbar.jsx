import React, { useState } from "react";
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { useAuth } from "contexts/AuthContext";
import { useTranslation } from "react-i18next";
import _ from "lodash";

const NavTopBar = (props) => {
    const { t, i18n } = useTranslation();
    const { logout } = useAuth();
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

    var token = localStorage.getItem("accessToken");

    const handleLogout = () => {
        logout();
        window.location.replace("/");
    };

    const changeLanguage = (language) => {
			if (language === "ar") {
				i18n.changeLanguage("en");
				localStorage.setItem("i18nextLng", "en");
				_.head(document.getElementsByTagName("html")).setAttribute("lang", "en");
				_.head(document.getElementsByTagName("html")).setAttribute("dir", "ltr");
				setLang("en");

			} else {
				i18n.changeLanguage("ar");
				localStorage.setItem("i18nextLng", "ar");
				_.head(document.getElementsByTagName("html")).setAttribute("lang", "ar");
				_.head(document.getElementsByTagName("html")).setAttribute("dir", "rtl");
				setLang("ar");
			}
	};
    

    return (
        token ? <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-4">
            <Navbar.Brand href="#home">{ t("Wealth Suite") }</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <NavDropdown title={t('Currency')} id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={() => props.changeCurrency('USD')}>{t('USD')}</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => props.changeCurrency('AED')}>{t('AED')}</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  onClick={() => changeLanguage(lang)}>{t("Language")}</Nav.Link>
                    <Nav.Link onClick={() => handleLogout()}>{t('Logout')}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        : ""
    );
};

export default NavTopBar;
