
  function cal() {

 this.firstInput =  element(by.model("first"));
 this.secondInput = element(by.model("second"));
 this.gobutton =   element(by.id("gobutton"));
 this.result =  element(by.css("h2[class='ng-binding']"));

this.getURL =  async function() {
 browser.get('http://juliemr.github.io/protractor-demo/');
};
};

module.exports = new cal ();