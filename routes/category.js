import express from "express";
import Category from "../models/category";
const router = express.Router();
//Importar el modelo
const _ = require("underscore");
const {
  userVerification,
  adminVerification,
} = require("../authentication/authentication.js");

router.post("/newCategory", async (req, res) => {
  const body = {
    categoryName: req.body.categoryName,
  };

  try {
    const categoryDB = await Category.create(body);
    res.status(200).json(categoryDB);
  } catch (e) {
    return res.status(500).json({
      message: "Error al crear Usuario",
      e,
    });
  }
});

router.get("/category", [], async (req, res) => {
  try {
    const categoryDB = await Category.find();
    res.json(categoryDB);
  } catch (e) {
    return res.status(500).json({
      message: "Error al obtener",
      e,
    });
  }
});

module.exports = router;
