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


//----------------------------------------------------------------
//PROCESS THE ADD QUERY PAGE


const todaysDate = Number(new Date());


//  Add milk production info

let productionEntryForm = document.querySelector('#add-sale-info-form')

productionEntryForm.addEventListener('submit', (e)=>{    
    const customerID = parseInt(productionEntryForm.elements['customer-name'].value);
    const quantitySold = parseInt(productionEntryForm.elements['quantity-sold'].value);
    const price = parseInt(productionEntryForm.elements['selling-price'].value);


    if (customerID == 1) {

        const newEntry = {
            customerName: 'Brookside Diaries',
            amountInLiters: quantitySold,
            sellingPrice: price
        };

        milkSellInfo[todaysDate] = {};
        milkSellInfo[todaysDate][1]= newEntry;

        alert('submission successful')
        alert('please note that entries without values are assumed to be zero')
    }

    else if (customerID == 2) {
        const newEntry = {
            customerName: 'Other',
            amountInLiters: quantitySold,
            sellingPrice: price
        };

        milkSellInfo[todaysDate] = {};
        milkSellInfo[todaysDate][2] = newEntry;

        alert('submission successful')
        alert('please note that entries without values are assumed to be zero')       
    }

    else {
        alert('Please Enter either 1 or 2 as the customer ID')
    }     
})


//  Add milk sale info

let saleEntryForm = document.querySelector('#add-production-info-form')

saleEntryForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const shedAProductionQuantity = parseInt(saleEntryForm.elements['shed-a-amount'].value);
    const shedBProductionQuantity = parseInt(saleEntryForm.elements['shed-b-amount'].value);
    const shedCProductionQuantity = parseInt(saleEntryForm.elements['shed-c-amount'].value);
    const shedDProductionQuantity = parseInt(saleEntryForm.elements['shed-d-amount'].value);
    const shedEProductionQuantity = parseInt(saleEntryForm.elements['shed-e-amount'].value);

    milkProduction['shed A'][todaysDate] = shedAProductionQuantity;
    milkProduction['shed B'][todaysDate] = shedBProductionQuantity;
    milkProduction['shed C'][todaysDate] = shedCProductionQuantity;
    milkProduction['shed D'][todaysDate] = shedDProductionQuantity;
    milkProduction['shed E'][todaysDate] = shedEProductionQuantity;

    alert('submission successful');
    alert('please note that entries without values are assumed to be zero')
});


// Process the button that switches between adding sales information and production information

let goToSaleInfo = document.querySelector('#go-to-sale-info');
let goToProductionInfo = document.querySelector('#go-to-production-info');

let addSaleInfo = document.querySelector('#add-sale-info-div');
let addProductionInfo = document.querySelector('#add-production-info-div');

addProductionInfo.classList.toggle('display-none')

let changeFormDisplayed = function(){
    addSaleInfo.classList.toggle('display-none');
    addProductionInfo.classList.toggle('display-none');

    return true;
}

goToProductionInfo.addEventListener('click', changeFormDisplayed);
goToSaleInfo.addEventListener('click', changeFormDisplayed);
