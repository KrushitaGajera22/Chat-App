const expect = require("expect").default;

const { Users } = require("./users");

describe("Users", () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "hii",
        room: "sacczczfdcxcxc",
      },
      {
        id: "2",
        name: "hiii",
        room: "awfsasfsCzsdqrFASCZX",
      },
      {
        id: "3",
        name: "hiiiiiiiii",
        room: "sacczczfdcxcxc",
      },
    ];
  });

  it("should add new user", () => {
    let users = new Users();
    let user = {
      id: "dfddczxc",
      name: "adfcaf",
      room: "sacczczfdcxcxc",
    };

    let reUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should return names for sacczczfdcxcxc", () => {
    let userList = users.getUserList("sacczczfdcxcxc");

    expect(userList).toEqual(["hii", "hiiiiiiiii"]);
  });

  it("should return names for awfsasfsCzsdqrFASCZX", () => {
    let userList = users.getUserList("awfsasfsCzsdqrFASCZX");

    expect(userList).toEqual(["hiii"]);
  });

  it("should find user", () => {
    let userID = "2";
    user = users.getUser(userID);

    expect(user.id).toBe(userID);
  });

  it("should not find user", () => {
    let userID = "120";
    user = users.getUser(userID);

    expect(user).toBeUndefined();
  });

  it("should not remove a user", () => {
    let userID = "102",
      user = users.removeUser(userID);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it("should remove a user", () => {
    let userID = "1",
      user = users.removeUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });
});
