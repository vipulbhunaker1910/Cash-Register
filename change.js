var billAmount=document.querySelector("#bill-amount");
var cashAmount=document.querySelector("#cash-given");
var checkbutton=document.querySelector(".check-btn");
var numberofNotes=document.querySelectorAll(".cash-need-toreturn");

var availabenotes=[2000,500,200,100,50,20,10,5,2,1]
checkbutton.addEventListener("click",amountlogic);
function amountlogic(){
if(billAmount.value>0){
  if(cashAmount.value >= billAmount.value){
    var diff_amount=cashAmount.value-billAmount.value;
    noofnotes(diff_amount);
  } else{ 
    msg="Cash Amount cannot be less than Bill Amount";
    showmsg(msg);
  }
}
else{
    msg="Bill Amount should be greater than 0";
    showmsg(msg);
}
}
function noofnotes(diss_amount){
    for(let i=0;i<availabenotes.length;i++){
        var notes=Math.trunc(diss_amount/availabenotes[i]);
    numberofNotes[i].innerHTML=notes;
    diss_amount=diss_amount%availabenotes[i];
    }
}
function showmsg(msg){
    alert(msg);
}
