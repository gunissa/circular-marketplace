const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the item (required field)
  description: { type: String },         // Description of the item (optional)
  dateAdded: { type: Date, default: Date.now }, // Date the item was added (defaults to current date)
  owner: { type: String, required: true },     // Owner of the item (e.g., email or user ID)
});

module.exports = mongoose.model("Item", ItemSchema);
