import React from 'react';
import { Media, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

function MediumBio(props) {
    let p = props.myprops
    return (
        <div >
            <Row>
                <Col xs={12} md={9} >
                    <Media>
                        <img width={"250px"}
                            height={"250px"}
                            className="mr-3"
                            src={require("../media/Paul.jpg")}
                            alt="Paul"
                        />
                        <Media.Body className="text-wrap" >
                            <div className="p-0" >
                                <h5> Paul Awolesi </h5>
                                <h6> Software Developer and Data Analyst </h6>
                            <p><small> awolesiboluwatife@gmail.com </small></p >
                            <p> +1-(917)-338-2426 </p>
                                <p>
                                    <a href="http://www.cypherspot.xyz"
                                        className="text-white"
                                        rel="noopener noreferrer"
                                        target="_blank" > www.cypherspot.xyz </a>
                                </p >
                                <p> Canada </p>
                            </div>
                        </Media.Body>
                    </Media>
                </Col>
                <Col xs={12} md={3} >
                    <Link to="/resume">
                        <Button variant="outline-success"
                            className="p-2 px-4"
                            title="View my resume"
                            style={p.col}
                            onMouseOver={() => p.setCol(p.col = p.after)}
                            onMouseLeave={() => p.setCol(p.col = p.before)}
                        >Resume< FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
                        </Button > {' '}
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default MediumBio;