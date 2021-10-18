import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import HomePage from '../pages/Home';
import CounterPageContainer from '../pages/CounterPage/containers/CounterPageContainer';
import { ROUTES } from './routeNames';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.COUNT_PAGE} component={CounterPageContainer}/>
            <Redirect path="*" to={ROUTES.HOME} />
        </Switch>
    );
};

export default Routes;