import React from 'react';
import { getUsers, deleteUser } from '../../actionCreator/users';
import { connect } from 'react-redux';
//import PopUp from '../Popup';

class usersList extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    };

    sendDeleteUserReq(userID) {
        this.props.deleteUser(userID);
    };

    render() {
        return (
            <div>
                <div className="ui inverted teal segment">
                    <div className="ui inverted teal accordion">
                        {
                            this.props.usersList && this.props.usersList.map(
                                user => {
                                    return (
                                        <div key={user.id}>
                                            <div className="title">
                                                <i className="dropdown icon"></i>{user.name}</div>
                                            <div className="active content">
                                                <table><tbody>
                                                    <tr><td>
                                                        <div>Company Name : {user.company}</div>
                                                        <div>Role : {user.role}</div>
                                                    </td>
                                                        <td><button className="ui primary button right floated"
                                                            onClick={() => { this.props.history.push('/user/update/' + user.id) }}>
                                                            Update User
                                                </button></td>
                                                        <td><button className="ui button right floated" onClick={() => { this.sendDeleteUserReq(user.id) }}>
                                                            Delete User
                                                </button></td></tr>
                                                </tbody></table>
                                            </div>
                                        </div>
                                    );
                                })}</div></div>
                <div>
                    <button className="ui button" type="submit" onClick={() => { this.props.history.push('/user/create') }}>Create New User</button>
                </div>
            </div>);
    }

}

const mapStateToProps = (state) => {
    return { usersList: state.users.dataList };
}

export default connect(mapStateToProps, { getUsers, deleteUser })(usersList);