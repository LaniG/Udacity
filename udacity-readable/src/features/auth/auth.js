export class Auth {
  users = [
    {
      firstName: "Dwyane",
      lastName: "Johnson",
      username: "Rock"
    },
    {
      firstName: "Kevin",
      lastName: "Hart",
      username: "funny"
    },
    {
      firstName: "Jack",
      lastName: "Sparrow",
      username: "pirate"
    },
    {
      firstName: "James",
      lastName: "Bond",
      username: "007"
    }
  ];

  _getUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  get fullName() {
    const user = this._getUser();
    return `${user.firstName} ${user.lastName}`;
  }
}

const auth = new Auth();
export default auth;
