
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavTopBar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

const AuthedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('accessToken');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

   
    if(isLoggedIn){
        return (
            <React.Fragment>
                <NavTopBar changeCurrency={props.changeCurrency} />
                <Row className="m-0 main-area">
                    <Col xs={12} sm={12} md={4} lg={2} id="sidebar-wrapper" className="left-bar  pb-4">      
                        <Sidebar />
                    </Col>
                    <Col xs={12} sm={12}  md={8} lg={10} id="page-content-wrapper" className="py-2 d-flex">
                    {
                        props.component
                    }
                    </Col>
                </Row>
            </React.Fragment>
        );
    } else{
        return;
    }
    
}
export default AuthedRoute;