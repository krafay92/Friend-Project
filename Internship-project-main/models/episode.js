import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
season_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Season" },
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 50 },
  image:{ type: String,  maxlength: 50 },

});
export default mongoose.model("Episode", schema);