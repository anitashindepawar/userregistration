import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actionCreator/auth';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '727752965565-ful653fffj3qirlvrhsha0g32l5sjam8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.oAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.oAuthChange);
            });
        });
    }

    oAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    renderButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (<button className="ui red google button right floated" 
            onClick={this.auth && this.auth.signOut}><i className=" google icon" />Sign Out</button>);
        } else {
            return (<button className="ui red google button right floated" 
            onClick={this.auth && this.auth.signIn}><i className=" google icon" />Sign In with Google</button>);
        }
    }

    render() {
        return (<div>{this.renderButton()}</div>);
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);