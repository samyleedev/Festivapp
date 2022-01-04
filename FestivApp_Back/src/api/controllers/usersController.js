import { User } from "../models/index.js";

export const findAllUsers = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(404).json({ error }));
};

export const findOneUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};
