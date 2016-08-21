import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    user: (Component) => Relay.QL`
        query UsersQuery {
          user { ${Component.getFragment('user')} },
        }
    `,
  };
  static routeName = 'MainRoute';
}
