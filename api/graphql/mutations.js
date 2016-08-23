import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import UserModel from './models/User';
import userInputType from './types/userInput';

export default {
    /*
     * Sample mutation for add user.
     * {
     *    "query": "mutation ($data: UserInput!) { addUser(data: $data) }",
     *        "variables": {
     *           "data": {
     *              "name": "Maciej Rybaniec"
     *           }
     *        }
     * }
     */
    addUser: {
        type: GraphQLBoolean,
        args: {
          data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
          }
        },
        resolve(root, params, options) {
          const userModel = new UserModel(params.data);
           userModel.save((error) => {
              if (error) {
                  throw new Error('Error adding user');
              }
           });

          return true;
        }
    }
}
