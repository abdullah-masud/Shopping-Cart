function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber

    /* Update Case Total */
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price
}

/* Hanlde Phone increment and decrement */
/* Increment Plus Button */
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
})

/* Decrement Minus Button */
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
})

/* Hanlde Case increment and decrement */
/* Increment Plus Button */
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true)
})

/* Decrement Minus Button */
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false)
})