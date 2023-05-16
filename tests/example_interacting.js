const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.manage().window().maximize();
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.ENTER);
    const title = await driver.getTitle();
    console.assert(title.includes(searchString), "заголовок страницы должен содержать " + searchString + "!");

    await driver.findElement(By.css('#search a')).click();

    await driver.sleep(5_000);
    await driver.quit();
}

test();
