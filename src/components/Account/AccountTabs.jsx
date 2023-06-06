import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Tabs,
    Tab,
    Col,
    Row,
    Container,
    Form,
    Image,
    Button
  } from "react-bootstrap";
import DragAndDropImage from "./DragAndDropImage";

function AccountTabs() {
    const { t } = useTranslation();
    const [key, setKey] = useState('profile');
    const [files, setFiles] = useState('');

    const handleChangeStatus = async ({ meta, file }, status) => {
        if (status === "done") {
            const { previewUrl } = meta;
            setFiles(previewUrl)
        }
    }

    const Preview = ({ meta, files }) => {
        return ''
    }
    
    return (
        <Tabs
            id="tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 mt-3 justify-content-end"
        >
            <Tab eventKey="profile" title={t("My Profile")}>
                <Container className="profile-form ">
                    <Form id="my-profile">
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Personal Information") }</div>
                                <div className="card-subtitle">{ t("Update your personal detail here") }</div>
                            </Col>
                            <Col sm="7" className="profile-col">
                                
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Full Name") }</div>
                                <div className="card-subtitle">{ t("As per your legal documents") }</div>
                            </Col>
                            <Col sm="7" className="profile-col">
                                <Row>
                                    <Col md="4" className="profile-col">
                                        <Form.Label className="mb-2">{t('First Name')}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="first_name"
                                            required={true}
                                            placeholder={t('First Name')}
                                        />
                                    </Col>
                                    <Col md="4" className="profile-col">
                                        <Form.Label className="mb-2">{t('Middle Name')}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="middle_name"
                                            required={true}
                                            placeholder={t('Middle Name')}
                                        />
                                    </Col>
                                    <Col md="4" className="profile-col">
                                        <Form.Label className="mb-2">{t('Last Name')}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="last_name"
                                            required={true}
                                            placeholder={t('Last Name')}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Profile Picture") }</div>
                                <div className="card-subtitle">{ t("This will be displayed on your profile") }</div>
                            </Col>
                            <Col sm="3" className="profile-col">
                                { files &&
                                <div className="dzu-previewContainer">
                                    <Image className="dzu-previewImage rounded-circle" src={files} />
                                </div>
                                }
                            </Col>
                            <Col sm="4" className="profile-col">
                                <DragAndDropImage
                                    handleChangeStatus={handleChangeStatus}
                                    accept="image/*"
                                    Preview={Preview}
                                    maxFiles={10}
                                />
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Phone Number") }</div>
                            </Col>
                            <Col sm="7" className="profile-col">
                                <Row>
                                    <Col md="6" className="profile-col">
                                        <Form.Label className="mb-2">{t('Country')}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="country"
                                            required={true}
                                            placeholder={t('Country')}
                                        />
                                    </Col>
                                    <Col md="6" className="profile-col">
                                        <Form.Label className="mb-2">{t('Phone Number')}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="phone"
                                            required={true}
                                            placeholder={t('Phone Number')}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Email") }</div>
                            </Col>
                            <Col className="profile-col">
                                <Form.Label className="mb-2">{t('Email Adress')}</Form.Label>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    required={true}
                                    placeholder={t('Email Address')}
                                />
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Date of Birth") }</div>
                            </Col>
                            <Col className="profile-col">
                                <Form.Label className="mb-2">{t('Date of Birth')}</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </Col>
                        </Row>

                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="5" className="profile-col">
                                <div className="card-title">{ t("Address") }</div>
                            </Col>
                            <Col className="profile-col">
                                <Form.Label className="mb-2">{t('Address')}</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Address" />
                            </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="m-2">
                            <Col sm="9" className="profile-col">
                            </Col>
                            <Col className="profile-col">
                                <Button type="submit" className="submit-button">
                                    {('Submit')}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Tab>
            <Tab eventKey="bank" title={t("Bank Detail")}>
                Tab content for Bank Detail
            </Tab>
            <Tab eventKey="documents" title={t("Documents")}>
                Tab content for Documents
            </Tab>
            <Tab eventKey="investment-history" title={t("Investment History")}>
                Tab content for Documents
            </Tab>
        </Tabs>
    );
}

export default AccountTabs;
