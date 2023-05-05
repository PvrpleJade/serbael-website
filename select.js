var ProductImg = document.getElementById("ProductImg");
var SmallPic = document.getElementsByClassName("small-pic");
        
        SmallPic[0].onclick = function()
          {
            ProductImg.src = SmallPic[0].src;   
          }
        SmallPic[1].onclick = function()
          {
            ProductImg.src = SmallPic[1].src;   
          }
        SmallPic[2].onclick = function()
          {
            ProductImg.src = SmallPic[2].src;   
          }
        SmallPic[3].onclick = function()
          {
            ProductImg.src = SmallPic[3].src;   
          }
          
for (var i = 0; i < SmallPic.length; i++) {
        SmallPic[i].addEventListener("click", function() {

for (var j = 0; j < SmallPic.length; j++) {
       SmallPic[j].classList.remove("selected");
    }

    this.classList.add("selected");

    ProductImg.src = this.src;
  });
}

var quantityInputs = document.getElementsByClassName('cart-number')
for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }