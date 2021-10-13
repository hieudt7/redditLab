import React, { useEffect, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from '../_helpers';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { HomePage } from '../Router/HomePage';
import  PageLayout  from '../_layouts/PageLayout/PageLayout';


function App() {
    useEffect(() => {
    }, []);

    return (
        <Router history={history}>
            <Suspense fallback={<div>...</div>}>
                <PageLayout>
                    <Switch>
                        <Route path="/:id" component={HomePage} />
                        <Redirect from="*" to="/DotA2" />
                    </Switch>
                </PageLayout>
            </Suspense>
        </Router>
    );
}

export { App };