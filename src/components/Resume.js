import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import Nav from "./Nav"
import { Breakpoint } from 'react-socks';

function Resume(props) {
    return (
        <div>
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12} md={3} className="">
                        <Nav />
                    </Col>
                    <Col xs={12} md={9} className="pb-5 mt-3">
                        <Breakpoint medium up>
                            <Container>
                                {/* <div class=""> */}
                                <embed src={require("../media/paul_malta.pdf")} class="embed-responsive-item"
                                    type="application/pdf" scrolling="auto" width="100%" height="1200px" />
                                {/* </div> */}
                            </Container>
                        </Breakpoint>
                        <Breakpoint medium down>
                            <Container>
                                {/* <div class=""> */}
                                <embed src={require("../media/paul_malta.pdf")} class="embed-responsive-item fluid"
                                    type="application/pdf" scrolling="auto" width="100%" height="1000px" />
                                {/* </div> */}
                            </Container>
                        </Breakpoint>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;