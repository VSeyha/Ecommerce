const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
    username: String,
    password: String,
    email: String,
   },
   {
    collection: "userInfo"
   }
)

mongoose.model("userInfo", user);