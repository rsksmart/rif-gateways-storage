import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "routes";

// views
import Home from "views/Home";
import Download from "views/Download";
import Upload from "views/Upload";
import Uploading from "views/Uploading";
import Settings from "views/Settings";
import Profile from "views/Profile";
import Example from "views/Example";
import NotFound from "views/NotFound";

export default () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route exact path={ROUTES.DOWNLOAD} component={Download} />
    <Route exact path={ROUTES.UPLOAD} component={Upload} />
    <Route exact path={ROUTES.UPLOADING} component={Uploading} />
    <Route exact path={ROUTES.SETTINGS} component={Settings} />
    <Route exact path={ROUTES.PROFILE} component={Profile} />
    <Route exact path={ROUTES.EXAMPLE} component={Example} />

    <Route component={NotFound} />
  </Switch>
);
