import React from 'react';
import Nav from "../components/Nav"
import LargeHome from "../subpage/LargeHome"
import { Container, Row, Col } from "react-bootstrap"

function Home(props) {
    return (
        <div>
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12} md={3} className="">
                        <Nav />
                    </Col>
                    <Col xs={12} md={9} className="pb-5">
                        <LargeHome />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;