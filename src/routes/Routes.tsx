import React from "react";

import { Routes as Switch, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { locations } from "./locations";

import { Home } from "../pages/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={locations.root()} element={<Home />} />
            </Switch>
        </Router>
    );
};

export default Routes;
