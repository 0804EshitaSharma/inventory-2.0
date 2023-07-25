const request = require("supertest");
const app = require("./server.js");

describe("Server tests", () => {

  it("should be able to successfully connect to the database", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Connected to Backend!");
  });

  it("should be able to make a post request", async () => {
    const response = await request(app).post("/add").send({
      name: "MANGO",
      description: "It is very Tasty",
      price: 20,
      manufacturer: "Eshita Sharma",
      category: "Groceries",
      reviews: 5,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("MANGO");
  });

  it("should be able to make a get request to fetch all items", async () => {
    const response = await request(app).get("/items");
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.error).not.toBeDefined();
  });

  it("should show server error when item id does not exist", async () => {
    const response = await request(app).get("/item/1");
    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBeDefined();
  });

  it("should be able to make a get request to fetch an item by id", async () => {
    const response = await request(app).get("/item/64b5fa987518a6a537983fb5");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].name).toBe("Mackbook Pro");
  });

  it("should be able to make a search request to fetch all items containing letter V ", async () => {
    const response = await request(app).get("/search/V");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.name.includes("V")).toBe(true);
    });
  });

  it("should be able to fetch all items whose category is Groceries", async () => {
    const response = await request(app).get("/filter/Groceries");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.category).toBe("Groceries");
    });
  });
  
  it("should be able to fetch all items manufactured by Zain ", async () => {
    const response = await request(app).get("/Zain");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.manufacturer).toBe("Zain");
    });
  });
  it("should be able to update an item", async () => {
    const response = await request(app).post("/add").send({
      name: "MANGO",
      description: "It is very Tasty",
      price: 20,
      manufacturer: "Eshita Sharma",
      category: "Groceries",
      reviews: 5,
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.price).toBe(20);
    const updateResponse = await request(app)
      .patch(`/update/${response.body._id}`)
      .send({ price: 40, description: "It is very Tasty" });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body.price).toBe(40);
  });
});
