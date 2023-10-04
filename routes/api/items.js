const express = require("express");
const router = express.Router();

// bring-in Item model
const Item = require("../../model/Item");

//@route    GET api/items
//@desc     GET all items
//@access   public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((result) => res.json(result));
});

//@route    Post api/items
//@desc     Save items in db
//@access   public

router.post("/", async (req, res) => {
  // Payload
  const payload = new Item({
    name: req.body.name,
  });
  const result = await payload.save();

  res.json(result);
});

//@route    DELETE api/items
//@desc     DELETE items in db using ID
//@access   public

router.delete("/:id", async (req, res) => {
  // method using then
  Item.findById(req.params.id)
    .then((item) => item.deleteOne())
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(404).json({ success: false }));

  // method using async-await
  //   try {
  //     const item = await Item.findById(req.params.id);
  //     // const item = await Item.findById(req.params.id).deleteOne();
  //     // console.log("item:", item);
  //     const result = await item.deleteOne();
  //     // console.log("result: ", result);
  //     res.json({ sucess: "removed sucessfully" });
  //   } catch (error) {
  //     res.status(404).json({ failed: "item not exist" });
  //   }
});

module.exports = router;
