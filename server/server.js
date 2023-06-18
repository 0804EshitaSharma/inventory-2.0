var express = require("express");

var cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

var items = [
  {
    id: "1",
    name: "Mackbook Pro",
    price: 1500,
    description:
      "MacBook Pro 2023 with mini-LED display.Go longer than ever with up to 18 hours of battery life.It has 8GB of unified memory makes your entire system speedy and responsive.",
    url: "https://m.media-amazon.com/images/I/61vhiiYIXxL._AC_SX679_.jpg",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Vegetables",
    price: 20,
    description:
      "Vegetables are the leaves, stems, roots, or other parts of certain plants that people eat. Vegetables usually come from herbaceous plants. Herbaceous plants have stems that are softer than the woody stems of bushes and trees. Many vegetables grow aboveground",
    url: "https://th.bing.com/th/id/OIP.M3ohwnP9mPl7cwNPy5cJcwHaE8?pid=ImgDet&rs=1",
    category: "Groceries",
  },
  {
    id: "3",
    name: "Airpods Pro",
    price: 250,
    description:
      "These Airpods have Active Noise Cancellation blocks outside noise, so you can immerse yourself in music and Transparency mode for hearing and interacting with the world around you",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiHnyjd-aCFUP_m8ZvsTE52LjS4tirQPQUA&usqp=CAU",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Calculator",
    price: 10,
    description:
      "This Calculator comes wth attached hard cover for extra protection and durability and with 120 steps check function",
    url: "https://m.media-amazon.com/images/I/616Kmv5LvdL._AC_UL640_FMwebp_QL65_.jpg",
    category: "Electronics",
  },
  {
    id: "5",
    name: "Maybelline Mascara",
    price: 40,
    description:
      "It is Easy to apply mascara that provides curled and volumized lashes",
    url: "https://m.media-amazon.com/images/I/51pQmQhAm0L._AC_UL800_FMwebp_QL65_.jpg",
    category: "Cosmetics",
  },
  {
    id: "6",
    name: "Fruits",
    price: 20,
    description:
      "Fruit provides many essential nutrients that often are underconsumed, including vitamins C and A and folate, as well as potassium and dietary fiber. Eating more fiber-rich, low-calorie fresh fruit in place of higher-calorie foods can help decrease your overall calorie intake",
    url: "https://beef2live.com/images/668/author/1764/2021/4/images/ranking_countries_produce_fresh_fruit_1_637540433636851364_1440.jpg",
    category: "Groceries",
  },
];

/* Learned from Workshop3* /
/* GET items listing. */
app.get("/items", (req, res) => {
  res.send(items);
});
/* GET item by id listing. */
app.get("/item/:itemId", function (req, res, next) {
  const matchedItem = items.find((item) => item.id === req.params.itemId);
  res.send(matchedItem);
});

// /* GET items by substring listing. */
app.get("/search/:query", function (req, res, next) {
  const matchedItems = items.filter((item) =>
    item.name.toUpperCase().includes(req.params.query.toUpperCase())
  );
  res.send(matchedItems);
});

/* GET items by category */
app.get("/filter/:itemCategory", function (req, res, next) {
  const filteredItems = items.filter(
    (item) => item.category === req.params.itemCategory
  );
  res.send(filteredItems);
});

/* POST new itemlisting. */
app.post("/add", function (req, res, next) {
  items.push(req.body);
  return res.send(req.body);
});

/* DELETE item by id . */
app.delete("/item/:itemId", function (req, res, next) {
  items = items.filter((item) => item.id !== req.params.itemId);
  res.send(req.params.itemId);
});

/* UPDATE itemlisting. */
app.patch("/update/:itemId", function (req, res, next) {
  const updatedItem = items
    .filter((item) => item.id == req.params.itemId)
    .map((item) => {
      return {
        ...item,
        price: req.body.price,
        description: req.body.description,
      };
    });
  items = items.filter((item) => item.id != req.params.itemId);
  items.push(updatedItem[0]);
  return res.send(updatedItem[0]);
});

app.listen(3001, () => {
  console.log("Server Started");
});
