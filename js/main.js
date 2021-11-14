var form = document.getElementById("form");
var input = document.getElementById("input");
var result = document.getElementById("result");
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(input.value% 5 == 0 && input.value % 3 == 0){
        result.textContent = "fizzbuzz";
    } else if(input.value % 5 == 0){
        result.textContent = "fizz";
    }else if(input.value % 3 == 0){
        result.textContent = "buzz";
    } else{
        result.textContent = "Qayta urining"; 
        
    }
    input.value = "";
})