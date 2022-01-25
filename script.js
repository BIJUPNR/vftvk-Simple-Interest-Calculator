function compute()
{
    
    var result = document.getElementById("result"); 
    result.innerHTML = "";

    if (document.getElementById("principal").value.length == 0){
        alert("Enter a positive number");        
        return false;
    }
    
    var principal =  parseFloat(document.getElementById("principal").value);  
    
    if (principal < 1){        
        alert ("Enter a positive number"); 
        document.getElementById("principal").focus;     
        return false;
    }
    
    
    var rate = parseFloat(document.getElementById("rate").value);     
    var years = parseInt(document.getElementById("years").value);    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years); 

    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate}%</mark>.<br/> 
    You will receive an amount of <mark>${interest}</mark>,<br/> in the year ${year}`;
        
}

function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}
        
