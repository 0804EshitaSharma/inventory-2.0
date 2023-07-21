const request = require("supertest");
const app = require("./server.js");

describe("Server tests", () => {
  it("Server tests 1", async () => {
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
    const deleteResponse = await request(app).delete(
      `/item/${response.body._id}`
    );
    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.body.message).toBe("Product deleted Successfully");
  });
  it("Server tests 2", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Connected to Backend!");
  });
  it("Server tests 3", async () => {
    const response = await request(app).get("/items");
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.error).not.toBeDefined();
  });
  it("Server tests 4", async () => {
    const response = await request(app).get("/item/1");
    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBeDefined();
  });
  it("Server tests 4", async () => {
    const response = await request(app).get("/item/64b5fa987518a6a537983fb5");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].name).toBe("Mackbook Pro");
  });
  it("Server tests 4", async () => {
    const response = await request(app).get("/search/V");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.name.includes("V")).toBe(true);
    });
  });
  it("Server tests 4", async () => {
    const response = await request(app).get("/filter/Groceries");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.category).toBe("Groceries");
    });
  });
  it("Server tests 4", async () => {
    const response = await request(app).get("/Zain");
    expect(response.statusCode).toBe(200);
    response.body.forEach((item) => {
      expect(item.manufacturer).toBe("Zain");
    });
  });
  it("Server tests 1", async () => {
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

    const deleteResponse = await request(app)
      .patch(`/update/${response.body._id}`)
      .send({ price: 40, description: "It is very Tasty" });
    expect(deleteResponse.statusCode).toBe(200);
    console.error(deleteResponse);
    expect(deleteResponse.body.price).toBe(40);
  });
});
