// Note that the values that appear when the page is opened
// have been hard coded and have nothing to do with the values
// as they appear below. Also, it shoudl be noted that they are
// based on the calculations made in the Get Reports page as
// appeared while I was working on it. That said. The variables
// below enable the calculation of values as they would appear
// when a sure inputs price and period.

const dailyQuantitySoldToBrookside = 2500;

let incomeOverTime = function(sellingPrice, time){

    sellingPrice = parseFloat(sellingPrice);
    time = String(time);

    if (time === 'Daily') {
        return sellingPrice * dailyQuantitySoldToBrookside;
    }

    else if (time === 'Weekly') {
        return sellingPrice * dailyQuantitySoldToBrookside * 7;
    }

    else if (time === 'Yearly') {
        return sellingPrice * dailyQuantitySoldToBrookside * 366;
    }

    else if (time === 'Monthly') {
        let januaryRevenue = dailyQuantitySoldToBrookside * sellingPrice * 30;
        let februaryRevenue = dailyQuantitySoldToBrookside * sellingPrice * 29;
        let marchRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;
        let aprilRevenue = dailyQuantitySoldToBrookside * sellingPrice * 30;
        let mayRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;
        let juneRevenue = dailyQuantitySoldToBrookside * sellingPrice * 30;
        let julylRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;
        let augustRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;
        let septemberRevenue = dailyQuantitySoldToBrookside * sellingPrice * 30;
        let octoberRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;
        let novemberRevenue = dailyQuantitySoldToBrookside * sellingPrice * 30;
        let decemberRevenue = dailyQuantitySoldToBrookside * sellingPrice * 31;

        return {
            januaryRevenue: januaryRevenue,
            februaryRevenue: februaryRevenue,
            marchRevenue: marchRevenue,
            aprilRevenue: aprilRevenue,
            mayRevenue: mayRevenue,
            juneRevenue: juneRevenue,
            julylRevenue: julylRevenue,
            augustRevenue: augustRevenue,
            septemberRevenue: septemberRevenue,
            octoberRevenue: octoberRevenue,
            novemberRevenue: novemberRevenue,
            decemberRevenue: decemberRevenue
        }
    }
}

let predictionsForm = document.querySelector('#input-value-and-time-form')

predictionsForm.addEventListener('keyup', (e) =>{



    let priceEntered = parseFloat(predictionsForm.elements['price'].value);

    if (priceEntered > 1000){
        alert('please input a reasonable price')
        predictionsForm.elements['price'].value = 0;
        priceEntered = 0;
    }

    let dailyRevenue = incomeOverTime(priceEntered, 'Daily');
    let weeklyRevenue = incomeOverTime(priceEntered, 'Weekly');
    let monthlyRevenue = incomeOverTime(priceEntered, 'Monthly');
    let yearlyRevenue = incomeOverTime(priceEntered, 'Yearly')


    let htmlContent = `<div>
        <div class="prompt" class="d-flex flex-direction-col align-items-center">
            <h1 class="color-white text-align-center text-align-center">EARNINGS</h1>
        </div>
        <div class="details">
            <div class="d-flex flex-direction-col">
                <div class="header d-flex flex-direction-row justify-content-space-between">
                    <div>Period</div>
                    <div>Earnings</div>
                </div>

                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your weekly income will be: </div>
                    <div>${weeklyRevenue}</div>
                </div>

                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your yearly income will be: </div>
                    <div>${yearlyRevenue}</div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="d-flex flex-direction-col align-items-center">
            <h1 class="color-white text-align-center">LEAP YEAR EARNINGS</h1>
        </div>

        <div class="details">
            <div class="d-flex flex-direction-col">
                <div class="header d-flex flex-direction-row justify-content-space-between">
                    <div>Month</div>
                    <div>Earnings</div>
                </div>

                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for January </div>
                    <div>${monthlyRevenue.januaryRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for Febraury </div>
                    <div>${monthlyRevenue.februaryRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for March </div>
                    <div>${monthlyRevenue.marchRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for April </div>
                    <div>${monthlyRevenue.aprilRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for May </div>
                    <div>${monthlyRevenue.mayRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for June </div>
                    <div>${monthlyRevenue.juneRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for July </div>
                    <div>${monthlyRevenue.julylRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for August </div>
                    <div>${monthlyRevenue.augustRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for September </div>
                    <div>${monthlyRevenue.septemberRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for October </div>
                    <div>${monthlyRevenue.octoberRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for November </div>
                    <div>${monthlyRevenue.novemberRevenue}</div>
                </div>
                <div class="d-flex flex-direction-row justify-content-space-between">
                    <div>Your Income for December </div>
                    <div>${monthlyRevenue.decemberRevenue}</div>
                </div>
            </div>
        </div>
    </div>`

let reportFormInfo = document.querySelector('.report-form');
reportFormInfo.innerHTML = htmlContent;
// reportFormInfo.classList.toggle('display-none')

})