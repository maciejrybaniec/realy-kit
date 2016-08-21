import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    users: (Component) => Relay.QL`
        query UsersQuery {
          users { ${Component.getFragment('users')} },
        }
    `,
  };
  static routeName = 'MainRoute';
}
