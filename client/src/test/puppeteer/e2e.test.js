/* Learned from https://pptr.dev/ , https://www.youtube.com/watch?v=8N8xyqFgxYI&list=PLul1O5xZFLa2r8yAQuXo8JCw5TuLfZafb and ChatGPT */

const puppeteer = require("puppeteer");

jest.setTimeout(30000);

describe("should go to inventory website and perform some operations", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://inventory-2-0-frontend.onrender.com/", {
      waitUntil: "load",
    });
  });

  it("should navigate to About page of inventory website", async () => {
    await page.waitForTimeout(4000);
    await page.waitForSelector('a[href="/about"]');
    await page.click('a[href="/about"]');
    /* Reference from pptr.dev/api/puppeteer.page.waitforselector */
    https: await page.waitForSelector(".about-container");
    /* Reference from https://pptr.dev/api/puppeteer.page._/#parameters */
    const aboutContainer = await page.$(".about-container");
    expect(aboutContainer).toBeTruthy();
    await page.waitForTimeout(2000);
  });
  it("should navigate to Add page of inventory website and fill form fields", async () => {
    await page.waitForSelector('a[href="/add"]');
    await page.click('a[href="/add"]');
    await page.waitForSelector(".item-form-container");
    const aboutContainer = await page.$(".item-form-container");
    expect(aboutContainer).toBeTruthy();
    await page.waitForTimeout(2000);
    await page.type('input[name="name"]', "Item");
    await page.waitForTimeout(2000);
    await page.type('input[name="price"]', "10");
    await page.waitForTimeout(2000);
    await page.type('textarea[name="description"]', "description");
    await page.waitForTimeout(2000);
    await page.type(
      'input[name="url"]',
      "https://media.millichronicle.com/2019/05/12125624/mangoes-chopped-and-fresh.jpg"
    );
    // await page.waitForSelector('select[name="category"]');
    // await page.select('select[name="category"]', "Groceries");
    await page.waitForSelector('input[name="manufacturer"]');
    await page.type('input[name="manufacturer"]', "Test");
    await page.click('button[type="submit"]');
    await page.waitForTimeout(5000);
  });
  it("should select and display Electronics category", async () => {
    await page.waitForSelector(".filter_card");
    const element = await page.$("select[name='category']");
    await element.select("Electronics");
    await page.waitForTimeout(4000);
    /* Reference from https://pptr.dev/api/puppeteer.page.__/ */
    const filteredItems = await page.$$(".item_container");
    expect(filteredItems.length).toBe(3);
    await element.select("Choose a Category----");
    await page.waitForTimeout(4000);
    const allItems = await page.$$(".item_container");
    expect(allItems.length).toBeGreaterThan(0);
  });
  it("should select and display Groceries category", async () => {
    await page.waitForSelector(".filter_card");
    const element = await page.$("select[name='category']");
    await element.select("Groceries");
    await page.waitForTimeout(4000);
    /* Reference from https://pptr.dev/api/puppeteer.page.__/ */
    const filteredItems = await page.$$(".item_container");
    expect(filteredItems.length).toBe(2);
    await element.select("Choose a Category----");
    await page.waitForTimeout(2000);
    const allItems = await page.$$(".item_container");
    expect(allItems.length).toBeGreaterThan(0);
    await page.waitForTimeout(4000);
  });
  it("should perform search operation", async () => {
    const searchBar = await page.$(".navbar_search_input");
    await searchBar.type("V");
    await page.waitForTimeout(2000);
    await searchBar.click({ clickCount: 4 });
    await searchBar.press("Backspace");
    await page.waitForTimeout(2000);
    await searchBar.type("M");
    await page.waitForTimeout(2000);
    await searchBar.click({ clickCount: 4 });
    await searchBar.press("Backspace");
    await page.waitForTimeout(2000);
  });
});
