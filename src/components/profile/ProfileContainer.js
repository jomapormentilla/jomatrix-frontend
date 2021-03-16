import React from 'react'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'

import Edit from './Edit'

const Profile = () => {

    let { path, url } = useRouteMatch()
    
    return(
        <div className="profile">
            <div>
                <Link to={`${ url }/edit`}>edit</Link><br />
                <Link to={`${ url }/test`}>test</Link><br />

                <Switch>
                    <Route exact path={ path }>
                        Profile<br />
                    </Route>

                    <Route path={`${ path }/edit`}>
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

// class Profile extends React.Component {
//     render(){
//         let { path, url } = useRouteMatch()
//         return(
//             <div className="profile">
//                 <Switch>
//                     <Route exact path={ path }>
//                         Profile
//                     </Route>
//                     <Route path={`${ path }/test`}>
//                         Test
//                     </Route>
//                 </Switch>
//             </div>
//         )
//     }
// }

export default Profile