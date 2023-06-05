import React, { useState, useEffect } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as navigationConstants from "constants/navigationConstants";
import { useAuth } from "contexts/AuthContext";
import AuthedRoute from "components/Auth";
import LoginPage from "pages/LoginV2/LoginV2";
import DashboardPage from "pages/Dashboard/Dashboard";
import StockDetailPage from "pages/StockDetail/StockDetail";


import {
    importFromLocalStorageKey
} from "./utils/LocalStorageApi";
import _ from "lodash";

import "./assets/css/index.scss";
import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const { authToken } = useAuth();
  const { i18n } = useTranslation();

  let loginClass = '';
  if(!authToken)
      loginClass = 'login'
    
  const mainContainerClasses = `main-container ${i18n.language} ${loginClass} h-100`;
  let language = importFromLocalStorageKey("i18nextLng") || "";
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
  const [curr, setCurr] = useState(localStorage.getItem("currency"));

  useEffect(() => {
    try {
        i18n.changeLanguage(language);
		_.head(document.getElementsByTagName("html")).setAttribute("lang", language);
		const direction = language === "ar" ? "rtl" : "ltr"
		_.head(document.getElementsByTagName("html")).setAttribute("dir", direction);
		setLang(lang);
    } catch (e) {
    }
  }, [language]);

    const changeCurrency = (Currency) => {
        localStorage.setItem("currency", Currency);
        setCurr(Currency);
    }

  return (
    <Container fluid className={mainContainerClasses}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} exact/>
                    <Route path={navigationConstants.DASHBOARD} exact element={
                        <AuthedRoute component={<DashboardPage currency={curr} />} changeCurrency={changeCurrency} />
                    } />
                    <Route path={navigationConstants.STOCK_DETAIL+"/:id"} exact element={
                        <AuthedRoute component={<StockDetailPage currency={curr} />} changeCurrency={changeCurrency} />
                    } />
                </Routes>
            </BrowserRouter>
        </Container>
  );
}

export default App;
