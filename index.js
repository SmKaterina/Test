document.getElementById('submitButton').onclick = function(event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById('num1').value),
        num2 = parseInt(document.getElementById('num2').value),
        Operator = document.getElementById('Operator').value,
        output = document.getElementById('result');

    switch(Operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 != 0)
            {
                result = num1 / num2;
            }else {
                result = 'Error!';
            }
            break;
        default:
            result = 'Error';
    }
    output.innerHTML = parseInt(result);
    //window.alert(parseInt(result));
    return false;
};
