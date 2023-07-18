var express = require("express");
var mongoose = require("mongoose");
const app = express();
var cors = require("cors");
require("dotenv").config();
app.use(express.json());

const corsOption = {
  origin: "https://inventory-2-0-front-ent.onrender.com",
};
app.use(cors(corsOption));
/* Referred from https://www.youtube.com/watch?v=Bxagh8EG-ak */
const Products = require("./database/models/schemas");
const Manufacturers = require("./database/models/manufacturer");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
      console.log(`Successfully listening to Port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

/* Learned from Workshop3* /
/* GET items listing. */
app.get("/items", async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(201).send(allProducts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
/* GET item by id listing. */
app.get("/item/:itemId", async function (req, res, next) {
  try {
    const matchedItem = await Products.find({ _id: req.params.itemId });
    res.status(200).send(matchedItem);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// /* GET items by substring listing. */
/* Referred from https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/regexMatch/ and ChatGPT*/
app.get("/search/:query", async function (req, res, next) {
  try {
    const matchedItems = await Products.find({
      name: { $regex: req.params.query, $options: "i" },
    });
    res.status(200).send(matchedItems);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* GET items by category */
app.get("/filter/:itemCategory", async function (req, res, next) {
  try {
    const filteredItems = await Products.find({
      category: req.params.itemCategory,
    });
    res.status(200).send(filteredItems);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* POST new itemlisting. */
/*Referred from https://mongoosejs.com/docs/api/model.html#Model.create()  and ChatGPT */
app.post("/add", async function (req, res, next) {
  const newProduct = req.body;
  try {
    const product = await Products.create(newProduct);
    if (product) {
      await Manufacturers.findOneAndUpdate(
        { name: product.manufacturer },
        { $addToSet: { items: product._id } },
        { upsert: true }
      );
    }

    res.status(201).send(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* DELETE item by id . */
/*Referred from https://www.youtube.com/watch?v=CG_nh3vJ1Yo and https://www.mongodb.com/docs/v6.0/reference/operator/update/pull/ and ChatGPT */
app.delete("/item/:itemId", async function (req, res, next) {
  try {
    const productToDelete = await Products.findOneAndDelete({
      _id: req.params.itemId,
    });
    if (productToDelete) {
      try {
        await Manufacturers.updateMany(
          {},
          { $pull: { items: productToDelete._id } }
        );
      } catch (error) {
        res.status(500).json({ error: e.message });
      }
      res.status(200).json({ message: "Product deleted Successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* UPDATE itemlisting. */
/* Referred from https://www.mongodb.com/docs/v6.0/reference/method/db.collection.findOneAndUpdate/ and https://www.mongodb.com/docs/v6.0/reference/operator/update/set/ and ChatGpt */
app.patch("/update/:itemId", async function (req, res, next) {
  try {
    const updatedItem = await Products.findOneAndUpdate(
      { _id: req.params.itemId },
      {
        $set: {
          price: req.body.price,
          description: req.body.description,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedItem);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* GET all products by manufacturer. */
app.get("/:manufacturer", async function (req, res, next) {
  try {
    const manufacturer = await Manufacturers.findOne({
      name: req.params.manufacturer,
    });
    if (manufacturer.items) {
      try {
        const matchedItems = await Products.find({
          _id: { $in: manufacturer.items },
        });
        res.status(200).send(matchedItems);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    } else {
      res.status(404).json({ message: "Items not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
