// get previous value
let preValue = 0;
// get operator
let operator = null;
// show value on screen
let show = "";

window.onload = () => {
    let keys = document.querySelectorAll("#calculator-keys span");

    for (let key of keys) {
        key.addEventListener("click", getNumber);
    }
};

const showOnscreen = (number) => {
    const screen = document.querySelector("#screen-text");

    screen.innerHTML = number;
};

const removeValue = () => {
    show = show.toString();
    show = show.substring(0, show.length - 1);
    showOnscreen(show);
};

/**
 * make operation
 * @param {number} number number of nb1
 * @param {number} number number of nb2
 * @param {string} operator
 * @return {number} number number of }
 */
function calculate(nb1, nb2, operator) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    switch (operator) {
        case "+":
            return nb1 + nb2;
        case "-":
            return nb1 - nb2;
        case "*":
            return nb1 * nb2;
        case "/":
            return nb1 / nb2;
    }
}

/**
 * action when click a key
 */
function getNumber() {
    let key = this.dataset.key;
    if (parseInt(key) >= 0 || key === ".") {
        // update show value
        console.log(key);
        show = show == "" ? key.toString() : show + key.toString();
        showOnscreen(show);
    } else {
        switch (key) {
            case "delete":
                removeValue();
                break;
            case "reset":
                preValue = 0;
                show = "";
                operator = null;
                showOnscreen(show);
                break;

            case "+":

            case "-":

            case "*":

            case "/":
                //Calculate the previous value
                preValue =
                    preValue == 0 ?
                    parseFloat(show) :
                    calculate(preValue, parseFloat(show), operator);
                //update the screen
                showOnscreen(preValue);
                // store the operator's key
                operator = key;
                //reset screen show variable
                show = "";
                break;
            case "equal":
                //Calculate the previous value
                preValue =
                    preValue == 0 ?
                    parseFloat(show) :
                    calculate(preValue, parseFloat(show), operator);
                //update the screen
                showOnscreen(preValue);
                // store the result
                show = preValue;
                //reset the previous value
                preValue = 0;

                break;

            default:
                break;
        }
    }
}