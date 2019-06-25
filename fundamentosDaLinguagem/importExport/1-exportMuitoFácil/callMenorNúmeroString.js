const menorNumeroString = require('../../1-muitoFácil/menorNúmeroString')

module.exports = [
    `'21', '44' ➞ ${menorNumeroString("21", "44")}`,
    `'385', '8987' ➞ ${menorNumeroString("385", "8987")}`,
    `'44', '21' ➞ ${menorNumeroString("44", "21")}`,
    `'153', '367' ➞ ${menorNumeroString("153", "367")}`,
    `'1500', '16' ➞ ${menorNumeroString("1500", "16")}`,
    `'100', '23' ➞ ${menorNumeroString("100", "23")}`,
    `'1500', '1' ➞ ${menorNumeroString("1500", "1")}`,
    `'5', '5' ➞ ${menorNumeroString("5", "5")}`
]


