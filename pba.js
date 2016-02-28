/*
creating function, object, variable.
basic bank account

1. open account
2. deposit money -> function deposit
3. withdraw money -> function withdraw
4. how much money in account //getBalance
 */
var account={
    balance:0
};
console.log('Initial Deposit: ' +account.balance);

function deposit(account,amount){
    account.balance+=amount;
}

function withdraw(account,amount){
    account.balance-=amount;
}

function getBalance(account){
    return account.balance;
}

deposit(account, 5000);
withdraw(account, 2000);

console.log(getBalance(account));