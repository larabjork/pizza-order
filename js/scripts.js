function Pizza (size) {
  this.size = size,
  // this.toppings = toppings, WILL ADD BACK IN ONCE CHECKBOXES ARE WORKING
  this.price = 0
};

Pizza.prototype.getPrice = function () {
  // this.toppings.forEach(function (topping)
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else {
    this.price += 20;
  }
  return this.price;
};








// function displayPizzaOrder(pizzaOrderToDisplay) {
//
// }

$(document).ready(function (){
  $("form#order-form").submit(function(event) {
  event.preventDefault();
    let sizeInput = $("input:radio[name=size]:checked").val();
    console.log(sizeInput)

    let myPizza =new Pizza(sizeInput);
    myPizza.getPrice();
    console.log(myPizza)

    // let toppingsInputs = [$("input:checkbox[class=top]:checked")];
    // let toppingsArray = [];
    // toppingsInputs.forEach(function(toppingsInput){
    //   toppingsArray.push(toppingsInput)
    //   return toppingsInput
    // });



// //these are where info goes to the DOM
$(".ordered-size").text(sizeInput);
//  $(".ordered-toppingsArray").text(toppingsArray);
  });
});



// let pizzaOrder = new Pizza(sizeInput, toppingsArray);
// let price = pizzaOrder.getPrice();
