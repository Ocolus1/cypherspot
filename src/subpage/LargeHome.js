import React from 'react';
import Bio from "../components/Bio"
import { Container, Badge, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faFacebookSquare , faTwitterSquare} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

function LargeHome(props) {
    const mystyle = {
        background: "#26C485"
    }
    return (
        <div>
            <Bio />
            <Container>
                <Container>
                <h4>About Me</h4>
                <div>
                    <p>
                        I’m an innovative software developer with 
                        3 years of experience managing all aspects 
                        of the development process for small to medium-sized companies.
                    </p>
                    <p>
                        I'd love the chance to work with you as developer
                        because I know I have the skills to manage complicated 
                        projects and I'd like to do that for your company.
                    </p>
                </div>
                <hr />
                </Container>
                <Container>
                <h4>Skills</h4>
                <div>
                    <Badge className="p-3 m-2" style={mystyle}>HTML5</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>CSS3</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>JAVASCRIPT</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>REACT JS</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>PYTHON</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>DJANGO</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>FLASK</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>SQL</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>BOOTSTRAP</Badge>
                    <Badge className="p-3 m-2" style={mystyle}>REACT BOOTSTRAP</Badge>
                </div>
                <hr />
                </Container>
                <Container>
                    <h4>Profile</h4>
                    <ListGroup horizontal>
                        <a href="https://www.linkedin.com/in/paul-awolesi-b4150a183/" rel="noopener noreferrer" className="m-2" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://www.facebook.com/paul.awolesi.7/" rel="noopener noreferrer" className="m-2 " target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                        </a>
                        <a href="https://twitter.com/PAwolesi" rel="noopener noreferrer" className="m-2 " target="_blank">
                            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                        </a>
                        <a href="mailto:awolesiboluwatife@gmail.com" rel="noopener noreferrer" className="m-2 ">
                            <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
                        </a>
                    </ListGroup>
                </Container>
            </Container>
        </div>
    );
}

export default LargeHome;