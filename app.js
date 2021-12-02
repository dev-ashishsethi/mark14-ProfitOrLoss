const buyPrice= document.querySelector("#buyPrice");
const qty= document.querySelector("#qty");
const currentPrice= document.querySelector("#currentPrice");
const btnCalc= document.querySelector("#btnCalc");
const output= document.querySelector("#output");

btnCalc.addEventListener("click",calculate);

function calculate(){
    var quantity= qty.value;
    var buyP= buyPrice.value*quantity;
    var currentP= currentPrice.value*quantity;


    if(currentP<buyP && Validite(quantity,buyP,currentP)){
        //loss
        var loss= buyP*quantity-currentP*quantity;
        var lossPercent= (loss/buyP)*100;
        ShowMessage(`Your loss is ${loss} & loss Percentage is ${lossPercent}`);
    }else if(butP<currentP && Validite(quantity,buyP,currentP)){
        //profit
        var profit=currentP*quantity-buyP*quantity;
        var ProfitPercent= (profit/buyP)*100;
        ShowMessage(`Your profit is ${profit} & profit Percentage is ${ProfitPercent}`);
    }else{
        // no profit no loss
        ShowMessage(`Your didn't face any Loss or Profit`);
    }
}

function Validate(quantity,buyP,currentP){

    if(quantity>0 && buyP >0 && currentP >0){
        return true;
    }
    else{
        ShowMessage(`Negative or Zero values are not allowed.`);
        return false;   
    }
}

function ShowMessage(message){
    output.innerText=message;
}