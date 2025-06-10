const mongoose = require("mongoose");
const { use } = require("react"); 

const userschema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

const user=mongoose.model("user",usermodel)
module.exports=user