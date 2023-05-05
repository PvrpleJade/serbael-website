const form = document.querySelector('form');
const database = firebase.database();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#image').value;
  
  const product = {
    name: name,
    description: description,
    price: price,
    image: image
  };
  
  // Save the product data to the Firebase database
  const ref = database.ref('products');
  ref.push(product);
  
  // Reset the form
  form.reset();
});