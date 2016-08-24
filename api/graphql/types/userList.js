import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} from 'graphql';

import userType from './user';

export default new GraphQLObjectType({
  name: 'UserList',
  fields: {
      users: {
          type: new GraphQLList(userType)
      }
  }
});
