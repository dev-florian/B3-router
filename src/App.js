import React, {Component} from 'react';
import fun from './pages/Fun';
import about from './pages/About';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to={"/fun"}>FUN</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>ABOUT</Link>
                    </li>
                </ul>
                <Route path="/fun" component={fun} />
                <Route path="/about" component={about} />
            </div>
            </Router>
        );
    }
}

export default App;
