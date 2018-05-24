const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'abc',
      room: 'room1'
    }, {
      id: '2',
      name: 'def',
      room: 'room2'
    }, {
      id: '3',
      name: 'xyz',
      room: 'room1'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Ad',
      room: 'wizards'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names of given room', () => {
    var userList = users.getUserNames('room1');
    expect(userList).toEqual(['abc', 'xyz']);
  });
});
