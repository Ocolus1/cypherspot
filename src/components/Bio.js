import React, { useState } from 'react';
import { Breakpoint } from "react-socks"
import MediumBio from './MeiudmBio';
import SmalBio from './SmalBio';
import {Container} from "react-bootstrap"

function Bio(props) {
    let before = {
        "background-color": "rgb(30,82,20,0.5)",
        border: "1px solid lightgreen",
        color: "white"
    }
    let after = {
        "backgroundColor": "#26C485",
        opacity: 1
    }
    let [col, setCol] = useState(before)
    const myprops = {
        after: after,
        before: before,
        col: col,
        setCol: setCol
    }
    return (
        <div className="p-0 mt-5">
            <Container >
                <Breakpoint medium up className="pt-5">
                    <MediumBio myprops={myprops}/>
                </Breakpoint>
                <Breakpoint small down className="pt-3">
                    <SmalBio myprops={myprops}/>
                </Breakpoint>
                <hr />
            </Container>
        </div>
    );
}

export default Bio;