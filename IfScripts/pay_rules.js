// My work:
// hoursWorked = 40;

// if (hoursWorked < 40) {
//     payRate = 12.50 * hoursWorked;
// } else if (hoursWorked === 40) {
//     payRate = 25.00 * hoursWorked;
// } else if (hoursWorked > 40) { 
//     var overTime = hoursWorked - 40; 
//     payRate = (40 * 17.30) + (overTime * 25.95); 
// }

// console.log(payRate);

// Greg:

var payRate = 17.3;
var overTimeRate = payRate * 1.5;
var hoursWorked = 45;

var grossPay;

if(hoursWorked > 40) {
    var overHours = hoursWorked - 40;
    grossPay = payRate * 40 + overHours * overTimeRate;
} else {
    grossPay = payRate * hoursWorked;
}

console.log(grossPay);