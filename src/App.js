import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Education from "./pages/Education"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { BreakpointProvider } from 'react-socks'
import Resume from "./components/Resume"


export default class App extends React.Component {
  render() {
    const nop = {
    margin:0,
    padding:0,
    "overflowX": "hidden",
    width: "100%",
    background: "#0B132B",
    color: "#F5F7F3"
  }
    return (
      <div 
      // eslint-disable-next-line
      style={nop}>
        <BreakpointProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </BreakpointProvider>
      </div>
    )
  }
}
