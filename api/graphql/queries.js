import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

import UserModel from './models/User';
import userType from './types/user';
import userListType from './types/userList';


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
     * { query={ userList{ users{ name, id } } } }
     */
    userList: {
        type: userListType,
        resolve(root, params, options) {
            return {
                users: UserModel.find().exec()
            };
        }
    },
}
