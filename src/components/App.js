import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './users/userList';
import GoogleAuth from './auth/googleAuth';
import UserDetails from './users/userDetails';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="ui header blue">Employees Dashboard</h1>
                {/* <button className="ui right floated button"> Login </button> */}
                <GoogleAuth />

                <div><h2 className="ui header blue">List of Employees</h2></div>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={UserList} />
                        <Route path='/user/create' exact component={UserDetails} />
                        <Route path='/user/update/:id' exact component={UserDetails} />
                    </div>
                    <div>
                        {/* <button className="ui button" type="submit" onClick={this.props.history.push('/user/create')}>
                        Create New User</button> */}
                    </div>
                </BrowserRouter>


            </div>

        );
    }
};

export default App;