import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ProfileNav from './ProfileNav'
import Edit from './Edit'
import Map from '../Map'

const styles = {
    display: 'flex',
    backgroundColor: '#fff',
    width: '600px',
    minHeight: '60vh',
    height: 'fit-content'
}

const Settings = () => {
    
    let { path } = useRouteMatch()
    
    return(
        <div className="settings">
            <div style={ styles }>
                <ProfileNav />
                <Switch>
                    <Route exact path={`${ path }/edit`}>
                        <Edit />
                    </Route>
                    
                    <Route exact path={`${ path }/image`}>
                        Change Profile Picture
                    </Route>

                    <Route exact path={`${ path }/password`}>
                        Password Change
                    </Route>

                    <Route path={`${ path }/:test`}>
                        <Map />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Settings