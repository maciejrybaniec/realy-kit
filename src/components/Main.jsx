import React, { Component } from 'react';
import Relay from 'react-relay';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                Test
            </div>
        );
    }
}

export default Relay.createContainer(Main, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
         id,
         name
      }
    `,
  },
});
