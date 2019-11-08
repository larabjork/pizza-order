// function Pizza (size, toppings) {
//   this.size = size,
//   this.toppings = toppings,
//   this.price = 0
// };
//
// Pizza.prototype.getPrice = function () {
//   // this.toppings.forEach(function (topping)
//   if (this.size === small) {
//     this.price += 10;
//   } else if (this.size === medium) {
//     this.price += 15;
//   } else {
//     this.price += 20;
//   }
//   console.log(Pizza.getPrice)
// };








// function displayPizzaOrder(pizzaOrderToDisplay) {
//
// }

$(document).ready(function (){
  $("form#order-form").submit(function(event) {
  event.preventDefault();
  let sizeInput = $("input:radio[name=size]:checked").val();
  $(".ordered-size").text(sizeInput);

  // let toppingsInputs = $(#toppings: checked)://this id doesn't exist yet;
  // let toppingsArray = [];
  // toppingsInputs.forEach(function(toppingInput){
  //   toppingsArray.push(toppingInput.val());
  // });
//
// let pizzaOrder = new Pizza(sizeInput, toppingsArray);
// let price = pizzaOrder.getPrice();

});
});
