import {
    GraphQLObjectType,
    GraphQLList
    GraphQLString
} from 'graphql';

import userType from './user';

export default new GraphQLObjectType({
  name: 'Users',
  fields: {
      users: {
          type: new GraphQLList(userType)
      }
  }
});
