import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './routes/home/App.js';
import User from './routes/user/user';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/user/:userName" component={User}/>
            </Switch>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);
