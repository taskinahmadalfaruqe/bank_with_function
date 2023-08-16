// GET INPUT FIELD VALUE BY USING .VALUE && ID 

function valueFind(valueInput){
    let findParameter= document.getElementById(valueInput)
    let parameterValue = findParameter.value;
    let convertToNumber= parseFloat(parameterValue);
    findParameter.value='';
    return convertToNumber;
};

// GET FIELD VALUE BY USING .INNERTEXT && ID 

function textValueFind(inputID){
    let findTextParameter= document.getElementById(inputID)
    let parameterTextValue = findTextParameter.innerText;
    let convertTextToNumber= parseFloat(parameterTextValue);
    return convertTextToNumber;
};

// SET TEXT ELEMENT BY ID 
function setTextValue(textId, newSum){
    let findTextElement= document.getElementById(textId);
    findTextElement.innerText= newSum;
    return true;
}