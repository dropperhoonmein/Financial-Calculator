let sipAmount = document.getElementById("sipAmount")
let rate = document.getElementById("rate")
let yr = document.getElementById("yr")
let invested = document.getElementById("invested")
let returns = document.getElementById("returns")
let totalVal = document.getElementById("totalVal")



//// functions


/// main
sipAmount.addEventListener("input", function () {
    let sipAmountN = 0
    let sipAmountNew = parseInt(sipAmount.value)
    let yrN = parseInt(yr.value) * 12
    let rateN = parseInt(rate.value) / 12
    console.log("sip " + sipAmountN + ", years " + yrN + ", rate " + rateN)
    for (let i = 0; i < yrN; i++) {
        sipAmountN = sipAmountN + sipAmountNew
        sipAmountN = sipAmountN + ((sipAmountN / 100) * rateN)
    }
    invested.innerHTML = "₹" + parseInt(sipAmountNew * yrN)
    console.log(parseInt(sipAmountNew * yrN))
    if (invested.innerHTML == "₹NaN") {
        invested.innerHTML = "-"
    }
    returns.innerHTML = "₹" + parseInt(sipAmountN - (sipAmountNew * yrN))
    if (returns.innerHTML == "₹NaN") {
        returns.innerHTML = "-"
    }
    totalVal.innerHTML = "₹" + parseInt(sipAmountN)
    if (totalVal.innerHTML == "₹NaN") {
        totalVal.innerHTML = "-"
    }
})

yr.addEventListener("input", function(){
    document.getElementById("displayYears").innerHTML = yr.value + " Years"
    let sipAmountN = 0
    let sipAmountNew = parseInt(sipAmount.value)
    let yrN = parseInt(yr.value) * 12
    let rateN = parseInt(rate.value) / 12
    console.log("sip " + sipAmountN + ", years " + yrN + ", rate " + rateN)
    for (let i = 0; i < yrN; i++) {
        sipAmountN = sipAmountN + sipAmountNew
        sipAmountN = sipAmountN + ((sipAmountN / 100) * rateN)
    }
    invested.innerHTML = "₹" + parseInt(sipAmountNew * yrN)
    console.log(parseInt(sipAmountNew * yrN))
    if (invested.innerHTML == "₹NaN") {
        invested.innerHTML = "-"
    }
    returns.innerHTML = "₹" + parseInt(sipAmountN - (sipAmountNew * yrN))
    if (returns.innerHTML == "₹NaN") {
        returns.innerHTML = "-"
    }
    totalVal.innerHTML = "₹" + parseInt(sipAmountN)
    if (totalVal.innerHTML == "₹NaN") {
        totalVal.innerHTML = "-"
    }
})

rate.addEventListener("input", function(){
    document.getElementById("displayRate").innerHTML = rate.value + "%"
    let sipAmountN = 0
    let sipAmountNew = parseInt(sipAmount.value)
    let yrN = parseInt(yr.value) * 12
    let rateN = parseInt(rate.value) / 12
    console.log("sip " + sipAmountN + ", years " + yrN + ", rate " + rateN)
    for (let i = 0; i < yrN; i++) {
        sipAmountN = sipAmountN + sipAmountNew
        sipAmountN = sipAmountN + ((sipAmountN / 100) * rateN)
    }
    invested.innerHTML = "₹" + parseInt(sipAmountNew * yrN)
    console.log(parseInt(sipAmountNew * yrN))
    if (invested.innerHTML == "₹NaN") {
        invested.innerHTML = "-"
    }
    returns.innerHTML = "₹" + parseInt(sipAmountN - (sipAmountNew * yrN))
    if (returns.innerHTML == "₹NaN") {
        returns.innerHTML = "-"
    }
    totalVal.innerHTML = "₹" + parseInt(sipAmountN)
    if (totalVal.innerHTML == "₹NaN") {
        totalVal.innerHTML = "-"
    }
})