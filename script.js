function check() {
    let vSalary = document.getElementById("salary")
    let vPrice = document.getElementById("price")
    let salary = 0
    let time = 0

 while (vPrice.value > salary) {
      time++
      salary = vSalary.value * time
} 
var hours = Math.floor(time / 60);  
var minutes = time % 60; 
alert ('you need work ' + hours + ' hours ' + 'and ' + minutes + ' minutes')
} 
