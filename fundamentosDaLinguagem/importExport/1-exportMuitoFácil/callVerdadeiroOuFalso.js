const verdadeiroOuFalso = require('../../1-muitoFácil/verdadeiroOuFalso')

module.exports = [
    `1 ➞ ${verdadeiroOuFalso(1)}`,
    `-1 ➞ ${verdadeiroOuFalso(-1)}`,
    `"false" ➞ ${verdadeiroOuFalso('false')}`,
    `[] ➞ ${verdadeiroOuFalso([])}`,
    `true ➞ ${verdadeiroOuFalso(true)}`,
    `{} ➞ ${verdadeiroOuFalso({})}`,
    `function(){} ➞ ${verdadeiroOuFalso(function(){})}`,
    `" " ➞ ${verdadeiroOuFalso(' ')}`,
    `"" ➞ ${verdadeiroOuFalso("")}`,
    `null ➞ ${verdadeiroOuFalso(null)}`,
    `undefined ➞ ${verdadeiroOuFalso(undefined)}`,
    `false ➞ ${verdadeiroOuFalso(false)}`,
    `NaN ➞ ${verdadeiroOuFalso(NaN)}`,
    `"" ➞ ${verdadeiroOuFalso('')}`,
    `0 ➞ ${verdadeiroOuFalso(0)}`
]



