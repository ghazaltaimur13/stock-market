import React from "react";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col,
    Card
  } from "react-bootstrap";

function PortfolioDetail(props) {
    const { t } = useTranslation();
    let userPortfolio = props.userPortfolio;
    return (
        <Card className="position-relative portfolio-card">
            <Row className="m-3">
                <Col  sm="8">
                    <div className="d-flex align-items-center mb-7">
                        <Card.Img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"     
                            className="rounded-circle mr-3"
                            alt={ userPortfolio?.portfolio?.investor?.name}
                            style={{ width: '50px', height: '50px' }} />
                        <Card.Title as="h4"> { t('Welcome') } { userPortfolio?.portfolio?.investor?.name}</Card.Title>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="card-detail px-2 border-muted border-opacity-10">
                            <Card.Title as="h3" className="card-currency"> { userPortfolio?.marketValue.toFixed(3)} </Card.Title>
                            <Card.Subtitle>{ t('Portfolio Value') }</Card.Subtitle>
                        </div>
                        <div className="card-detail px-2 border-muted border-opacity-10">
                            <Card.Title as="h3" className="card-currency"> { userPortfolio?.portfolio?.investor?.currencyCode} </Card.Title>
                            <Card.Subtitle>{ t('Investor Account Currency') }</Card.Subtitle>
                        </div>
                        <div className="px-2">
                            <Card.Title as="h3" className="card-currency"> { userPortfolio?.currencyCode} </Card.Title>
                            <Card.Subtitle>{ t('Valuation Currency') }</Card.Subtitle>
                        </div>
                    </div>
                </Col>
                <Col sm="4">
                    <div className="welcome-bg-img mb-n7 text-end">
                        <Card.Img src="../images/welcome-bg.svg"  />
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default PortfolioDetail;
