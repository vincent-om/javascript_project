
const actualPrice = 45;
const actualDailyQuantity = 2500;
const actualDailyRevenue = 45*2500;

let whatIfPriceForm = document.querySelector('#what-if-price-form');
let whatIfPrice = document.querySelector('#user-inputted-price');
let whatIfRevenue = document.querySelector('#user-inputted-revenue') 
let amountDifference = document.querySelector('#amount-difference');
let lessOrMore = document.querySelector('#less-or-more');




whatIfPriceForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let targetPrice = whatIfPriceForm.elements['target-price'].value;

    if(targetPrice > 1000){
        alert('please input a reasonable price')
        whatIfPriceForm.elements['target-price'].value = 45;
        targetPrice = 45;
    }


    let whatIfDailyRevenue = targetPrice * actualDailyQuantity //Note that we are assuming the daily quantity we sell to Brookside will not change
    let earningDifference = whatIfDailyRevenue - actualDailyRevenue;

    whatIfPrice.textContent = targetPrice;
    whatIfRevenue.textContent = whatIfDailyRevenue;
    amountDifference.textContent = Math.abs(earningDifference)

    if (earningDifference < 0) {
        lessOrMore.textContent = 'less';
    }

    else {
        lessOrMore.textContent = 'more';
    }
})