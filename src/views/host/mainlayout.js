import FooterComponent from 'components/footer'
import HeaderComponent from 'components/header'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HostCreateNewPropertypage from './newproperty'

function HostMainLayoutPage() {
    return (
        <div>
            <HeaderComponent/>
                <Switch>
                    <Route exact path="/host">
                        <div>This is the host</div>
                    </Route>
                    <Route exact path="/host/new" component={HostCreateNewPropertypage}/>
                </Switch>
            <FooterComponent/>
        </div>
    )
}

export default HostMainLayoutPage
