const objetoVazio = require('../../1-muitoFácil/objetoVazio')

module.exports = [
    `{} ➞ ${objetoVazio({})}`,
    `{ a: 1 } ➞ ${objetoVazio({ a: 1 })}`,
    `{} ➞ ${objetoVazio({})}`,
    `{ a: 1, b: 2, c: 3 } ➞ ${objetoVazio({ a: 1, b: 2, c: 3 })}`,
    `{ z: 2, w: 4, y: 5 } ➞ ${objetoVazio({ z: 2, w: 4, y: 5 })}`,
    `{ d: 4 } ➞ ${objetoVazio({ d: 4 })}`,
    `{} ➞ ${objetoVazio({})}`,
    '                           ',
    `"A morte é para os que morrem." - Grande Sertão: Veredas`
]


