const { Builder, By, Key, WebDriver } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://ssau.ru/");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("dd-ru-student")).click();
    await driver.findElement(By.linkText("Расписание занятий")).click();
    const title = await driver.getTitle();
    const faculties = await driver.findElements(By.className("card-default faculties__item"));
    for (let f of faculties) {
        const link = await f.findElement(By.css("a"))
        console.log(await f.getText());
        console.log(await link.getAttribute("href"));
    }
    // await driver.findElement(By.id("select2-timetableSelect-container")).click();
    // const inputElement = await driver.switchTo().activeElement();
    // await inputElement.sendKeys('Тарасов Артем Алексеевич');
    // await driver.sleep(2_000);
    // await inputElement.sendKeys(Key.ENTER);
    // console.assert(title.includes(searchString), "заголовок страницы должен содержать " + searchString + "!");

    // await driver.findElement(By.css('#search a')).click();

    await driver.sleep(5_000);
    await driver.quit();

}
test();