import React, {  useEffect, useState } from "react";
import { getUserPortfolio, getUserSecurity } from "services/UserInfoService";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col
  } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import StatsCard from "components/Dashboard/StatsCard"
import TransactionHistory from "components/StockDetail/TransactionHistory";
import PortfolioDetail from 'components/Dashboard/PortfolioDetail';
import { DASHBOARD } from "constants/navigationConstants";
import PieChartPortfolio from "components/Dashboard/PieChartPortfolio";

function StockDetail() {
    const { t } = useTranslation();
    const userToken = localStorage.getItem('accessToken');
    const currency = localStorage.getItem('currency');
    const [userPortfolio, setUserPortfolio] = useState(false);
    const [userSecurity, setUserSecurity] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchData = async (securityIds) => {
        const res = await getUserPortfolio(userToken, currency, securityIds);
        setUserPortfolio(res);
    }
    useEffect(() => {
        fetchData(id)
    }, [id, currency]);

    const fetchSecurityData = async (securityIds) => {
        const res = await getUserSecurity(userToken, securityIds, userPortfolio?.portfolio?.id);
        setUserSecurity(res);
    }

    const securityCheckboxChange = async (event, securityIds) => {
        if(!event.target.checked)
            securityIds = ''
        return navigate(DASHBOARD)
    }

    const backHistory = async () => {
        setUserSecurity(false);
        return navigate(DASHBOARD)
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
                        fetchSecurityData={fetchSecurityData} 
                        securityCheckboxChange={securityCheckboxChange}
                        userSecurityId={id}
                    />
                ))}
            </Row>
            <Row className="m-3">
                <TransactionHistory userSecurity={userSecurity?.content} backHistory={backHistory} />
            </Row>
        </div>
    );
}

export default StockDetail;
