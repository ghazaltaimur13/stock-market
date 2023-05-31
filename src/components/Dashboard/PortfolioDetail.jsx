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
            <Row className="m-3">
                <Col  lg="3" sm="6">
                    <Card className="portfolio-detail">
                        <Card.Body>
                            <Card.Subtitle> { t('Welcome') }</Card.Subtitle>
                            <Card.Title as="h2"> { userPortfolio?.portfolio?.investor?.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  lg="3" sm="6">
                    <Card className="portfolio-detail">
                        <Card.Body>
                            <Card.Subtitle>{ t('Portfolio Value') }</Card.Subtitle>
                            <Card.Title as="h2"> { userPortfolio?.marketValue.toFixed(3)}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3" sm="6">
                    <Card className="portfolio-detail">
                        <Card.Body>
                            <Card.Subtitle>{ t('Investor Account Currency') }</Card.Subtitle>
                            <Card.Title as="h2"> { userPortfolio?.portfolio?.investor?.currencyCode}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  lg="3" sm="6">
                    <Card className="portfolio-detail">
                        <Card.Body>
                            <Card.Subtitle>{ t('Valuation Currency') }</Card.Subtitle>
                            <Card.Title as="h2"> { userPortfolio?.currencyCode}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
}

export default PortfolioDetail;
