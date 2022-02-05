import React from 'react'
import Header from './Header'
import RoutesFunk from './RoutesFunk'
import {HashRouter} from "react-router-dom";


function HW5() {

    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesFunk/>
            </HashRouter>
        </div>
    )
}

export default HW5
