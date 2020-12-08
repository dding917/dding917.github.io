document.write("Loan Summary:</br>");

// Define Function
function MonthlyPaymentCalculation(totalLoanAmount, effectiveRate, totalPaybackMonth) {
  var result = 0;
  result = totalLoanAmount / ((1 - 1 / (1 + effectiveRate) ** totalPaybackMonth)) * effectiveRate;
  return(result);
}
//Declare variables
var counter = 0;
var counterCheck = 0;
var beginningBalance = 0;
var monthlyInterest = 0;
var monthlyPrinciple = 0;
var endingBalance = 0;
var yearStatus = 0;
var monthlyPayment = 0;
var effectiveRate = 0;
var totalPaybackMonth = 0;
var totalToBank = 0;
var totalInterest = 0;
var paymentYearLeft = 0;
var beginningBalanceStatus = 0;
var interestPaid = 0;
var pricipleLeft = 0;
var totalPaymentLeft = 0;
var totalInterestLeft = 0;
var monthCompleted = 0;
var balance = 0;
//Prompt for three variables
var totalLoanAmount = Number(prompt("Please enter the Total Loan Amount."));
var nominalRate = Number(prompt("Please enter the Nominal Rate - example 0.10 for 10%, 0.03 for 3%... "));
var paybackTerm = Number(prompt("Please enter a payback term in years."));

//General Information Calculation Module
//Start calculations
effectiveRate = nominalRate / 12;
totalPaybackMonth = paybackTerm * 12;

//Call Function
monthlyPayment = MonthlyPaymentCalculation(totalLoanAmount, effectiveRate, totalPaybackMonth);

//Roundup
monthlyPayment = Math.round(monthlyPayment * 100) / 100;

//Calculate total payment to the bank
totalToBank = monthlyPayment * totalPaybackMonth;
totalToBank = Math.round(totalToBank * 100) / 100;

//Calculate total interest
totalInterest = totalToBank - totalLoanAmount;
totalInterest = Math.round(totalInterest * 100) / 100;

//Set ending balance for month 0
beginningBalanceStatus = totalLoanAmount;

//Display
document.write("The monthly payment is $" + monthlyPayment + " for " + totalPaybackMonth + " months" + ".</br>");
document.write("The total payment to the bank is $" + totalToBank + ", in which the total payment to the loan principle is $" + totalLoanAmount + ", and the total interest is $" + totalInterest + "</br>");
document.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------------</br>");

//Status Check module
var yearStatus = Number(prompt("Please enter the year you want to check your loan status - in year."));
var monthCompleted = yearStatus * 12;

//Loan Status Check looped with for
for (counterCheck = 1; counterCheck <= monthCompleted; counterCheck++) {
  //for (counter = 1; counter <= totalPaybackMonth; counter++) {
  //Calculations
  beginningBalance = beginningBalanceStatus;
  monthlyInterest = beginningBalance * effectiveRate;
  monthlyInterest = Math.round(monthlyInterest * 100) / 100;
  monthlyPrinciple = monthlyPayment - monthlyInterest;
  monthlyPrinciple = Math.round(monthlyPrinciple * 100) / 100;
  beginningBalanceStatus = beginningBalance - monthlyPrinciple;
  beginningBalanceStatus = Math.round(beginningBalanceStatus * 100) / 100;
  interestPaid = interestPaid + monthlyInterest;
  //document.write(interestPaid + ".</br>");
}
document.write("Loan Status Check Result:</br>");
  //If last year
  if (yearStatus >= paybackTerm) {
    document.write("Congratulations! You paid back your loan at year " + paybackTerm + ".</br>");
    document.write("\n");
    document.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------------</br>");
  }  else {
      document.write("At the end of year " + yearStatus  + ":</br>");
      paymentYearLeft = paybackTerm - yearStatus;
      document.write("Your loan has " + paymentYearLeft + " year left " + ".</br>");
      pricipleLeft = beginningBalanceStatus;
      totalInterestLeft = totalInterest - interestPaid;
      totalInterestLeft = Math.round(totalInterestLeft * 100) / 100;
      totalPaymentLeft = beginningBalanceStatus + totalInterestLeft;
      document.write("The principle balance left is $" + pricipleLeft + 
                     ", the interest left is $" + totalInterestLeft + ", the total payment left is $" + totalPaymentLeft + ".</br>");
      document.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------------</br>");
  }

//Detailed information calculation module display
document.write("The following is the loan details:" + "</br>");
document.write(" Please note the roundup adjustment is made at the last month of the loan payment." + "</br>");
document.write(" Please note the taxes , fees and insurances are not included in this template." + "</br>");

//Set ending balance for month 0
endingBalance = totalLoanAmount;

//Monthly Payments looped with for
for (counter = 1; counter <= totalPaybackMonth; counter++) {
  //Calculations
  beginningBalance = endingBalance;
  monthlyInterest = beginningBalance * effectiveRate;
  monthlyInterest = Math.round(monthlyInterest * 100) / 100;
  monthlyPrinciple = monthlyPayment - monthlyInterest;
  monthlyPrinciple = Math.round(monthlyPrinciple * 100) / 100;
  endingBalance = beginningBalance - monthlyPrinciple;
  endingBalance = Math.round(endingBalance * 100) / 100;
  
  //If statement to adjust last month principle payment
  if (counter === totalPaybackMonth) {
    monthlyPrinciple = beginningBalance - monthlyInterest;
    monthlyPrinciple = Math.round(monthlyPrinciple * 100) / 100;
    endingBalance = beginningBalance - monthlyPrinciple - monthlyInterest;
    endingBalance = Math.round(endingBalance * 100) / 100; 
  } else {
  }
  //Display output
  document.write(" Month " + "............beginning balance" + ".........interest paid" + "..........principle paid" + "...........ending balance " + "</br>");
  document.write(counter + ".....................$" + beginningBalance + ".......................$" + monthlyInterest + "......................$" + monthlyPrinciple + "...................$" + endingBalance + "</br>");
}
  balance = Math.round(endingBalance * 100) / 100; 
