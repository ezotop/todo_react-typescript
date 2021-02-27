import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => { // FunctionComponent   
    return (
        <Router>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={TodosPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
