import express, { Router } from "express";
const router = express.Router();

import User from "../models/user";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const _ = require("underscore");

//Post
router.post("/user", async (req, res) => {
  const body = {
    userName: req.body.userName,
    userLastName: req.body.userLastName,
    userEmail: req.body.userEmail,
    role: req.body.role,
  };
  body.userPassword = bcrypt.hashSync(req.body.userPassword, saltRounds);
  try {
    const userDB = await User.create(body);
    res.status(200).json(userDB); //status code & service created information
  } catch (error) {
    return res.status(500).json({
      msg: "Error occure",
      error,
    });
  }
});

router.get("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const userDB = await User.findById(_id);
    res.status(200).json(userDB); //status code & service created information
  } catch (e) {
    return res.status(500).json({
        message: "Error al obtener",
        e,
      });
  }
});

router.get("/user", async (req, res) => {
  try {
    const userDB = await User.find();
    res.json(userDB);
  } catch (e) {
    return res.status(500).json({
      message: "Error al obtener",
      e,
    });
  }
});

module.exports = router;
