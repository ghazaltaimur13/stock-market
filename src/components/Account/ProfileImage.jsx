import React from "react";
import {
    Card
  } from "react-bootstrap";

function ProfileImage(props) {
    let userPortfolio = props?.userPortfolio;

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center mb-2">
                <Card.Img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"     
                    className="rounded-circle mr-3"
                    style={{ width: '100px', height: '100px' }} />
            </div>
            <div className="text-center">
                <Card.Title>{ userPortfolio?.portfolio?.investor?.name }</Card.Title>
            </div>
        </div>
    );
}

export default ProfileImage;
