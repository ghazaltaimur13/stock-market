import React, {  useEffect, useState } from "react";
import { getUserPortfolio } from "services/UserInfoService";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col,
    Card
  } from "react-bootstrap";
import moment from "moment";
import ProfileImage from "./ProfileImage";
import ProfileLeftData from "./ProfileLeftData";
import AccountTabs from "./AccountTabs";

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
                                <Col md="4">
                                    <ProfileLeftData userPortfolio={userPortfolio} />
                                </Col>
                                <Col md="4" className="profile-center-area">
                                    <ProfileImage userPortfolio={userPortfolio} />
                                </Col>
                                <Col md="4">
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <AccountTabs userPortfolio={userPortfolio} />
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
