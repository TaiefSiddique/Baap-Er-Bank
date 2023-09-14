document.getElementById("btn-login").addEventListener("click",function(){
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    if(email==="user" && pass==="123"){
        location.href="bank.html";

        //  const link=document.createElement("a");
         
        //  link.textContent="press";
        //  document.body.appendChild(link);
        
        
    }
    else
    console.log("Invalid User");
})