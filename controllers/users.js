import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  const user = {
    id: uuid(),
    username: req.body.username,
    age: req.body.age,
  };
  users.push(user);
  console.log(`User: ${user.username} created`);
  res.json(user);
};

export const getUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  res.json(user);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  console.log(`User: ${req.params.id} deleted`);
  res.json({ msg: `ID: ${req.params.id} deleted` });
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (user) {
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`User: ${req.body.username} updated`);
    res.json({ msg: `User: ${req.body.username} updated` });
  } else {
    res.json({ msg: `User does not exist in the database!` });
  }
};
