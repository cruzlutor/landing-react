/* jslint esnext: true */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './utils/history';
import App from './components/App';
import Search from './components/Search';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

class Main extends React.Component{
    render(){
        return (
            <Router history={history} >
                <Route path="landing-react/src/" component={App} >
                    <IndexRoute component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));