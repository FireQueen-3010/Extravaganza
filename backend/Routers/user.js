const express = require("express");
const User = require("../Database/models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age", "mood"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "invalid Updates!" });
  const _id = req.params.id;
  const bod = req.body;
  try {
    const user = await User.findByIdAndUpdate(_id, bod, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send();

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) return res.status(404).send("User not found!");
    res.status(200).send(user.name + " deleted successfully!");
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
