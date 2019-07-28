import React from 'react';
import { connect } from 'react-redux';
import { getUserByUserID, createUser, updateUser, resetUserState } from '../../actionCreator/users'


export class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', companyName: '', roleName: '' };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        if (userId) {
            this.props.getUserByUserID(userId);
        } //else {
        //     this.setState()
        // }
    }

    handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    renderUserDetails() {
        const { userDet } = this.props;
        return (<form className="ui form">
            <div className="field">
                <label>User</label>

                <input type="text" id="userName" name="userName"
                    placeholder="User Name" onChange={this.handleChange}
                    value={this.state.userName || userDet.name} />
            </div>
            <div className="field">
                <label>Company Name</label>
                <input type="text" id="companyName" name="companyName"
                    placeholder="Company Name" onChange={this.handleChange}
                    value={this.state.companyName || userDet.company} />
            </div>
            <div className="field">
                <label>Role</label>
                <input type="text" name="roleName" placeholder="Role" id="roleName"
                    onChange={this.handleChange}
                    value={this.state.roleName || userDet.role} />
            </div>
            <div>
                <button className="ui button" id = "submitButton" type="submit" onClick={this.submitUserDetails}>Submit</button>
                <button className="ui button" id = "cancelButton" type="button" onClick={this.cancelUpdation}>Cancel</button>
            </div>
        </form>);
    };


    render() {
        return (this.renderUserDetails());
    };

    componentDidUpdate() {

        if (this.props.isUserCreated || this.props.isUserUpdated) {
            this.props.resetUserState();
            this.props.history.push('/');
        }
    };

    cancelUpdation = () => {
        this.props.resetUserState();
        this.props.history && 
        this.props.history.push('/');
    }

    submitUserDetails = (e) => {
        e.preventDefault();
        const { userDet } = this.props;
        const newUser = {
            name: this.state.userName || userDet.name,
            role: this.state.roleName || userDet.role,
            company: this.state.companyName || userDet.company
        }

        if (this.props.location && this.props.location.pathname.includes('create')) {
            this.props.createUser(newUser);
        } else {
            newUser.id = this.props.match.params.id;
            this.props.updateUser(newUser);
        }

    };

};

const mapStateToProps = (state) => {
    return {
        userDet: state.users.fetchedUser,
        isUserCreated: state.users.isUserCreated,
        isUserUpdated: state.users.isUserUpdated
    };
}
export default connect(mapStateToProps, { getUserByUserID, createUser, updateUser, resetUserState })(UserDetails);