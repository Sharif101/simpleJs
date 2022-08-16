
document.getElementById('btn-deposit').addEventListener('click', function(){
    // deposit fild ke dore tar theke value niye string theke number e convert krlam
    let deposit_inpt_fild_string = document.getElementById('deposit-inpt');
    let deposit_inpt_string = deposit_inpt_fild_string.value;
    let deposit_inpt = parseFloat(deposit_inpt_string);


    // deposit output jekhane dekhabo take dore innerText ke number convert kre variable e rakhlam
    let prev_deposit_string = document.getElementById('prev-deposit');
    let prev_deposit_amount = prev_deposit_string.innerText;
    let prev_deposit = parseFloat(prev_deposit_amount);

    // input deposit ager deposit ke total krlam
    let total_deposit = deposit_inpt + prev_deposit;
    // total value ta deposit e pprint ktlam
    prev_deposit_string.innerText = total_deposit;


    deposit_inpt_fild_string.value = '';

    // ---------------------------------------


    // total amount value upgrade er krar jonno
    let prev_amount_string = document.getElementById('prev-amount');
    let prev_amount_acc = prev_amount_string.innerText;
    let prev_amount = parseFloat(prev_amount_acc);

    let total_amount = prev_amount + deposit_inpt;
    prev_amount_string.innerText = total_amount;

})



document.getElementById('btn-withdraw').addEventListener('click', function(){
    // withdraw inpt theke value ke niye ta number e convert kre akta variable e rakhlam
    let withdraw_inpt_fild_string = document.getElementById('withdraw-inpt');
    let withdraw_inpt_string = withdraw_inpt_fild_string.value;
    let withdraw_inpt = parseFloat(withdraw_inpt_string);

    // withdraw output jekhane dekhabo take dore number e convert krlam
    let prev_withdraw_string = document.getElementById('prev-withdraw');
    let prev_withdraw_acc = prev_withdraw_string.innerText;
    let prev_withdraw = parseFloat(prev_withdraw_acc);

    // calculation
    let total_withdraw = withdraw_inpt + prev_withdraw;

    // total withdraw ta withdraw div e dekhalam 
    prev_withdraw_string.innerText = total_withdraw;

    withdraw_inpt_fild_string.value = '';

    // ----------------------------------------------

    let prev_money_string = document.getElementById('prev-amount');
    let prev_money_acc = prev_money_string.innerText;
    let prev_money = parseFloat(prev_money_acc);

    let total_money = prev_money - withdraw_inpt;
    prev_money_string.innerText = total_money;
    
})