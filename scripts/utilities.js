function addItemToCart(cardTitle){
    const cartTitleList = document.getElementById('selected-items');

    const count = cartTitleList.childElementCount;

    const card1Title = document.getElementById(cardTitle).innerText;

    const li = document.createElement('li');
    li.innerText = (`${count + 1}. ${card1Title}`);
    cartTitleList.appendChild(li);

    document.getElementById('hidden-line').style.display = 'block';
}

function updateTotalPrice(itemPriceId){
    // total price
    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPriceText = totalPriceElement.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceText);
    console.log(previousTotalPrice);

    const itemPriceText = document.getElementById(itemPriceId).innerText;
    const itemPrice = parseFloat(itemPriceText);
    console.log(itemPrice);

    var newTotalPrice = previousTotalPrice + itemPrice;
    console.log(newTotalPrice);

    totalPriceElement.innerText = newTotalPrice;

    // reset discount to Zero
    const discountElement = document.getElementById('discount');
    discountElement.innerText = '00';

    // coupon button activation
    const btnCoupon = document.getElementById('btn-coupon');

    if(newTotalPrice !== 0){
        couponCodeBtnActivation();
    }
    else{
        btnCoupon.disabled = true;
        btnCoupon.classList.add('bg-pink-300', 'border-pink-300');
        btnCoupon.classList.remove('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600');
    }

    // clear coupon code Field
    const couponField = document.getElementById('coupon-field');
    couponField.value = '';

    // Alert container remove
    const couponInvalid = document.getElementById('coupon-invalid');
    const couponContainer = document.getElementById('coupon-container');

    couponInvalid.classList.add('hidden');
    couponContainer.classList.add('mt-3');
}

function couponCodeBtnActivation(){
    const btnCoupon = document.getElementById('btn-coupon');

    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;

    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);

    if(couponCode !== '' && totalPrice !== 0){
        btnCoupon.disabled = false;
        btnCoupon.classList.remove('bg-pink-300', 'border-pink-300');
        btnCoupon.classList.add('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600');
    }
    else{
        btnCoupon.disabled = true;
        btnCoupon.classList.add('bg-pink-300', 'border-pink-300');
        btnCoupon.classList.remove('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600');
    }
}