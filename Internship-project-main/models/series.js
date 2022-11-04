import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  genre_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Genre" },
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 50 },
  trailer:{ type: String, required: true, maxlength: 50 },

});
export default mongoose.model("Series", schema);