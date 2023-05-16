const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

async function test() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.manage().window().maximize();
        await driver.get("https://ssau.ru/");

        const news = await driver.findElements(By.className('news__card'));
        const expectedCount = 7;
        console.assert(news.length === expectedCount, 'Количество новостей должно быть равно ' + expectedCount);
    } finally {
        driver.quit();
    }
}

test();