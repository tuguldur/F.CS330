const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model("price", contentSchema);
