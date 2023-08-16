document.getElementById('btn-deposit').addEventListener('click', function(){

    // FIND THE INPUT VALUE NUMBER 
    let depositInput =  valueFind("deposit-amount")

    if(isNaN(depositInput)){

        return alert('Deposit Input Is Not A Number');
        
    }else if( depositInput > 0 ){

        // FIND THE PREVIOUS DEPOSIT AMOUNT 
        let previousDeposit = textValueFind('deposit')

        // SUM OF DEPOSIT TOTAL 
        let depositTotal= previousDeposit+depositInput
        let setNewDeposit = setTextValue('deposit', depositTotal);

        // SET NRW BALANCE
        let previousBalance=textValueFind('balance');
        let newBalance = previousBalance+ depositInput;
        let setNewBalance = setTextValue('balance',newBalance);

    }else{    
        return alert("Input Must Be A Positive Amount")
    }
})