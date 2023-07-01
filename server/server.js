var express = require("express");
require("dotenv").config();
var cors = require("cors");
const Products = require("./database/models/schemas");

const MONGO_URI =
  "mongodb+srv://essharma:VVltCrH8ci7KSmtB@products.0dwqezb.mongodb.net/?retryWrites=true&w=majority";
var mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(cors());
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Database connected"))
  .catch((error) => console.log(error));

// var items = [
//   {
//     id: "1",
//     name: "Mackbook Pro",
//     price: 1500,
//     description:
//       "MacBook Pro 2023 with mini-LED display.Go longer than ever with up to 18 hours of battery life.It has 8GB of unified memory makes your entire system speedy and responsive.",
//     url: "https://m.media-amazon.com/images/I/61vhiiYIXxL._AC_SX679_.jpg",
//     category: "Electronics",
//   },
//   {
//     id: "2",
//     name: "Vegetables",
//     price: 20,
//     description:
//       "Vegetables are the leaves, stems, roots, or other parts of certain plants that people eat. Vegetables usually come from herbaceous plants. Herbaceous plants have stems that are softer than the woody stems of bushes and trees. Many vegetables grow aboveground",
//     url: "https://th.bing.com/th/id/OIP.M3ohwnP9mPl7cwNPy5cJcwHaE8?pid=ImgDet&rs=1",
//     category: "Groceries",
//   },
//   {
//     id: "3",
//     name: "Airpods Pro",
//     price: 250,
//     description:
//       "These Airpods have Active Noise Cancellation blocks outside noise, so you can immerse yourself in music and Transparency mode for hearing and interacting with the world around you",
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiHnyjd-aCFUP_m8ZvsTE52LjS4tirQPQUA&usqp=CAU",
//     category: "Electronics",
//   },
//   {
//     id: "4",
//     name: "Calculator",
//     price: 10,
//     description:
//       "This Calculator comes wth attached hard cover for extra protection and durability and with 120 steps check function",
//     url: "https://m.media-amazon.com/images/I/616Kmv5LvdL._AC_UL640_FMwebp_QL65_.jpg",
//     category: "Electronics",
//   },
//   {
//     id: "5",
//     name: "Maybelline Mascara",
//     price: 40,
//     description:
//       "It is Easy to apply mascara that provides curled and volumized lashes",
//     url: "https://m.media-amazon.com/images/I/51pQmQhAm0L._AC_UL800_FMwebp_QL65_.jpg",
//     category: "Cosmetics",
//   },
//   {
//     id: "6",
//     name: "Fruits",
//     price: 20,
//     description:
//       "Fruit provides many essential nutrients that often are underconsumed, including vitamins C and A and folate, as well as potassium and dietary fiber. Eating more fiber-rich, low-calorie fresh fruit in place of higher-calorie foods can help decrease your overall calorie intake",
//     url: "https://beef2live.com/images/668/author/1764/2021/4/images/ranking_countries_produce_fresh_fruit_1_637540433636851364_1440.jpg",
//     category: "Groceries",
//   },
// ];

/* Learned from Workshop3* /
/* GET items listing. */
app.get("/items", async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(201).send(allProducts);
  } catch (e) {
    res.status(500);
  }
});
/* GET item by id listing. */
app.get("/item/:itemId", async function (req, res, next) {
  try {
    const matchedItem = await Products.find({ _id: req.params.itemId });
    res.status(200).send(matchedItem);
  } catch (e) {
    res.status(500);
  }
});

// /* GET items by substring listing. */
app.get("/search/:query", async function (req, res, next) {
  const matchedItems = items.filter((item) =>
    item.name.toUpperCase().includes(req.params.query.toUpperCase())
  );
  res.send(matchedItems);
  try {
    const matchedItems = await Products.find({
      name: req.params.itemCategory,
    });
    res.status(200).send(matchedItems);
  } catch (e) {
    res.status(500);
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
    res.status(500);
  }
});

/* POST new itemlisting. */
app.post("/add", async function (req, res, next) {
  const newProduct = req.body;
  try {
    const product = await Products.create(newProduct);
    res.status(201).send(product);
  } catch (e) {
    res.status(500);
  }
});

/* DELETE item by id . */
app.delete("/item/:itemId", async function (req, res, next) {
  try {
    const productToDelete = await Products.findOneAndDelete({
      _id: req.params.itemId,
    });
    console.error(productToDelete._id);
    res.status(200).send(productToDelete._id);
  } catch (e) {
    res.status(500);
  }
});

/* UPDATE itemlisting. */
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

app.listen(3001, () => {
  console.log("Server Started");
});
