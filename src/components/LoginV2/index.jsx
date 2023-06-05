import React, {useState} from "react";
import { getUserLogin } from "services/LoginService";
import {Row, Form, Col, Button, FormControl, Card, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "contexts/AuthContext";     

function LoginV2() {
    const { t } = useTranslation();
    const [error, setError] = useState(null);
    const [validated, setValidated] = useState(false);

    const { setAuthToken, setUsername, login } = useAuth();
    
    const handleInputs = (event) => {
        setError(null)
    };

    const postLogin = async (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        const formData = new FormData(event.target),
            formDataObj = Object.fromEntries(formData.entries())
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        try {
            const res = await getUserLogin(formDataObj);
            
            //user pin not used so far
            if (res?.error) {
                throw new Error(res.error);
            }

            if (res?.status === 401) {
                return setError('Invalid Credentials');
            }

            setError(null);
            const {
                userData,
                token
            } = res;
            
            if (userData?.username) {
                await setUsername(userData?.username);
            }
            if (token) {
                await setAuthToken(token);
                await login();
            }

            if (userData?.username && token) {
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
            <Card className="login-card">
                <Card.Header>
                    <h3>{t("Login")}</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form validated={validated} onSubmit={postLogin} className="form">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Form.Group className="my-2" controlId="username">
                                    <Form.Label className="mb-2">{t('Username')}</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i class="fas fa-user"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="text"
                                            placeholder={t("Username_Placeholder")}
                                            name="username"
                                            required={true}
                                            onChange={handleInputs}
                                        />
                                    </InputGroup>    
                                    <FormControl.Feedback type="invalid">
                                        {t("Username_Error")}
                                    </FormControl.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col  xs={12} sm={12} md={12} lg={12}>
                                <Form.Group className="my-2" controlId="Password">
                                    <Form.Label className="mb-2">{t('Password')}</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i class="fas fa-key"></i>
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="password"
                                            placeholder={t("Password_Placeholder")}
                                            name="password"
                                            required={true}
                                            onChange={handleInputs}
                                        />
                                    </InputGroup>  
                                    <FormControl.Feedback type="invalid">
                                        {t("Password_Error")}
                                    </FormControl.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <div className="error">{error}</div>
                        </Row>
                        <Row className="my-4">
                            <Col xs={12} sm={12} md={12} lg={12} className="text-right">
                                <Button type="submit" className="submit-button">
                                    {('Login')}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
    );
}

export default LoginV2;
