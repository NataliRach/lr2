const {suite} = require ("selenium-webdriver/testing");
const {By, WebDriver } = require("selenium-webdriver");
const assert = require ("assert");
require("chromedriver");

suite(function (env) {
 describe ("Страница Цифровые кафедры", () => {
     let driver;
    
     before (async () => {
        driver = await env.builder().build();
     });

     it ('должен отобразить заголовок, содержащий фразу Цифровые кафедры', async () => {
        await driver.get("https://ido.ssau.ru/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%https://ido.ssau.ru/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D1%8B/%84%D0%B5%D0%B4%D1%80%D1%8B/");
        const pageTitle = await driver.getTitle();

        assert(pageTitle.includes("Цифровые кафедры"));
     })
 })
})

