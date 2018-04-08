
class Users {

  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUserBySocketId(socketId) {

    let userToRemoveIndex = this.users.findIndex((user) => {
      return user.socketId == socketId;
    });
    if (userToRemoveIndex != -1) {
      var user = this.users[userToRemoveIndex];
      this.users.splice(userToRemoveIndex, 1);
      return user;
    }

  }

}

module.exports = {
  Users
}
