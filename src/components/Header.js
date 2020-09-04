import React from "react"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "./Navigation"
import { Breakpoint } from "react-socks"

export default function Header() {
    const mystyle = {
        background: "#1E5214",
        color: "#F5F7F3"
    }
    return (
        <div className="border-bottom">
            <Navbar
                className="d-flex justify-content-between align-items-center"
                expand="lg"
                // variant="light"
                // bg="light"
                fixed="top" 
                style={mystyle}
            >
                <Container>
                    <span className="font-weight-bold">
                        <Navbar.Brand href="#" className="text-white">Cypherspot</Navbar.Brand>
                    </span>
                    <Breakpoint small down>
                        <Navigation />
                    </Breakpoint>
                </Container>
            </Navbar>
        </div>
    );
}