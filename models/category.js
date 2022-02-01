const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: [true, "Name required"],
  },
});

//Exportar modelo
const Category = mongoose.model("Category", categorySchema);
export default Category;
