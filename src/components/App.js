// Imports
//////////

// Base dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Navbar } from './navbar/Navbar';
import { Overview } from './overview/Overview';

// Styling
import '../assets/css/App.css';


// App component
////////////////

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container-fluid mt-4 mb-4">
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Overview }/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}


// Export
/////////

export default App;
