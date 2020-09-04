import React from 'react';
import { Link } from "react-router-dom"


function Nav(props) {
    const mystyle = {
        background: "#1E5214"
    }
    return (
        <div className="min-vh-100 d-none d-md-block position-fixed col-3 mt-5"
            style={mystyle}
        >
            <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item bg-transparent">
                    <Link to="/" className="text-white">
                        Me
                    </Link>
                </li>
                <li className="list-group-item bg-transparent">
                    <Link to="/project" className="text-white" >
                        Project
                    </Link>
                </li>
                <li className="list-group-item bg-transparent">
                    <Link to="/education" className="text-white">
                        Education
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;