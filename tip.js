// Selectors
// let buttons = document.querySelector('.btn');
let customInput = document.querySelector('.custom');
let amountPerPerson = document.querySelector('.person-amount');
let resetBtn = document.querySelector('.reset');
let totalAmount = document.querySelector('.amount-total');
let billAmount = document.getElementById('bill-input');
let numberOfPerson = document.getElementById('people');
let billMessage = document.querySelector('.bill-message');
let personMessage = document.querySelector('.person-message');
let btns = document.querySelectorAll('.btns');

// Event Listeners
// buttons.addEventListener('click', calculateTip);
resetBtn.addEventListener('click', resetCalculator);
customInput.addEventListener('input', customCalculator);


// Functions

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        let btnClicked = e.currentTarget.dataset;
        let tipPercentage = parseInt(btnClicked.num);
    
    // check if both input have value
        let billValue = billAmount.value;
        let personValue = numberOfPerson.value;
        if(billValue && personValue)
        {
            let tipTotal = ((billValue/100) * tipPercentage).toFixed(2);
            let tipPerson = (tipTotal/personValue).toFixed(2);
            
            amountPerPerson.textContent = `$${tipPerson}`;
            totalAmount.lastElementChild.textContent = `$${tipTotal}`;

            resetBtn.classList.remove('disable');
        }
        else if(billValue && !personValue)
        {
            personMessage.classList.toggle('hide-error')
            setTimeout(() => {
                personMessage.classList.toggle('hide-error')
            }, 3000);
            resetBtn.classList.remove('disable');
        }
        else if(!billValue && personValue)
        {
            billMessage.classList.toggle('hide-error')
            setTimeout(() => {
                billMessage.classList.toggle('hide-error')
            }, 3000);
            resetBtn.classList.remove('disable');
        }
        else{
            billMessage.classList.toggle('hide-error')
            personMessage.classList.toggle('hide-error')
            setTimeout(() => {
                billMessage.classList.toggle('hide-error')
                personMessage.classList.toggle('hide-error')
            }, 3000)
        }
    })
})

function customCalculator(e) {
    let customValue = e.target.value;
    if(customValue){
        let tipPercentage = parseFloat(customValue);
    
    // check if both input have value
        let billValue = billAmount.value;
        let personValue = numberOfPerson.value;
        if(billValue && personValue)
        {
            let tipTotal = ((billValue/100) * tipPercentage).toFixed(2);
            let tipPerson = (tipTotal/personValue).toFixed(2);
            
            amountPerPerson.textContent = `$${tipPerson}`;
            totalAmount.lastElementChild.textContent = `$${tipTotal}`;

            resetBtn.classList.remove('disable');
        }
        else if(billValue && !personValue)
        {
            personMessage.classList.toggle('hide-error')
            setTimeout(() => {
                personMessage.classList.toggle('hide-error')
            }, 3000);
            resetBtn.classList.remove('disable');
        }
        else if(!billValue && personValue)
        {
            billMessage.classList.toggle('hide-error')
            setTimeout(() => {
                billMessage.classList.toggle('hide-error')
            }, 3000);
            resetBtn.classList.remove('disable');
        }
        else{
            billMessage.classList.toggle('hide-error')
            personMessage.classList.toggle('hide-error')
            setTimeout(() => {
                billMessage.classList.toggle('hide-error')
                personMessage.classList.toggle('hide-error')
            }, 3000)
        }
    }
}

function resetCalculator() {
    // reset all values to empty
    customInput.value = '';
    billAmount.value = '';
    numberOfPerson.value = '';
    amountPerPerson.textContent = '$0.00';
    totalAmount.lastElementChild.textContent = '$0.00';
    // disable reset button
    resetBtn.classList.add('disable');
}