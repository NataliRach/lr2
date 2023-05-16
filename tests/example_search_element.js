const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

async function test() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.manage().window().maximize();
        await driver.get("https://ssau.ru/");

        // поиск по ID
        const header = await driver.findElement(By.id('top-bar-language'));
        console.info(await header.getTagName());

        // Поиск по имени класса
        const socialLinks = await driver.findElement(By.className('header__logo'));
        console.info(await socialLinks.getTagName());

        // Поиск по CSS селектору
        const menu = await driver.findElement(By.css('.news .h1-text'));
        console.info(await menu.getText());

        // // Поиск по ссылке (Link Text)
        const inviteLink = await driver.findElement(By.linkText("ssau.ru"));
        console.info(await inviteLink.getAttribute("href"));

        // Поиск по частичному тексту ссылки (Partial Link Text)
        const libraryEmail = await driver.findElement(By.partialLinkText("ИТНТ-2023")); // change to 2024 for error
        console.info(await libraryEmail.getText());
    } finally {
        driver.quit();
    }
}

test();