import User from "../models/user.js";
import { v4 as uuid } from "uuid";

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = new User({
    id: uuid(),
    username: req.body.username,
    age: req.body.age,
  });
  await user.save();
  console.log(`User: ${user.username} created`);
  res.json(user);
};

export const getUser = async (req, res) => {
  const user = await User.findOne({ id: req.params.id });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.deleteOne({ id: req.params.id });
  console.log(`User: ${req.params.id} deleted`);
  res.json({ msg: `ID: ${req.params.id} deleted` });
};

export const updateUser = async (req, res) => {
  await User.findOneAndUpdate(
    { id: req.params.id },
    { username: req.body.username, age: req.body.age }
  );

  res.json({ msg: `User: ${req.body.username} updated` });
};
