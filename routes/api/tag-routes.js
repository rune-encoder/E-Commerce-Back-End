const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Find all tags and its associated Product data.
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      // This will retrieve every Tag's associated product data. In SQL, this would be the join function.
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single tag and its associated Product data by its `id`.
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If tagdata evaluates aas false (no tag with that primary key), then we will send an error message.
    if (!tagData) {
      // 400 status code means the server could not understand the request.
      res.status(400).json({ message: "No tag found with this ID." });
      return;
    }
    // 200 status code means the request is successful.
    res.status(200).json(tagData);
  } catch (err) {
    // 500 status code means server encountered something unexpected that prevented it from fulfilling the request.
    res.status(500).json(err);
  }
});

// Creates a new tag.
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates a tag's name by its `id` value.
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(400).json({ message: "No tag found with this ID." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(400).json({ message: "No tag found with this ID." });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
