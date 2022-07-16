    // THE DATA HERE IS THE SAME AS THE ONE ON file.js . ALSO, IT DOESN'T INCLUDE CHANGES IN THE MADE
    // DURING ENTRY OF DATA IN THE add_entry.html PAGE. NOTHING'S BEEN SYNCED AND AS AT NOW, THIS
    // ONLY SERVES FOR DEMONSTRATION PURPOSE

let milkProduction = {
    'shed A': {
        1657962713399: 676,
        1657876313399: 589,
        1657703513399: 484,
        1657444313399: 673,
        1657098713399: 532,
        1656666713399: 732,
        1656148313399: 234,
        1655543513399: 645,
        1654852313399: 464,
        1654074713399: 623,
        1653210713399: 455,
    },

    'shed B': {
        1657962713399: 476,
        1657876313399: 385,
        1657703513399: 383,
        1657444313399: 672,
        1657098713399: 435,
        1656666713399: 636,
        1656148313399: 336,
        1655543513399: 642,
        1654852313399: 562,
        1654074713399: 426,
        1653210713399: 352,
    },

    'shed C': {
        1657962713399: 464,
        1657876313399: 324,
        1657703513399: 375,
        1657444313399: 625,
        1657098713399: 475,
        1656666713399: 664,
        1656148313399: 386,
        1655543513399: 642,
        1654852313399: 553,
        1654074713399: 486,
        1653210713399: 331,
    },

    'shed D': {
        1657962713399: 431,
        1657876313399: 332,
        1657703513399: 365,
        1657444313399: 673,
        1657098713399: 442,
        1656666713399: 656,
        1656148313399: 375,
        1655543513399: 686,
        1654852313399: 542,
        1654074713399: 463,
        1653210713399: 363,
    },

    'shed E': {
        1657962713399: 413,
        1657876313399: 386,
        1657703513399: 397,
        1657444313399: 664,
        1657098713399: 442,
        1656666713399: 632,
        1656148313399: 364,
        1655543513399: 647,
        1654852313399: 532,
        1654074713399: 464,
        1653210713399: 344,
    }
}


let milkSellInfo = {
    1657962713399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 367,
            sellingPrice: 57
        } 
    },

    1657876313399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 378,
            sellingPrice: 68
        } 
    },

    1657703513399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 378,
            sellingPrice: 68
        } 
    },

    1657444313399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 687,
            sellingPrice: 68
        } 
    },

    1657098713399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 782,
            sellingPrice: 68
        } 
    },

    1656666713399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 468,
            sellingPrice: 68
        } 
    },

    1656148313399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 647,
            sellingPrice: 68
        } 
    },

    1655543513399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 958,
            sellingPrice: 68
        } 
    },

    1654852313399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 978,
            sellingPrice: 68
        } 
    },

    1654074713399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 878,
            sellingPrice: 68
        } 
    },

    1653210713399: {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Other",
            amountInLiters: 978,
            sellingPrice: 68
        } 
    }
}

//-------------------------------------------------------------------------
//Create and Art report on production of milk for each shade

let productionReportDetails = ``;

let productionReportHTML = document.querySelector('#report-container')
let createReportButton = document.querySelector('#get-report-button')

createReportButton.addEventListener('click', (e)=>{
    e.preventDefault();
        
    let sevenMostRecentDays = [];

    // Here we are at the first part, creating report details for production. The next will be
    // adding the sales report (how much was sold to what customer and what profit was gained)
    
    for (const [shed, productionDetails] of Object.entries(milkProduction)){
        let shedProductionDetailsForTheWeek = new Map(Object.entries(milkProduction[shed]));
        shedProductionDetailsForTheWeek = [...shedProductionDetailsForTheWeek].sort().reverse().slice(0, 7);
    
        let totalWeekProduction = 0;
        shedProductionDetailsForTheWeek.forEach(dateAndProductionQuantity =>{

            if(sevenMostRecentDays.length < 7){
                let currentDay = parseInt(dateAndProductionQuantity[0]);
                sevenMostRecentDays.push(currentDay)
            }
            let currentDayProductionQuantity = dateAndProductionQuantity[1];
            totalWeekProduction += currentDayProductionQuantity;
        });
    
        let averageDailyProductionQuantity = Math.round(totalWeekProduction/7);
    
        productionReportDetails += `<div class="d-flex flex-direction-row justify-content-space-between">
        <div>${shed}: </div>
        <div>${averageDailyProductionQuantity} liters per day</div>
    </div>`
    }


    // Here is the second part (Read the comment above to follow)

    let brooksideTotalRevenue = 0;
    let brooksideTotalQuatity = 0;

    let otherTotalRevenue = 0;
    let otherTotalQuantity = 0;

    for (let i = 0; i < sevenMostRecentDays.length; i++){
        let currentDay = sevenMostRecentDays[i];
        
        let quantitySoldToBrookside =  milkSellInfo[currentDay][1].amountInLiters;
        let sellingPriceForBrookside = milkSellInfo[currentDay][1].sellingPrice;
        let revenueFromSaleToBrookside = quantitySoldToBrookside * sellingPriceForBrookside;

        brooksideTotalQuatity += quantitySoldToBrookside
        brooksideTotalRevenue += revenueFromSaleToBrookside;


        let quantitySoldToOther =  milkSellInfo[currentDay][2].amountInLiters;
        let sellingPriceForOther = milkSellInfo[currentDay][2].sellingPrice;
        let revenueFromSaleToOther = quantitySoldToOther * sellingPriceForOther;

        otherTotalQuantity += quantitySoldToOther;
        otherTotalRevenue += revenueFromSaleToOther;
    }

    let averagePriceForBrookside = Math.round(brooksideTotalRevenue/brooksideTotalQuatity);
    let averageQuantityForBrookside = Math.round(brooksideTotalQuatity/7);
    let averageRevenueForBrookside = Math.round(brooksideTotalRevenue/7);

    let averagePriceForOther = Math.round(otherTotalRevenue/otherTotalQuantity);
    let averageQuantityForOther = Math.round(otherTotalQuantity/7);
    let averageRevenueForOther = Math.round(otherTotalRevenue/7);


    // Now we add what we have calculated to the html file

    createReportButton.classList.toggle('display-none');
    productionReportHTML.innerHTML += `<div id="report-info" class="container">
    <div>
        <div id="report-header">
            <h1>Report</h1>
            <p class="color-white">(All values are average daily)</p>
        </div>
        <div class="report-form">
            <div>
                <div class="prompt" class="d-flex flex-direction-col align-items-center">
                    <h2><span class="white-shadow">This Week's</span> <span class="color-white">Average</span></h2>
                    <h1 class="color-white text-align-center text-align-center">PRODUCTION</h1>
                </div>
                <div class="details">
                    <div class="d-flex flex-direction-col">
                        <div class="header d-flex flex-direction-row justify-content-space-between">
                            <div>Shed</div>
                            <div>Details</div>
                        </div>
                        ${productionReportDetails}
                    </div>
                </div>
            </div>
    
            <div>
                <div class="d-flex flex-direction-col align-items-center">
                    <h2><span class="white-shadow">This Week's</span> <span class="color-white">Average</span></h2>
                    <h1 class="color-white text-align-center">SALES</h1>
                </div>
    
                <div class="details">
                    <div class="d-flex flex-direction-col">
                        <div class="header d-flex flex-direction-row justify-content-space-between">
                            <div>Customer</div>
                            <div>Details</div>
                        </div>
    
                        <div class="customer d-flex flex-direction-row justify-content-space-between">
                            <div class="customer-name">Brookside Diaries</div>
                            <div class="particulars">
                                <div class="d-flex justify-content-space-between">
                                    <p>Quantity</p>
                                    <p>=</p>
                                    <p>${averageQuantityForBrookside}</p>
                                </div>
                                <div class="d-flex justify-content-space-between">
                                    <p>Price</p>
                                    <p>=</p>
                                    <p>${averagePriceForBrookside}</p>
                                </div>
                                <div class="d-flex justify-content-space-between">
                                    <p>Revenue</p>
                                    <p>=</p>
                                    <p>${averageRevenueForBrookside}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="customer d-flex flex-direction-row justify-content-space-between">
                            <div class="customer-name">Other</div>
                            <div class="particulars">
                                <div class="d-flex justify-content-space-between">
                                    <p>Quantity</p>
                                    <p>=</p>
                                    <p>${averageQuantityForOther}</p>
                                </div>
                                <div class="d-flex justify-content-space-between">
                                    <p>Price</p>
                                    <p>=</p>
                                    <p>${averagePriceForOther}</p>
                                </div>
                                <div class="d-flex justify-content-space-between">
                                    <p>Revenue</p>
                                    <p>=</p>
                                    <p>${averageRevenueForOther}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </div>`;    
});
