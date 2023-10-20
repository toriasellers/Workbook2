// This is how I solved it with else if based on the date table in schoology 

hoursWorked = 45;

if (hoursWorked < 40) {
     payRate = 12.50 * hoursWorked;
} else if (hoursWorked === 40) {
     payRate = 25.00 * hoursWorked;
 } else if (hoursWorked > 40) { 
   var overTime = hoursWorked - 40; 
    payRate = (40 * 17.30) + (overTime * 25.95); 
 }

console.log(payRate);