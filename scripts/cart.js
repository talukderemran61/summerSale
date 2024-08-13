//event listener for adding items in cart and update Price
cardsContainer.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if(card){
        addItemToCart(card);
        updateTotalPrice(card); 
    }
})

// Coupon apply
document.getElementById('btn-coupon').addEventListener('click', function () {
    const discountElement = document.getElementById('discount');
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);

    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;

    const couponInvalid = document.getElementById('coupon-invalid');
    const couponInvalidMinCheckout = document.getElementById('coupon-invalid-min-checkout');
    const couponContainer = document.getElementById('coupon-container');
    if (couponCode.toUpperCase() === 'SALE200' && totalPrice >= 200) {
        const discountPrice = totalPrice * 0.2;
        discountElement.innerText = discountPrice.toFixed(2);

        const newTotalPayable = totalPrice - discountPrice;
        totalPayableElement.innerText = newTotalPayable;

        // remove alert message
        couponInvalid.classList.add('hidden');
        couponInvalidMinCheckout.classList.add('hidden');
        couponContainer.classList.add('mt-3');

        // clear couponField
        couponField.value = '';
    }
    else if(couponCode.toUpperCase() === 'SALE200' && totalPrice < 200){
        couponInvalidMinCheckout.classList.remove('hidden');
        couponContainer.classList.remove('mt-3'); 

        // remove wrong coupon alert
        couponInvalid.classList.add('hidden');

        // clear couponField
        couponField.value = '';
    }
    else {
        couponInvalid.classList.remove('hidden');
        couponContainer.classList.remove('mt-3');

        // remove mincheckout alert
        couponInvalidMinCheckout.classList.add('hidden');

        // clear couponField
        couponField.value = '';
    }
})


//event deligation for removing item from cart
document.getElementById('selected-items').addEventListener('click', function(event){
    if(event.target.classList.contains('fa-trash-can')){
        const listItem = event.target.closest('.cart-item');
        if(listItem){
            removeItemFromCart(listItem);
        }
    }
});


// Purchase button
const modal = document.getElementById('modal');
const goHomeButton = document.getElementById('go-home');
const purchaseButton = document.getElementById('btn-purchase');

purchaseButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.showModal();
});

goHomeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.close();
});