import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import UserModel from './models/User';
import userInputType from './types/userInput';
import userType from './types/user';

export default {
    /*
     * Sample mutation for add user.
     * {
     *    "query": "mutation ($input: UserInput!) { addUser(input: $input) }",
     *        "variables": {
     *           "input": {
     *              "name": "Maciej Rybaniec"
     *           }
     *        }
     * }
     */
    addUser: {
        type: userType,
        args: {
          input: {
            name: 'input',
            type: new GraphQLNonNull(userInputType)
          }
        },
        resolve(root, params, options) {
          const userModel = new UserModel(params.input);
           userModel.save((error) => {
              if (error) {
                  throw new Error('Error adding user');
              }
           });

          return {
              id: 1,
              name: 'Maciej'
          };
        }
    }
}
