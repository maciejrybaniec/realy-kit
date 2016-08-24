import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import Relay from 'react-relay';


class CreateUserMutation extends Relay.Mutation {
    getMutation() {
        return Relay.QL`mutation { addUser }`;
    }
    getVariables() {
        return { name: this.props.name };
    }
    getConfigs() {
      return [{
        type: 'FIELDS_CHANGE',
        fieldIDs: {},
      }];
    }
    getFatQuery() {
      return Relay.QL`
        fragment on User {
            name
        }
      `;
    }
}

const UserComponent = (props) => {
    return (
        <li className="User">
            {props.user.name}
        </li>
    );
}

class Main extends Component {
    render() {
        const { userList } = this.props;
        return (
            <div className="Main">
                <ul className="Main__user-list">
                    {userList.users.map((user) => {
                       return <UserComponent key={user.id} user={user} />;
                     })}
                </ul>
                <div className="Main-user-form">
                    <input type="text" ref={(c) => this._input = c} />
                    <button onClick={this._onCreateUser} type="button">Create user</button>
                </div>
            </div>
        );
    }
    @autobind
    _onCreateUser() {
        const name = this._input.value;
        Relay.Store.commitUpdate(new CreateUserMutation({ name }));
    }
}

export default Relay.createContainer(Main, {
  fragments: {
      userList: () => Relay.QL`
        fragment on UserList {
            users { name, id }
        }
      `
  },
});
