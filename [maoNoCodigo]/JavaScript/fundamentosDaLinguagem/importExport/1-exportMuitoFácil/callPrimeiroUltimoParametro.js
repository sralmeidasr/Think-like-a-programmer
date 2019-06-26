const primeiroParametro = require('../../1-muitoFácil/primeiroUltimoParametro')
const ultimoParametro = require('../../1-muitoFácil/primeiroUltimoParametro')

module.exports = [
    `(1, 2, 3) ➞ ${primeiroParametro(1, 2, 3)}`,
    `('a', 'b', 'c') ➞ ${primeiroParametro('a', 'b', 'c')}`,
    `(9, 8) ➞ ${primeiroParametro(9, 8)}`,
    `(8) ➞ ${primeiroParametro(8)}`,
    `() ➞ ${primeiroParametro()}`,
    `(1, 2, 3) ➞ ${ultimoParametro(1, 2, 3)}`,
    `('a', 'b', 'c') ➞ ${ultimoParametro('a', 'b', 'c')}`,
    `(9, 8) ➞ ${ultimoParametro(9, 8)}`,
    `(8) ➞ ${ultimoParametro(8)}`,
    `() ➞ ${ultimoParametro()}`,
    '                                   ',
    `"... o mais importante e bonito, do mundo, é isto: que as
    pessoas não estão sempre iguais, ainda não foram terminadas
    – mas que elas vão sempre mudando. Afinam ou desafinam.
    Verdade maior. É o que a vida me ensinou." - Grande Sertão: Veredas`
]


