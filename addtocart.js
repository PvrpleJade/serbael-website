
  const addToCartButton = document.getElementById('add');

  addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get the product details
    const productNameElement = document.getElementById('name');
    const productName = productNameElement.textContent;
    
    const productPriceElement = document.getElementById('price');
    const productPrice = productPriceElement.textContent;
    
    const productImageElement = document.getElementById('img');
    const productImage = productImageElement.src;
    
    // Save the product details in local storage
    localStorage.setItem('productName', productName);
    localStorage.setItem('productPrice', productPrice);
    localStorage.setItem('productImage', productImage);
    // Redirect to the cart page
    window.location.href = '/cart.html';
  });
  
