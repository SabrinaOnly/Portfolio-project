let product = document.querySelectorAll('.popular-product__items');
let productImg = document.querySelectorAll('.popular-product__items img');
let buyButton = document.querySelectorAll('.buy-button');

for (let i = 0; i < product.length; i++) {
    product[i].addEventListener('mouseover', function () {
        productImg[i].style.display = 'none';
        buyButton[i].classList.remove('visually-hidden');
    });
    product[i].addEventListener('mouseleave', function () {
        productImg[i].style.display = 'block';
        buyButton[i].classList.add('visually-hidden');
    });
}