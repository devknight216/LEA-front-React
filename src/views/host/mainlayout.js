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
                    <Route exact path="/host" component={HostCreateNewPropertypage}/>
                </Switch>
            <FooterComponent/>
        </div>
    )
}

export default HostMainLayoutPage
