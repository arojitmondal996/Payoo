document.getElementById('button-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out button clicked')

        const cashOut = document.getElementById('input-cash-out').value;
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        console.log(cashOut, pinNumber);

        // wrong way top verify
        if(pinNumber === '1234'){
            const balance = document.getElementById('account-balance').
            innerText;
            const balanceNumber = parseFloat(balance);
            const cashOutNumber = parseFloat(cashOut);

            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Faild to cash out. Please try again letter')
        }

    });