import React,{useEffect} from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import shome from './Student/Student';
import Admin from './Admin/Admin';
import Mentor from './Mentor/Mentor';

function Path(){
    useEffect(() => {
        document.title = "Final Year Project Dashboard"
      }, [])
    return (
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/student" exact component = {shome} />
                <Route path="/mentor" exact component = {Mentor} />
                <Route path="/admin" exact component = {Admin} />
                </Switch>
            </div>
        </Router>
    );
}

export default Path;