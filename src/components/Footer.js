import React from "react";
import Container from "react-bootstrap/Container";


export default function Footer() {
    const mystyle = {
        background: "#1E5214",
        color: "#F5F7F3"
    }
    return (
        <div className=" text-xs fixed-bottom w-100 " style={mystyle}>
            {/* <p clasName="text-center">&copy; Cypherspot</p> */}
            <Container className="text-center">&copy; Cypherspot</Container>
        </div>
    );
}
