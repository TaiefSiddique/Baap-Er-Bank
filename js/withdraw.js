document.getElementById("btn-withdraw").addEventListener("click", function(){
    const amount= document.getElementById("input-withdraw").value;
    //console.log(amount);
    document.getElementById("amount-withdraw").innerText="$"+amount;
    document.getElementById("amount-balance").innerText=parseInt(document.getElementById("amount-balance").innerText) -parseInt(amount);
    //console.log(document.getElementById("amount-balance").innerText);
})