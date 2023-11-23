const router = require("express").Router();

const Phone = require("./../models/Phone.model");

//! the routes starts with /api/phones

router.get("/", (req, res, next) => {
  Phone.find()
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Phone.findById(id)
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.post("/newPhone", (req, res, next) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = req.body;

  Phone.create({
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

module.exports = router;
