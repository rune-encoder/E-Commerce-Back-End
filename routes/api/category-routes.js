const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Find all categories and their assiciated products.
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
    // This will retrieve every Categories' associated product data.
      include: { model: Product },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one category by its `id` value and its associated products.
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk({
      include: [{ model: Product }],
    });
    // If categoryData evaluates aas false (no category with that primary key), then we will send an error message.
    if (!categoryData) {
      // 400 status code means the server could not understand the request.
      res.status(404).json({ message: "No category found with this ID." });
      return;
    }
    // 200 status code means the request is successful.
    res.status(200).json(categoryData);
  } catch (err) {
    // 500 status code means server encountered something unexpected that prevented it from fulfilling the request.
    res.status(500).json(err);
  }
});

// Create a new category.
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an existing category by its `id` value.
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(400).json({ message: "No category found with this ID." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an existing category by its `id` value.
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(400).json({ message: "No category found with this ID." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
