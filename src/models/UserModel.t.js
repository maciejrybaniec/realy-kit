/* @flow */

import Record from '../decorator';

@Record()
class User {
  name: string;
  members: string[];
  active: boolean = true;
}

export default User;
