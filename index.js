const number = document.querySelectorAll('.dataNumber');
const operator = document.querySelectorAll('.dataOperator');
const clearAll = document.querySelector('.dataClearAll');
const clear = document.querySelector('.dataClear');
const equal = document.querySelector('.dataEqual');
const p = document.querySelector('p');
let operatorButton;


number.forEach(num => {
    num.addEventListener('click', (e) => {
        p.innerText += e.target.innerText;
    });
});

operator.forEach(opt => {
    opt.addEventListener('click', (e) => {
    operatorButton = e.target.innerText;
    p.innerText += e.target.innerText;
    });
});

clearAll.addEventListener('click', (e) => {
    p.innerText = '';
});

equal.addEventListener('click', (e) => {
    let statement = p.innerText;
    statement = statement.split(operatorButton);
    let result;
    switch (operatorButton) {
        case '+':
            result = parseFloat(statement[0]) + parseFloat(statement[1]);

            break;

        case '-':
            result = parseFloat(statement[0]) - parseFloat(statement[1]);

            break;

        case '*':
            result = parseFloat(statement[0]) * parseFloat(statement[1]);

            break;

        case '/':
            result = parseFloat(statement[0]) / parseFloat(statement[1]);

            break;

        case '^':
            result = Math.pow(parseFloat(statement[0]), parseFloat(statement[1]));

            break;

        case '√':
            result = Math.sqrt(parseFloat(statement[0]));

            break;

        case '|x|':
                result = Math.abs(parseFloat(statement[0]));
    
                break;
    
        default:
            break;
    }

    p.innerText = result;

});