import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './users/userList';
import GoogleAuth from './auth/googleAuth';
import UserDetails from './users/userDetails';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalLikes:100,
            totalDislikes:25,
            isLikeActive:true,
            isDislikeActive:true,

        }
    }

    handleLikeClick = () => {
        this.setState({
            totalLikes: this.state.isLikeActive?this.state.totalLikes+1:this.state.totalLikes-1, 
            isLikeActive:this.state.isLikeActive?false:true
        })
    }

    handleDislikeClick = () => {
        this.setState({
            totalDislikes: this.state.isDislikeActive?this.state.totalDislikes+1:this.state.totalDislikes-1,
            isDislikeActive:this.state.isDislikeActive?false:true
        })
    }

    render() {

        const activeButton = {color:"yellow"};
        const disableButton = {color:"grey"};
        return (
            <div>
                <div>Current Count likes: {this.state.totalLikes}</div>
                <div>Current Count dislikes: {this.state.totalDislikes}</div>
                <button style = {this.state.isLikeActive?activeButton:disableButton} onClick={this.handleLikeClick}>Like</button>
           
                <button style = {this.state.isLikeActive?activeButton:disableButton} onClick={this.handleDislikeClick}>Dislike</button>

                </div>
            

        );
    }
};

export default App;

/** 
 *  <h1 className="ui header blue">Employees Dashboard</h1>
                {/* <button className="ui right floated button"> Login </button> }
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
                        Create New User</button> }
                    </div>
                </BrowserRouter> 
*/