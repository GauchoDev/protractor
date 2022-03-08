const obj = require("./Page-Object.js"); //import

 function funcCalculator () {

this.calcEsteban = async function calc(a,b,c)
{
obj.firstInput.sendKeys(a);
obj.secondInput.sendKeys(b);
//element(by.model("operator")).element(by.css("option:nth-child(4)")).click(); 
// this code is to select a single operator.

element.all(by.tagName("option")).each(function(item)
{

item.getAttribute("value").then(function(value)
{
if (value == c)
{
    item.click();
}

})
})

// let option =  await element.all(by.tagName("option"))
//     for (let i = 0; i <5; i++){
//         let foo = await option[i].getAttribute("value")
//         if (value == c)

//         await  foo.click();

//     }    








  obj.gobutton.click();




}


};

module.exports = new funcCalculator ();

// const obj = require("./Page-Object.js"); //import

// async function funcCalculator () {

// this.calcEsteban = function calc(a,b,c)
// {
// obj.firstInput.sendKeys(a);
// obj.secondInput.sendKeys(b);
// //element(by.model("operator")).element(by.css("option:nth-child(4)")).click(); 
// // this code is to select a single operator.
// element.all(by.tagName("option")).each(function(item)
// {

// item.getAttribute("value").then(function(value)
// {
// if (value == c)
// {
//     item.click();
// }

// })
// })

// obj.gobutton.click();




// }


// };

// module.exports = new funcCalculator ();