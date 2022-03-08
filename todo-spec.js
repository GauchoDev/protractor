const { browser, element } = require("protractor");
const obj = require("./Page-Object.js"); //import
const obj1 = require("./Page-Object-1.js"); //import



describe('angularjs homepage todo list', function() {
beforeEach(async function() {
await browser.waitForAngularEnabled(false);  

await obj.getURL();
await browser.sleep(2000)
  });
it('Altfin Patterns Antlarvae', async function () {
await obj1.calcEsteban(2,9,"MULTIPLICATION");
  await browser.sleep(5000)
  await obj1.calcEsteban(10,5,"DIVISION");
  await browser.sleep(5000)
  await obj1.calcEsteban(9,3,"MODULO");
  await browser.sleep(5000)
  await obj1.calcEsteban(7,5,"SUBTRACTION");
  await browser.sleep(5000)
  await obj1.calcEsteban(3,5,"ADDITION");

  await browser.sleep(5000)

    let result = await element.all(by.repeater("result in memory"))

    for(let i = 0; i <5; i++){
        let foo = await result[i].all(by.css("td:nth-child(3)")).getText();
        await console.log(foo)
    }



  });
  afterEach(async function() {
await  console.log("Test completed....");
  });
});
