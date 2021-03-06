function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};

Pizza.prototype.getPrice = function () {
  this.price = this.price + this.toppings.length
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 15;
  } else {
    this.price += 20;
  }
  return this.price
};



$(document).ready(function (){
  $("form#order-form").submit(function(event) {
  event.preventDefault();
  $("#order-summary").show();
    let sizeInput = $("input:radio[name=size]:checked").val();
    let toppingsInputs = $("input:checkbox[class=top]:checked");
    let toppingsArray = [];
    for (var i = 0; i < toppingsInputs.length; i +=1) {toppingsArray.push(toppingsInputs[i].value);
    }
   console.log(toppingsArray)


    let myPizza =new Pizza(sizeInput,toppingsArray);
    myPizza.getPrice();

    let toppingsList = toppingsArray.toString();
    toppingsList = toppingsList.replace("greenPeppers", "green peppers").replace("mozzarella", "fresh mozzarella").replace("olives", "black olives").replace("basil", "fresh basil").replace(/,/g, ", ");

    $(".ordered-size").html(sizeInput);
    $(".ordered-toppings").html(toppingsList);
    $(".ordered-price").html(myPizza.price);
    console.log(myPizza)
  });
});
