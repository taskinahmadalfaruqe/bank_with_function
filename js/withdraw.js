document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    // GET WITHDRAW VALUE 
    let withdrawInput= valueFind("withdraw-amount");

    // PREVIOUS MAIN BALANCE
    let previousBalance= textValueFind('balance');

    // FIND WITHDRAW TOTAL 
    let withdrawTotal = textValueFind('withdraw');
    
    if(isNaN(withdrawInput)){
        return alert('Withdraw Is Not A Number')
    }else if(withdrawInput<=0){
        return alert("Enter a Positive Amount")

    }else if(previousBalance >= withdrawInput){
        let newBalance= previousBalance-withdrawInput;
        let setNewBalance =setTextValue('balance', newBalance);

        // SET WITHDRAW TOTAL
        let totalWithdraw= withdrawTotal+withdrawInput;
        let newWithdrawTotal= setTextValue('withdraw', totalWithdraw);
    }else{
        return alert("You Have Not Enough Money For Withdraw")
    }
   
});