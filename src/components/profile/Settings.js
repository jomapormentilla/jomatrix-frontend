import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ProfileNav from './ProfileNav'
import Edit from './Edit'

const styles = {
    display: 'flex',
    backgroundColor: '#fff',
    width: '600px',
    minHeight: '60vh'
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

                    <Route path={`${ path }/:test`}>
                        Test
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Settings