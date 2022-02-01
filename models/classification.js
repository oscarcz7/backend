const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const esrbSchema = new Schema({
  esrbCode: {
    type: String,
    required: [true, "Code required"],
  },
  esrbAge: {
    type: Number,
  },
});

//Exportar modelo
const Classification = mongoose.model("Classification", esrbSchema);
export default Classification;
