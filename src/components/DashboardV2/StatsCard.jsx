import React, {  useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 
import {
    Card,
    Row,
    Col,
    Image,
    Button,
    Form
  } from "react-bootstrap";

function StatsCard(props) {
    const { t } = useTranslation();
    let securityValuation = props.securityValuation;

    return (
        <Col lg="3" sm="6" key={ props.index } className="mt-2">
            <Card className="card-stats" key={ securityValuation?.security?.id }>
                <Card.Body>
                    <Row className="my-2">
                        <Col xs="9">
                            <Card.Title as="h4">{ securityValuation?.security?.symbol }</Card.Title>
                            <Card.Subtitle as="h6">{ securityValuation?.security?.name }</Card.Subtitle>
                        </Col>
                        <Col xs="3">
                            <Image src={ securityValuation?.security?.logoUrl} className="image-icon"/>
                        </Col>
                    </Row>
                    <Row className="mt-4 card-data">
                        <Col xs="6">
                            { t( 'Market Price' ) }
                        </Col>
                        <Col xs="6" className="card-green">
                            { securityValuation?.marketPrice.toFixed(3) } { props.currency }
                        </Col>
                    </Row>
                    <Row className="my-1 card-data">
                        <Col xs="6">
                            { t( 'Net Qty' ) }
                        </Col>
                        <Col xs="6" className="card-blue">
                            { securityValuation?.units }
                        </Col>
                    </Row>
                    <Row className="my-1 card-data">
                        <Col xs="6" >
                            { t( 'Market Value' ) }
                        </Col>
                        <Col xs="6" className="card-red">
                            { securityValuation?.marketValue.toFixed(3) }
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex">
                    <Form.Check 
                        className="p-2"
                        type="checkbox"
                        id={`${securityValuation?.security?.symbol}`}
                        name="securityValuation-checkbox"
                        onChange={(event) => props.securityCheckboxChange(event, securityValuation?.security?.id)}
                        checked={parseInt(props.userSecurityId) === securityValuation?.security?.id}
                    />
                    {props.userSecurityId && 
                        <Button 
                            variant="dark" 
                            className="w-75"
                            onClick={() => props.fetchSecurityData(securityValuation?.security?.id)}
                        >
                            { t('Transaction')}
                        </Button>
                    }
                    {!props.userSecurityId && 
                        <Button 
                            variant="dark" 
                            className="w-75"
                            onClick={(event) => props.securityCheckboxChange(event, securityValuation?.security?.id, true)}
                        >
                            { t('View Stock Detail')}
                        </Button>
                    }
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default StatsCard;
