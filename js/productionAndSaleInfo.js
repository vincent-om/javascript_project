let milkProduction = {
    shedA: {
        '2022-06-11': 665,
        '2022-06-12': 673,
        '2022-06-13': 639,
        '2022-06-14': 531,
        '2022-06-15': 652,
        '2022-06-16': 521,
        '2022-06-17': 631,
        '2022-06-18': 636,
        '2022-06-19': 523,
        '2022-06-20': 611,
        '2022-06-21': 631,
    },

    shedB: {
        '2022-06-11': 527,
        '2022-06-12': 667,
        '2022-06-13': 540,
        '2022-06-14': 578,
        '2022-06-15': 557,
        '2022-06-16': 544,
        '2022-06-17': 513,
        '2022-06-18': 645,
        '2022-06-19': 395,
        '2022-06-20': 534,
        '2022-06-21': 667,
    },

    shedC: {
        '2022-06-11': 642,
        '2022-06-12': 678,
        '2022-06-13': 658,
        '2022-06-14': 610,
        '2022-06-15': 682,
        '2022-06-16': 667,
        '2022-06-17': 689,
        '2022-06-18': 667,
        '2022-06-19': 527,
        '2022-06-20': 666,
        '2022-06-21': 598,
    },

    shedD: {
        '2022-06-11': 591,
        '2022-06-12': 512,
        '2022-06-13': 513,
        '2022-06-14': 542,
        '2022-06-15': 411,
        '2022-06-16': 590,
        '2022-06-17': 511,
        '2022-06-18': 542,
        '2022-06-19': 682,
        '2022-06-20': 624,
        '2022-06-21': 653,
    },

    shedE: {
        '2022-06-11': 675,
        '2022-06-12': 663,
        '2022-06-13': 613,
        '2022-06-14': 664,
        '2022-06-15': 717,
        '2022-06-16': 686,
        '2022-06-17': 778,
        '2022-06-18': 514,
        '2022-06-19': 700,
        '2022-06-20': 689,
        '2022-06-21': 688,
    }
}


let milkSellInfo = {
    '2022-06-11': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 367,
            sellingPrice: 57
        } 
    },

    '2022-06-12': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 378,
            sellingPrice: 68
        } 
    },

    '2022-06-13': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 378,
            sellingPrice: 68
        } 
    },

    '2022-06-14': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 687,
            sellingPrice: 68
        } 
    },

    '2022-06-15': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 782,
            sellingPrice: 68
        } 
    },

    '2022-06-16': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 468,
            sellingPrice: 68
        } 
    },

    '2022-06-17': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 647,
            sellingPrice: 68
        } 
    },

    '2022-06-18': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 958,
            sellingPrice: 68
        } 
    },

    '2022-06-19': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 978,
            sellingPrice: 68
        } 
    },

    '2022-06-20': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 878,
            sellingPrice: 68
        } 
    },

    '2022-06-21': {
        1: {
            customerName: "Brookside Diaries",
            amountInLiters: 2500,
            sellingPrice: 45
        },

        2: {
            customerName: "Local Market",
            amountInLiters: 978,
            sellingPrice: 68
        } 
    }
}

for (const [shed, production] of Object.entries(milkProduction)) {
    console.log(shed, production);
}
  