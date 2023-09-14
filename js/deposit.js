document.getElementById("btn-deposit").addEventListener("click", function(){
    const amount= document.getElementById("input-deposit").value;
    //console.log(amount);
    document.getElementById("amount-deposit").innerText="$"+amount;
    document.getElementById("amount-balance").innerText=parseInt(document.getElementById("amount-balance").innerText) +parseInt(amount);
    //console.log(document.getElementById("amount-balance").innerText);
})