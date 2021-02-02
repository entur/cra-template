import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
} from 'react-router-dom'

import { SideNavigation, SideNavigationItem } from '@entur/menu'

import Help from './pages/Help'
import Home from './pages/Home'
import Info from './pages/Info'

import './App.css'

const Menu = () => {
    const location = useLocation()

    return (
        <SideNavigation>
            <SideNavigationItem
                as={Link}
                to="/"
                active={location.pathname === '/'}
            >
                Hjem
            </SideNavigationItem>
            <SideNavigationItem
                as={Link}
                to="/info"
                active={location.pathname === '/info'}
            >
                Informasjon
            </SideNavigationItem>
            <SideNavigationItem
                as={Link}
                to="/hjelp"
                active={location.pathname === '/hjelp'}
            >
                Hjelp
            </SideNavigationItem>
        </SideNavigation>
    )
}

function App() {
    return (
        <Router>
            <div className="app">
                <Menu />
                <div className="app-wrapper">
                    <Switch>
                        <Route path="/info">
                            <Info />
                        </Route>
                        <Route path="/hjelp">
                            <Help />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
