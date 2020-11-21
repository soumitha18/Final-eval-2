import React from 'react'
import { Route } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { EditOrAddPolling } from "./Pages/EditOrAddPolling"
import { Polling } from "./Pages/Polling"

export const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/polling" component={Polling} />
            <Route path="/modify-polling/:name" component={EditOrAddPolling} />
        </div>
    )
}
