/* @flow */

import Record from '../decorator';

import { Iterable, List, Map } from 'immutable';

function toMap(v): any {
  if (v instanceof Iterable) {
    return v.map(toMap);
  }

  if (v instanceof Record.Base) {
    return v.toMap();
  }

  return v;
}

@Record()
class User extends Record.Base {
  data: Map<string, any>;

  constructor(init: UserInit) {
    super();

    if (init) {
      this.data = Map({
        name: init.name,
        members: List(init.members),
        active: init.active || true
      });
    }
  }

  get name(): string {
    return this.data.get('name');
  }

  get members(): List<string> {
    return this.data.get('members');
  }

  get active(): bool {
    return this.data.get('active');
  }

  update(update: UserUpdate): User {
    const updated = Object.create(User.prototype);
    updated.data = this.data.merge(Map(update));
    return updated;
  }

  toMap(): Map<string, any> {
    return toMap(this.data);
  }

}

type UserUpdate = {
  name?: string;
  members?: string[];
  active?: bool;
  [key: string]: void;
};
type UserInit = {
  name: string;
  members: string[];
  active?: bool;
  [key: string]: void;
};
export default User;