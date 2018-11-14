import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receiveUsers} from '../actions/users';
import {
  getCurrentUser,
  setCurrentUser
} from '../actions/currentUser';

class Login extends Component {
  componentDidMount() {
    const {
      users,
      currentUser,
      receiveUsers,
      getCurrentUser
    } = this.props;
    !users.length && receiveUsers();
    !currentUser && getCurrentUser();
  }

  onchange = ({target: {name, value}}) => {
    const {setCurrentUser} = this.props;
    switch (name) {
      case 'user':
        setCurrentUser(value);
        break;
      default:
        this.setState({[name]: value});
        break;
    }
  };

  render () {
    const {
      users,
      currentUser
    } = this.props;
    return (
      <select
        name="user"
        className="login"
        value={currentUser}
        onChange={this.onchange}
      >
        <option value="" disabled>
          Choose user
        </option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps ({users, currentUser}) {
  return {
    users,
    currentUser
  };
}

function mapDispatchToProps (dispatch) {
  return {
    receiveUsers: () => dispatch(receiveUsers()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
