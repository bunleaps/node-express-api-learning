import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
