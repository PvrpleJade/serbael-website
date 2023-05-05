if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }


    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    if (cartItems.children.length === 0) { // check if cart is empty
        alert('Your cart is empty. Please add items before making a purchase.');
        return;
    }


    // Get the form inputs
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var address = document.getElementById("address").value;

    // Check if required inputs are empty
    if (firstName === "" || lastName === "" || address === "") {
        alert("Please fill in all required fields.");
        return; // Stop the function from executing further
    }

    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₱', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total
}


function generateReceipt() {
    // Get the form inputs
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var companyName = document.getElementById("cname").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("cityy").value;
    var address = document.getElementById("address").value;
    var tel = document.getElementById("tel").value;
    var mobile = document.getElementById("mobile").value;
  
    // Check if required inputs are empty
    if (firstName === "" || lastName === "" || address === "") {
      alert("Please fill in all required fields.");
      return; // Stop the function from executing further
    }
  
    // Check if other inputs are empty
    if (companyName === "" || country === "" || city === "" || tel === "" || mobile === "") {
      alert("Some optional fields are empty. Proceed anyway?");
    }
  
    // Get the total price
    var totalPrice = document.getElementById("total-price").textContent;
  
    // Create the receipt content
    var receiptContent = "Receipt\n";
    receiptContent += "Name: " + firstName + " " + lastName + "\n";
    receiptContent += "Company: " + companyName + "\n";
    receiptContent += "Address: " + address + ", " + city + ", " + country + "\n";
    receiptContent += "Telephone: " + tel + "\n";
    receiptContent += "Mobile: " + mobile + "\n";
    receiptContent += "Total Amount: " + totalPrice + "\n";
  
    // Display the receipt as an alert
    alert(receiptContent);
    alert('Thank you for your purchase');
  }
  