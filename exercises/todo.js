// const account = {
// 	name: 'Hilo',
// 	expenses: [],
// 	income: [],

// 	addExpenses: function (descriotion, amount) {
// 		this.expenses.push({
// 			descriotion: descriotion,
// 			amount: amount,
// 		});
// 	},

// 	addIncome: function (descriotion, amount) {
// 		this.income.push({
// 			descriotion: descriotion,
// 			amount: amount,
// 		});
// 	},

// 	getAccSum: function () {
// 		let totalExpenses = 0;
// 		let totalIncome = 0;
// 		let balance = 0;

// 		this.expenses.forEach(function (expense) {
// 			totalExpenses += expense.amount;
// 		});

// 		this.income.forEach(function (income) {
// 			totalIncome += income.amount;
// 		});

// 		balance = totalIncome - totalExpenses;

// 		return `${this.name} a balance of ${balance}. ${totalIncome} in income. ${totalExpenses} in expenses.`;
// 	},
// };

// account.addIncome('Code', 600);
// account.addExpenses('Kadayıf', 301);
// account.addExpenses('Domates', 199);
// console.log(account.getAccSum());
