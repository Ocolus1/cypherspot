import React from 'react';
import { Row, Col, Media, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

function SmalBio(props) {
    let p = props.myprops
    return (
        <div>
            <Row>
                <Col xs={12} md={9}>
                    < img width={"100%"}
                        height={"350px"}
                        className="mr-3 d-block p-3 img-fluid"
                        src={require("../media/Paul.jpg")}
                        alt="Paul" />
                    <Media.Body className="text-wrap d-block text-center" >
                        <div className="p-0 mr-2" >
                            <h5> Paul Awolesi </h5>
                            <h6> Software Developer and Data Analyst </h6>
                            <p><small> awolesiboluwatife@gmail.com </small></p >
                            <p> +1-(917)-338-2426 </p>
                            <p><a href="http://www.cypherspot.xyz"
                                className="text-white"
                                rel="noopener noreferrer"
                                target="_blank" >www.cypherspot.xyz </a></p >
                            <p> Canada </p>
                        </div>
                    </Media.Body>
                </Col>
                <Col xs={12} md={3} className="mt-3 text-center" >
                    <Link to="/resume">
                        <Button variant="outline-success"
                            className="py-2 px-4"
                            title="View my resume"
                            style={p.col}
                            onMouseOver={() => p.setCol(p.col = p.after)}
                            onMouseLeave={() => p.setCol(p.col = p.before)}
                        >Resume < FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2"/>
                        </Button > {' '}
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default SmalBio;