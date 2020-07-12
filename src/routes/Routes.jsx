import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import DutyPage from "@/pages/Duty";
import DutyAdmin from '@/pages/DutyAdmin';
import AppState from "@/pages/AppState";
import FlowSubject from "@/pages/FlowSubject";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/a" component={A} />
            <Route path="/b" component={B} /> */}
        <Route exact path="/" component={DutyPage} />
        <Route path="/duty" component={DutyPage} />
        <Route path="/dutyAdmin" component={DutyAdmin} />
        <Route path="/appState" component={AppState} />
        <Route path="/flowSubject" component={FlowSubject} />
      </Switch>
    </HashRouter>
  );
}
