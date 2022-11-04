import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
episode_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Episode" },
  time: { type: String, required: true, maxlength: 50 },

});
export default mongoose.model("Stream", schema);