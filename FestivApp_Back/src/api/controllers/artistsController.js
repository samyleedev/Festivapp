import { Artist } from "../models/index.js";

export const addArtist = (req, res, next) => {
  const newArtist = new Artist({
    name: req.body.name,
    description: req.body.description,
    image_path: req.body.image_path,
    event_id: req.body.event_id,
  });

  newArtist.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

export const updateArtist = (req, res, next) => {
  const artistUpdated = {
    name: req.body.name,
    description: req.body.description,
    image_path: req.body.image_path,
    event_id: req.body.event_id,
  };

  Artist.findByIdAndUpdate(
    req.params.id,
    { $set: artistUpdated },
    { new: true }
  )
    .then((docs) => res.send(docs))
    .catch((err) => console.log(err));
};

export const removeArtist = (req, res, next) => {
  Artist.findByIdAndDelete(req.params.id)
    .then((docs) => res.send(docs))
    .catch((err) => console.log(err));
};

export const findAllArtists = (req, res, next) => {
  Artist.find()
    .then((artists) => res.status(200).json(artists))
    .catch((error) => res.status(404).json({ error }));
};

export const findOneArtist = (req, res, next) => {
  Artist.findById(req.params.id)
    .then((artist) => res.status(200).json(artist))
    .catch((error) => res.status(404).json({ error }));
};
