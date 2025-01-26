const express = require("express");
const router = express.Router(); 
const Item = require("../models/item"); // Import the Item schema

// Get all items                 
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();                       // Fetch all items from the database
    res.json(items);                                        // Send the items to the frontend
  } catch (err) {
    res.status(500).json({ message: err.message });              // Handle errors
  } 
});

// Add a new item
router.post("/", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    owner: req.body.owner,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    await item.remove();
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
