import React from 'react';
import Bio from "../components/Bio"
import { Container, ListGroup } from "react-bootstrap"

function LargeEducation(props) {
    return (
        <div>
            <Bio />
            <Container>
                <h3 className="p-2">Education</h3>
                <Container>
                    <h4>Coursera</h4>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">Introduction to Data Science in Python</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Python for Everbody</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Specialisation in Django</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Udemy</h4>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">Take off with data science python</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Python modules</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Javascript and Django</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Edx</h4>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">HTML and CS3</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Git</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Python</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Django</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Migration and Modelling</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Javascript</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Sql</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">User Interface</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Scalability and Security</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Codecademy</h4>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">HTML and CS3</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Javascript</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">React Js</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Sololearn</h4>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">HTML and CS3</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Git</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Python</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Javascript</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">React Js</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Sql</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>University of Ibadan</h4>
                    <p>Bachelor degree in Technology</p>
                    <small>Industrial and Production Engineering</small>
                    <div>
                        <p>other:</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">Bootstrap 4</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">React Bootstrap</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">ES6 Javascript</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">flask</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Flask sqlalchemy</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Object Oriented Programming</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default LargeEducation;