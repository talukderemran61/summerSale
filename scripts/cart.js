document.getElementById('btn-coupon').addEventListener('click', function () {
    const discountElement = document.getElementById('discount');
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);

    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;
    console.log(couponCode);

    if (couponCode === 'SALE200' && totalPrice >= 200) {
        const discountPrice = totalPrice * 0.2;
        discountElement.innerText = discountPrice.toFixed(2);

        const totalPayable = document.getElementById('total-payable');

        const newTotalPayable = totalPrice - discountPrice;
        totalPayable.innerText = newTotalPayable;
    }
    else {
        const couponInvalid = document.getElementById('coupon-invalid');
        const couponContainer = document.getElementById('coupon-container');

        couponInvalid.classList.remove('hidden');
        couponContainer.classList.remove('mt-3');
    }
})

document.getElementById('card-1').addEventListener('click', function () {
    addItemToCart('card-1-title');

    updateTotalPrice('item-1-price');
})

document.getElementById('card-2').addEventListener('click', function () {
    addItemToCart('card-2-title');

    updateTotalPrice('item-2-price');
})
document.getElementById('card-3').addEventListener('click', function () {
    addItemToCart('card-3-title');

    updateTotalPrice('item-3-price');
})
document.getElementById('card-4').addEventListener('click', function () {
    addItemToCart('card-4-title');

    updateTotalPrice('item-4-price');
})
document.getElementById('card-5').addEventListener('click', function () {
    addItemToCart('card-5-title');

    updateTotalPrice('item-5-price');
})
document.getElementById('card-6').addEventListener('click', function () {
    addItemToCart('card-6-title');

    updateTotalPrice('item-6-price');
})
document.getElementById('card-7').addEventListener('click', function () {
    addItemToCart('card-7-title');

    updateTotalPrice('item-7-price');
})
document.getElementById('card-8').addEventListener('click', function () {
    addItemToCart('card-8-title');

    updateTotalPrice('item-8-price');
})
document.getElementById('card-9').addEventListener('click', function () {
    addItemToCart('card-9-title');

    updateTotalPrice('item-9-price');
})

const modal = document.getElementById('modal');
const goHomeButton = document.getElementById('go-home');
const purchaseButton = document.getElementById('btn-purchase');

purchaseButton.addEventListener('click', () => {
    console.log('Purchase button clicked');
    modal.classList.remove('hidden');
    modal.showModal();
});

goHomeButton.addEventListener('click', () => {
    console.log('Go Home button clicked');
    modal.classList.add('hidden');
    modal.close();
});

// document.getElementById('coupon-field').addEventListener('input', function(){
//     // coupon button activation
//     const btnCoupon = document.getElementById('btn-coupon');
//     const couponField = document.getElementById('coupon-field');
//     const couponCode = couponField.value;

//     if(couponCode !== '' && newTotalPrice =){
//         btnCoupon.disabled = false;
//         btnCoupon.classList.remove('bg-pink-300', 'border-pink-300');
//         btnCoupon.classList.add('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600');
//     }
//     else{
//         btnCoupon.disabled = true;
//         btnCoupon.classList.add('bg-pink-300', 'border-pink-300');
//         btnCoupon.classList.remove('bg-pink-500', 'border-pink-500', 'hover:bg-pink-600');
//     }
// })