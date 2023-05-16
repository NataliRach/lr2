const { Builder } = require("selenium-webdriver");
require("chromedriver");

async function test() {
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.sleep(5_000);
    await driver.quit();
}

test();
