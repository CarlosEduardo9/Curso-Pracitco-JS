const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartConteiner= document.querySelector('#shoppingCartConteiner');
const cardContainer= document.querySelector('.cards-container');
const productDetailConteiner= document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartConteiner);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() { 

  desktopMenu.classList.toggle('inactive');
  shoppingCartConteiner.classList.add('inactive');
  productDetailConteiner.classList.add('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCartConteiner.classList.add('inactive');
  productDetailConteiner.classList.add('inactive');

  
}
function toggleCarritoshoppingCartConteiner() {

 mobileMenu.classList.add('inactive');
 shoppingCartConteiner.classList.toggle('inactive');
 desktopMenu.classList.add('inactive');
 productDetailConteiner.classList.add('inactive');
}

function openProductDetailAside() {
  productDetailConteiner.classList.remove('inactive');
  mobileMenu.classList.remove('inactive');
  mobileMenu.classList.add('inactive');

}
function closeProductDetailAside() {
  productDetailConteiner.classList.add('inactive');
  shoppingCartConteiner.classList.add('inactive');
  desktopMenu.classList.add('inactive');
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
    img.addEventListener('click', openProductDetailAside);
  
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



