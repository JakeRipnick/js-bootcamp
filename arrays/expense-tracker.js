let names = 'Jake & AJ'
console.log(names)


const account = {
    name: 'Jake Ripnick',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome = income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return (`${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`)
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
account.addIncome('Job2', 2500)
account.addExpense('phone bill', 500)
account.addIncome('Robbed a bank', 10000)
account.addExpense('hookers', 2000)
console.log(account.getAccountSummary())
