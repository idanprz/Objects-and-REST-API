class bankAccount {
    constructor(account_number, account_holder, balance, account_type) {
        this.account_number = account_number
        this.account_holder = account_holder
        this.balance = balance
        this.account_type = account_type
    }

    setAccountNumber(account_number) {
        if (!isNaN(account_number) && account_number > 0) {
            this.account_number = account_number
        }
    }
    setAccountHolder(account_holder) {
        if ('string' === typeof (account_holder) && account_holder.length > 0) {
            this.account_holder = account_holder
        }
    }
    setBalance(balance) {
        if (!isNaN(balance)) {
            this.balance = balance
        }
    }
    setAccountType(account_type) {
        if ('string' === typeof (account_type) && account_type.length > 0) {
            this.account_type = account_type
        }
    }
}