import { Event } from "../models/index.js";

export const addEvent = (req, res, next) => {
  const newEvent = new Event({
    date: req.body.date,
    artists: req.body.artists,
  });

  newEvent.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

export const updateEvent = (req, res, next) => {
  const eventUpdated = {
    date: req.body.date,
    artists: req.body.artists,
  };

  Event.findByIdAndUpdate(req.params.id, { $set: eventUpdated }, { new: true })
    .then((docs) => res.send(docs))
    .catch((err) => console.log(err));
};

export const removeEvent = (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then((docs) => res.send(docs))
    .catch((err) => console.log(err));
};

export const findAllEvents = (req, res, next) => {
  Event.find()
    .then((events) => res.status(200).json(events))
    .catch((error) => res.status(404).json({ error }));
};

export const findOneEvent = (req, res, next) => {
  Event.findById(req.params.id)
    .then((event) => res.status(200).json(event))
    .catch((error) => res.status(404).json({ error }));
};
