import React, {  useEffect, useState } from "react";
import { getUserPortfolio } from "services/UserInfoService";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col,
    Card
  } from "react-bootstrap";
import moment from "moment";

function Account() {
    const { t } = useTranslation();
    const userToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    const currency = localStorage.getItem('currency');
    const [userPortfolio, setUserPortfolio] = useState(false);

    const fetchData = async () => {
        const res = await getUserPortfolio(userToken, currency, false);
        setUserPortfolio(res);
        return res;
    }
    useEffect(() => {
        fetchData();
    }, [currency]);

    return (
        <div className="container-fluid p-0 w-100">
            <Row className="m-3">
                <Col>
                    <div className="header-title text-capitalize">
                        { t('Hello') + " "+username}
                    </div>
                    <div className="header-sub-title text-capitalize">
                        { moment().format('MMMM Do YYYY, h:mm:ss a') }
                    </div>
                </Col>
            </Row>
            <Row className="m-2">
                <Col>
                    <Card className="card-profile">
                        <Card.Body>
                            <Card.Img src="../images/profilebg.jpg"></Card.Img>
                            <Row className="align-items-center">
                                <Col lg="4">
                                    <div class="d-flex align-items-center">
                                        <div class="text-center m-3">
                                            <i class="fa fa-thin fa-money-bill-trend-up icon"></i>
                                            <Card.Title className="mt-3">{ userPortfolio?.marketValue?.toFixed(2)}</Card.Title>
                                            <Card.Subtitle>{ t("Value")}</Card.Subtitle>
                                        </div>
                                        <div class="text-center  m-3">
                                            <i class="fa fa-thin fa-coins icon"></i>
                                            <Card.Title className="mt-3">{ userPortfolio?.currencyCode }</Card.Title>
                                            <Card.Subtitle>{ t("Currency")}</Card.Subtitle>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" className="profile-center-area">
                                    <div>
                                        <div class="d-flex align-items-center justify-content-center mb-2">
                                            <Card.Img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"     
                                                className="rounded-circle mr-3"
                                                style={{ width: '100px', height: '100px' }} />
                                        </div>
                                        <div class="text-center">
                                            <Card.Title>{ userPortfolio?.portfolio?.investor?.name }</Card.Title>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4">
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Account;
