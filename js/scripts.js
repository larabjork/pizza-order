function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};

Pizza.prototype.getPrice = function () {
this.toppings.forEach(function(topping){
  this.price +=1;
});
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else {
    this.price += 20;
  }
  return this.price
};









Pizza.prototype.displayOrder = function(size, price) {
  return this.size, this.price}
//
// }

$(document).ready(function (){
  $("form#order-form").submit(function(event) {
  event.preventDefault();
    let sizeInput = $("input:radio[name=size]:checked").val();


    let toppingsInputs = $("input:checkbox[class=top]:checked");
    let toppingsArray = [];
    toppingsInputs.forEach(function(toppingsInput){
      toppingsArray.push(toppingsInput);
      console.log(toppingsArray)
      console.log(toppingsInput)
      return toppingsInput
    });

    let myPizza =new Pizza(sizeInput,toppingsInputs);
    myPizza.getPrice();


// //these are where info goes to the DOM
$(".ordered-size").html(sizeInput);
$(".ordered-price").html(myPizza.price);
console.log(myPizza)
  });
});



// let pizzaOrder = new Pizza(sizeInput, toppingsArray);
// let price = pizzaOrder.getPrice();
