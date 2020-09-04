import React from 'react';
import Nav from "../components/Nav"
import { Container, Row, Col } from "react-bootstrap"
import LargeEducation from "../subpage/LargeEducation"

function Education(props) {
    return (
        <div>
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12} md={3}>
                        <Nav />
                    </Col>
                    <Col xs={12} md={9} className="pb-5">
                        <LargeEducation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Education;