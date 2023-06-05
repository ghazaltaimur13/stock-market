import React, {  useEffect, useState } from "react";
import { getUserPortfolio } from "services/UserInfoService";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col
  } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { STOCK_DETAIL } from "constants/navigationConstants";
import StatsCard from "components/Dashboard/StatsCard"
import PortfolioDetail from './PortfolioDetail';
import LineChart from "./LineChart";
import HighChart from "./HighChart";
import PieChartPortfolio from "./PieChartPortfolio";


function Dashboard() {
    const { t } = useTranslation();
    const userToken = localStorage.getItem('accessToken');
    const currency = localStorage.getItem('currency');
    const [userPortfolio, setUserPortfolio] = useState(false);
    const navigate = useNavigate();

    const fetchData = async (securityIds) => {
        const res = await getUserPortfolio(userToken, currency, securityIds);
        setUserPortfolio(res);
    }
    useEffect(() => {
        fetchData()
    }, [currency]);

    const securityCheckboxChange = async (event, securityIds, forcefully) => {
        if(!event.target.checked && !forcefully)
            securityIds = ''
        return navigate(STOCK_DETAIL+"/"+securityIds)
    }
    
    return (
        <div className="container-fluid p-0 w-100">
            <Row className="m-3">
                <Col className="header-title">
                    { t('Portfolio Valuation')}
                </Col>
            </Row>
            <Row  className="m-3">
                <Col sm="9">
                { userPortfolio && userPortfolio?.securityValuations?.length > 0 && 
                    <PortfolioDetail userPortfolio={userPortfolio} />
                }
                </Col>
                <Col sm="3" className="pie-chart d-flex justify-content-center">
                { userPortfolio && userPortfolio?.securityValuations?.length > 0 && 
                    <PieChartPortfolio securityValuations={userPortfolio?.securityValuations} />
                }
                </Col>
            </Row>
            <Row className="m-3">
                { userPortfolio && userPortfolio?.securityValuations?.length > 0 &&
                 userPortfolio?.securityValuations.map((securityValuation, index) => (
                    <StatsCard 
                        index={index} 
                        securityValuation={securityValuation} 
                        currency={currency} 
                        securityCheckboxChange={securityCheckboxChange}
                    />
                ))}
            </Row>
            <Row className="my-5 mx-3">
            { userPortfolio && userPortfolio?.securityTimeSeries?.length > 0 && 
                <LineChart securityTimeSeries={userPortfolio?.securityTimeSeries} />
            }
            </Row>
            <Row className="my-5 mx-3">
            { userPortfolio && userPortfolio?.securityTimeSeries?.length > 0 &&
                <HighChart securityTimeSeries={userPortfolio?.securityTimeSeries} />
            }
            </Row>
        </div>
    );
}

export default Dashboard;
