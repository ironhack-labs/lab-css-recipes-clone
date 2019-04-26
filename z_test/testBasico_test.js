
let config= require("../codecept.conf");

let urlSite=config.config.helpers.Puppeteer.url;

console.log(urlSite);

Feature('Que el sitio tenga las imagenes indicadas');

Scenario('Probando titulo', (I) => {
    I.amOnPage(urlSite);
    I.seeInTitle("x");
    I.dontSee('Page Not Found');
    I.dontSee('Error code');
    I.dontSee('Call Stack');
    I.see('<img');

});
