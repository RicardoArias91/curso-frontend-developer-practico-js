
const menuEmail = document.querySelector('.navbar-email');
const menuDesplHam = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', mostrarMenuDesktop);
menuDesplHam.addEventListener('click', mostrarMenuMobile);
menuCarritoIcon.addEventListener('click', mostrarCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

/*function mostrarMenuDesktop() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function mostrarMenuMobile() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
  }
  closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function mostrarCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //const isMostrarMenuDesktopClosed = desktopMenu.classList.contains('inactive');
      if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const isMostrarMenuDesktopClosed = productDetailContainer.classList.contains('inactive');

    if (!isMostrarMenuDesktopClosed) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside (){
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside (){
  productDetailContainer.classList.add('inactive');
}
*/
function mostrarMenuDesktop() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function mostrarMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function mostrarCarritoAside() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

}
function openProductDetailAside (){
  productDetailContainer.classList.toggle("inactive");
}
function closeProductDetailAside (){
  shoppingCartContainer.classList.toggle("inactive");
  productDetailContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
const productListArr = [];
productListArr.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productListArr.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productListArr.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {
  
for (product of productListArr){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const ProductImg = document.createElement('img');
  ProductImg.setAttribute('src', product.image);
  ProductImg.addEventListener('click', openProductDetailAside);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText='$'+product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  //productInfoDiv.appendChild(productPrice);
  //productInfoDiv.appendChild(productName);
  productInfoDiv.append(productPrice, productName);

  const productInfoFigure = document.createElement('figure');
  const producImgCart = document.createElement('img');
  producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(producImgCart);
  
  //productInfo.appendChild(productInfoDiv);
  //productInfo.appendChild(productInfoFigure);
  productInfo.append(productInfoDiv, productInfoFigure);

  productCard.appendChild(ProductImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
  }
}
renderProducts(productListArr);

