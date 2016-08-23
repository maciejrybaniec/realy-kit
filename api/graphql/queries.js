import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import UserModel from './models/User';
import userType from './types/user';

export default {
    user: {
        type: userType,
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            return UserModel.findById(params.id).exec();
        }
    },
    /*
     * Sample query for users fetching.
     * { "query": "{users{id, name}}" }
     */
    users: {
        type: new GraphQLList(userType),
        resolve: (root, params, options) => {
            return UserModel.find().exec();
        }
    }
}
