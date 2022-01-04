import mongoose from "mongoose";

export function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/festivapp-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(
      (err) =>
        console.log(
          "Une erreur est survenue lors de la tentative de connexion à MongoDB. "
        ) + err
    );
}
