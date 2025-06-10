const mongoose = require("mongoose");
const { use } = require("react");

const productschema = mongoose.Schema({
  image: String,
  name: String,
  price: number,
  discount: {
    type: number,
    default: 0,
  },
  bgcolor:String,
  panelcolor:String,
  textcolor:String,
});

const product=mongoose.model("product",productmodel)
module.exports=product