const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
const cardContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() { 
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');

}
function toggleMobileMenu() {
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
  
 mobileMenu.classList.add('inactive');
 aside.classList.toggle('inactive');
}

const productsList = []; // este seria el array que devolveria el backend. 

productsList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name:'pantalla',
  price: 425,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name:'computadora',
  price: 600,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



/*
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
  </div>
</div> 
*/

function rederProducts(array) {

  for (const product of array) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price, image} --> product.image.
    const img = document.createElement('img')
    img.setAttribute('src', product.image)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
  
    cardContainer.appendChild(productCard)
  
  }
  
}

rederProducts(productsList);



