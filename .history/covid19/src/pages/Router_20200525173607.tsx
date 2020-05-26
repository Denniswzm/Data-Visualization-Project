import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./Main";

const MyRouter = withRouter(({location}) => (
    <div>
    <TransitionGroup className={'router-wrapper'}>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
            <Switch location ={location}>
                <Route path="/" exact component={Main} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
  </div>

))
   
  
export default MyRouter;