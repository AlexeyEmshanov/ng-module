import * as fromUsers from './users.actions';

describe('loadUserss', () => {
  it('should return an action', () => {
    expect(fromUsers.getUsers().type).toBe('[Users] Get Userss');
  });
});