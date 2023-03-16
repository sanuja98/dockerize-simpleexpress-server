import { v4 as uuidv4 } from "uuid";

import { UserModel } from "../models/user.js"

let users = [
  // {
  //   firstName: "Kalum",
  //   lastName: "Galmangoda",
  //   age: "29",
  // },

  // {
  //   firstName: "Yureshi",
  //   lastName: "Karawita",
  //   age: "29",
  // },
];

export const getUsers = async (req, res) => {
  console.log(users);

  const allUsers = await UserModel.find();
  res.send(allUsers);
  //   res.send("Hellooes");
};

export const createUser = async (req, res) => {
  const userT = req.body;
  console.log(userT)
  const newUser = new UserModel(userT)
  console.log(newUser)

  await newUser.save();





  //   const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  //   const userWithId = { ...user, id: uuidv4() };


  res.send(newUser);
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  // const foundUser = users.find((userT) => userT.id === id);
  const foundUser = await UserModel.findById(id);

  res.send(foundUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  // users = users.filter((user) => user.id != id);
  const deletedUser = await UserModel.findByIdAndDelete(id);
  console.log("deleted_____"  , deletedUser)

  res.send(`User with id: ${id} deleted from the database`);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  // const { firstName, lastName, age } = req.body;

  // const userToBeUpdates = users.find((user) => user.id === id);

  // if (firstName) userToBeUpdates.firstName = firstName;
  // if (lastName) userToBeUpdates.lastName = lastName;
  // if (age) userToBeUpdates.age = age;

  console.log({id})
  await UserModel.findByIdAndUpdate(id , req.body);  
    const updatedUser = await UserModel.findById(id);

  res.send(`User with the id: ${id} has been updated`);
};
