const removeNulo = require('../../1-muitoFácil/removeNuloDoArray')

module.exports = [
    `['a', null, 'b', null] ➞ ${removeNulo(['a', null, 'b', null])}`,
    `[null, null, null, null, null, 'show Me The Code'] ➞ ${removeNulo([null, null, null, null, null, 'show Me The Code'])}`,
    `[7, 8, null, 9] ➞ ${removeNulo([7, 8, null, 9])}`,
    `[null, 'Think like a programmer', 'Mão no Código'] ➞ ${removeNulo([null, 'Think like a programmer', 'Mão no Código'])}`,
    `[true, null, '35', true, true] ➞ ${removeNulo([true, null, '35', true, true])}`,
    `['designer patterns', null, 'funcional', 'JS OO', null] ➞ ${removeNulo(['designer patterns', null, 'funcional', 'JS OO', null])}`,
    '                                                           ',
    `"Jagunço não se escabreia com perda nem derrota - quase tudo
    para ele é o igual." - Grande Sertão: Veredas`
]

