function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

// Pizza.prototype.getPrice = function () {
//   this.toppings.forEach(function (topping)
// INSERT MORE HERE WITH FOR EACH LOP)
// }
//  if (this.size =)





//THIS IS HOW TO GATHER INPUT FROM THE RADIO BUTTONS

var pizzaOrder = new Pizza(); //this might need to move and/or be set to let rather than var...

function displayPizzaOrder(pizzaOrderToDisplay) {

}

$(document).ready(function (){
  $("form#orderForm").submit(event){
  event.preventDefault();
  var inputtedSize = $("input:radio[name=size]:checked").val();
  //need var for toppings...
  //pizzaOrder.getPrice(WHAT GOES HERE);








}
});
