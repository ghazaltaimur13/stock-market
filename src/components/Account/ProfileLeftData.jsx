import React from "react";
import { useTranslation } from "react-i18next";
import {
    Card
  } from "react-bootstrap";

function ProfileLeftData(props) {
    const { t } = useTranslation();
    let userPortfolio = props?.userPortfolio;

    return (
        <div className="d-flex align-items-center">
            <div className="text-center m-3">
                <i className="fa fa-thin fa-money-bill-trend-up icon"></i>
                <Card.Title className="mt-3" as="h6">{ userPortfolio?.marketValue?.toFixed(2)}</Card.Title>
                <Card.Subtitle>{ t("Value")}</Card.Subtitle>
            </div>
            <div className="text-center m-3">
                <i className="fa fa-thin fa-coins icon"></i>
                <Card.Title className="mt-3" as="h6">{ userPortfolio?.currencyCode }</Card.Title>
                <Card.Subtitle>{ t("Currency")}</Card.Subtitle>
            </div>
        </div>
    );
}

export default ProfileLeftData;
