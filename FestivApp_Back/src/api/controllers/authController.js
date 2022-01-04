import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  const newUser = await new User({
    email,
    username,
    password,
  });

  newUser
    .save()
    .then(() => res.status(201).json({ message: "utilisateur créé!!" }))
    .catch((e) => res.status(500).json({ error }));
};

/* Middleware permettant de gérér la connexion  */
export const login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: "Utilisateur introuvable",
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: "Utilisateur ou mot de passe erroné",
            });
          }
          const token = jsonwebtoken.sign(
            { userId: user._id },
            process.env.SECRET_PASSPHRASE_TOKEN,
            { expiresIn: "24h" }
          );
          res.cookie("jwt", token, { httpOnly: true });
          res.status(200).json({
            message: "Connecté !",
            userId: user._id,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

export const logout = async (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 1 });
  // res.json({ message: "Déconnecté !" });
  res.redirect("/");
};

export const authVerification = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt;
    const decodedToken = jsonwebtoken.verify(
      token,
      process.env.SECRET_PASSPHRASE_TOKEN
    );
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      res.status(401).json({ message: "Vous n'avez pas les droits d'accès" });
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: "Veuillez vous connecter" });
  }
};
