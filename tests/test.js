// №1
const { Builder, By, Key, WebDriver } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    // const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://litecart.stqa.ru/en/acme-corp-m-1/");
    await driver.manage().window().maximize();
   
    const sort = await driver.findElement(By.partialLinkText("Date")).click();


    await driver.sleep(5_000);
    await driver.quit();

};
test();

// №2
const { Builder, By, Key, WebDriver } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    // const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://litecart.stqa.ru/en/");
    await driver.manage().window().maximize();
   
    const searchProduct = await driver.findElements(By.className("product column shadow hover-light"));
    
    for (let f of searchProduct) {
        const link = await f.findElement(By.css("a"))
        console.log(await f.getText());
        console.log(await link.getAttribute("href"));
    }
    await driver.sleep(3_000);
    await driver.quit();

};
test();

// №3
const { Builder, By, Key, WebDriver } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    // const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://litecart.stqa.ru/en/");
    await driver.manage().window().maximize();
   
    const searchURL = await driver.findElements(By.css(".information .list-vertical"));
    // console.log (await searchURL.getAttribute("href"));
    for (let f of searchURL) {
        const link = await f.findElement(By.css("a"))
        // console.log(await f.getText());
        console.log(await link.getAttribute("href"));
    };
   console.log (searchURL.length);
    await driver.quit();

};
test();


