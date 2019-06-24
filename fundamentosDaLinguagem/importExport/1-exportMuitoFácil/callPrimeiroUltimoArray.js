const primeiroUltimoArray = require('../../1-muitoFácil/primeiroUltimoArray')

module.exports = [
    `[5, 10, 15, 20, 25] ➞ ${primeiroUltimoArray([5, 10, 15, 20, 25])}`,
    `['Mão no Código', 13, null, false, true] ➞ ${primeiroUltimoArray(['Mão no Código', 13, null, false, true])}`,
    `['banana', 'maçã', 'uva', 'pera', 'manga'] ➞ ${primeiroUltimoArray(['banana', 'maçã', 'uva', 'pera', 'manga'])}`,
    `['hello', 'Mão no Código', 'dot', 'com'] ➞ ${primeiroUltimoArray(['hello', 'Mão no Código', 'dot', 'com'])}`,
    `[3, 2, 1] ➞ ${primeiroUltimoArray([3, 2, 1])}`,
    `['one', 'two'] ➞ ${primeiroUltimoArray(['one', 'two'])}`,
    `[false, false, true, false, false, true, false] ➞ ${primeiroUltimoArray([false, false, true, false, false, true, false])}`
]


