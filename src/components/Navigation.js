import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap"


function Navigation(props) {
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })
    const mystyle = {
        background: "#1E5214",
        width: "80%"
    }
    let mask = { width: "100%", opacity: 0.5 }
    return (
        <nav className="">
            <span>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key} style={props}
                        className="fixed-top bg-dark h-100"
                        onClick={() => setShowMenu(false)}
                        // eslint-disable-next-line
                        style={mask}
                    >
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key} style={props}
                        className="fixed-top shadow h-100 p-3"
                        // eslint-disable-next-line
                        style={mystyle}
                    >
                        <span className="font-weight-bold">
                            Cypherspot
                        </span>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent">
                                <Link to="/" onClick={() => setShowMenu(false)} className="text-white">
                                    Me
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent" >
                                <Link to="/project" onClick={() => setShowMenu(false)} className="text-white">
                                    Project
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">
                                <Link to="/education" onClick={() => setShowMenu(false)} className="text-white">
                                    Education
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </animated.div>
                )
            }

        </nav>
    );
}

export default Navigation;