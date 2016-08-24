import Relay from 'react-relay';

export default class extends Relay.Route {
    static queries = {
      userList: (Component) => Relay.QL`
          query UserListQuery {
            userList { ${Component.getFragment('userList')} },
          }
      `,
    };
  static routeName = 'MainRoute';
}
