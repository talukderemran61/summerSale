const selectedItems = document.getElementById('selected-items');
const cardsContainer = document.getElementById('cards-container');
const totalPriceElement = document.getElementById('total-price');
const totalPayableElement = document.getElementById('total-payable');
const cartDivider = document.getElementById('hidden-line');

// add item to cart
function addItemToCart(card){
    const cardTitleId = card.getAttribute('data-title');
    const cardPriceId = card.getAttribute('data-price');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <p><span class="serial-number">${selectedItems.childElementCount + 1}</span>. ${document.getElementById(cardTitleId).innerText}</p> <i id="trash-can" class="fa-solid fa-trash-can text-red-500"></i>
    `;
    
    listItem.classList.add('cart-item', 'flex', 'items-center', 'justify-between');
    listItem.setAttribute('data-price', document.getElementById(cardPriceId).innerText);
    selectedItems.appendChild(listItem);

    cartDivider.style.display = 'block';
}


//update total-Price & total-payable
function updateTotalPrice(card){
    // total price
    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPriceText = totalPriceElement.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceText);

    const cardPriceId = card.getAttribute('data-price');
    const itemPriceText = document.getElementById(cardPriceId).innerText;
    const itemPrice = parseFloat(itemPriceText);

    const newTotalPrice = previousTotalPrice + itemPrice;
    totalPriceElement.innerText = newTotalPrice;

    //update total_payable
    totalPayableElement.innerText = newTotalPrice;

    // reset discount to Zero
    const discountElement = document.getElementById('discount');
    discountElement.innerText = '00';

    // coupon button & purchase button activation
    const btnCoupon = document.getElementById('btn-coupon');
    const purchaseButton = document.getElementById('btn-purchase');

    if(newTotalPrice !== 0){
        couponCodeBtnActivation();

        buttonActivate(purchaseButton);
    }
    else{
        buttonDisable(btnCoupon);

        buttonDisable(purchaseButton);
    }

    // clear coupon code Field
    const couponField = document.getElementById('coupon-field');
    couponField.value = '';

    // Alert container remove
    const couponInvalid = document.getElementById('coupon-invalid');
    const couponInvalidMinCheckout = document.getElementById('coupon-invalid-min-checkout');
    const couponContainer = document.getElementById('coupon-container');

    couponInvalid.classList.add('hidden');
    couponInvalidMinCheckout.classList.add('hidden');
    couponContainer.classList.add('mt-3');
}


// coupon btn activate/disable
function couponCodeBtnActivation(){
    const btnCoupon = document.getElementById('btn-coupon');
    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;

    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);

    if(couponCode !== '' && totalPrice !== 0){
        buttonActivate(btnCoupon);
    }
    else{
        buttonDisable(btnCoupon);
    }
}


//button activate/disable
function buttonActivate(btnName){
    btnName.disabled = false;
    btnName.classList.remove('bg-pink-300', 'border-pink-300');
    btnName.classList.add('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600'); 
}
function buttonDisable(btnName){
    btnName.disabled = true;
    btnName.classList.add('bg-pink-300', 'border-pink-300');
    btnName.classList.remove('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600'); 
}


// remove item from cart
function removeItemFromCart(listItem){
    const cartItemPrice = parseFloat(listItem.getAttribute('data-price'));
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);
    const totalPrice = previousTotalPrice - cartItemPrice;

    totalPriceElement.innerText = totalPrice;
    totalPayableElement.innerText = totalPrice;
    
    listItem.remove();
    updateItemsSerial();

    if(selectedItems.childElementCount === 0){
        cartDivider.style.display = 'none';
        buttonDisable(purchaseButton);
    }
    else{
        cartDivider.style.display = 'block';
    }
}

//update cart items serial
function updateItemsSerial(){
    const cartItems = selectedItems.querySelectorAll('.cart-item');
    cartItems.forEach((item, index) => {
        const serialNumberElement = item.querySelector('.serial-number')
        serialNumberElement.innerText = `${index + 1}`;
    })
}