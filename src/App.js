import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './pages/home';
import Design from './pages/design';
import Model from './pages/model';

function App() {
    return <Router>
        <Route exact path="/" component={Home} />
        <Route path="/design" component={Design} />
        <Route path="/model" component={Model} />
    </Router>
}

export default App;
