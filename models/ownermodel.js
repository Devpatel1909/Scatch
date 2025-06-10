const mongoose = require("mongoose");
const { use } = require("react");

const ownerschema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String, 
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin:numver,
});

const user=mongoose.model("owner",ownerschema)
module.exports=user