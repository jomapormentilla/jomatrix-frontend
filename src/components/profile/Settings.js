import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '../Loading'
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

const Settings = (props) => {
    
    let { path } = useRouteMatch()
    
    return(
        <div className="settings">
            <div style={ styles }>
                <ProfileNav />
                <Switch>
                    <Route exact path={`${ path }/edit`} component={() => {
                        return props.currentUser === null ? <Loading /> : <Edit currentUser={ props.currentUser } />
                    }} />
                    
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

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(Settings)