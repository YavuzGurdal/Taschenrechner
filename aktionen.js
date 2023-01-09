let firstValue = '';
let secondValue = '';
let operator = '';

let screen = document.getElementsByClassName('mainTopContainer')[0]

const getValue = (e) => {
    let a = e.innerHTML

    if (!operator) {
        if (a === ',' && firstValue.includes(',')) return // virgul 1'den fazla yazilmamasi icin

        firstValue += a.toString()

        screen.innerHTML = firstValue
    } else {
        if (secondValue == '') {
            parseInt(a).toString() // bastaki sifiri yok etmek icin yazdim
            secondValue += a

            screen.innerHTML = `${firstValue} ${operator} ${secondValue}`
        } else {
            if (a === ',' && secondValue.includes(',')) return // virgul 1'den fazla yazilmamasi icin
            secondValue += a.toString()

            screen.innerHTML = `${firstValue} ${operator} ${secondValue}`
        }
    }
}
const getOperator = (e) => {
    if (operator !== '' && secondValue) {
        calculate()
    }

    let b = e.innerHTML
    operator = b

    screen.innerHTML = `${firstValue} ${operator}`
}

const calculate = () => {
    if (!operator) return
    if (!secondValue) return

    let first = parseFloat(firstValue.replace(",", "."))
    let second = parseFloat(secondValue.replace(",", "."))

    //console.log(first)
    //console.log(second)

    screen.innerHTML = ''

    let stringResult = ''

    switch (operator) {
        case "+":
            calculateResult = (first + second).toFixed(2);
            stringResult = numberToStringFunction(calculateResult)
            secondValue = '';
            operator = '';
            screen.innerHTML = `${stringResult}`;
            break;
        case "-":
            calculateResult = (first - second).toFixed(2);
            //firstValue = calculateResult;
            stringResult = numberToStringFunction(calculateResult)
            secondValue = '';
            operator = '';
            screen.innerHTML = `${stringResult}`;
            break;
        case "x":
            calculateResult = (first * second).toFixed(2);
            //firstValue = calculateResult;
            stringResult = numberToStringFunction(calculateResult)
            secondValue = '';
            operator = '';
            screen.innerHTML = `${stringResult}`;
            break;
        case ":":
            calculateResult = (first / second).toFixed(2);
            //firstValue = calculateResult;
            stringResult = numberToStringFunction(calculateResult)
            secondValue = '';
            operator = '';
            screen.innerHTML = `${stringResult}`;
            break;
        default:
            break;
    }
}

function numberToStringFunction(num) {
    let parcala = num.split('.')

    if (Number.isInteger(num)) {
        if (parcala[1] == '00') {
            return firstValue = parcala[0]
        } else {
            return firstValue = (num + ".0").replace(".", ",");
        }
    } else {
        if (parcala[1] == '00') {
            return firstValue = parcala[0]
        } else {
            return firstValue = (num.toString()).replace(".", ",");
        }
    }
}

const deleteAll = () => {
    firstValue = '';
    secondValue = '';
    operator = '';
    screen.innerHTML = '';
}