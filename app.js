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

    /* Calculate Total function call */
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax

    // update on html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice
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