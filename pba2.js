var accounts=[];
/*
Create account function
createAccount(account)
balance
username

 */
var account = {
    balance: 0
};
console.log('Initial Deposit: ' + account.balance);

function deposit(account, amount) {
    account.balance += amount;
}

function withdraw(account, amount) {
    account.balance -= amount;
}

function getBalance(account) {
    return account.balance;
}

deposit(account, 5000);
withdraw(account, 2000);

console.log(getBalance(account));