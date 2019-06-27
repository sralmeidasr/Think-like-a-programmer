const comparaStrings = require('../../1-muitoFácil/comparaStrings')

module.exports = [
    `'rato', 'orador' ➞ ${comparaStrings('rato', 'orador')}`,
    `'sparkling', 'groups' ➞ ${comparaStrings('sparkling', 'groups')}`,
    `'mentee', 'eminem' ➞ ${comparaStrings('mentee', 'eminem')}`,
    `'yahtzee', 'easy' ➞ ${comparaStrings('yahtzee', 'easy')}`,
    `'bush', 'hubris' ➞ ${comparaStrings('bush', 'hubris')}`,
    `'edit', 'cheese' ➞ ${comparaStrings('edit', 'cheese')}`,
    `'false', 'true' ➞ ${comparaStrings('false', 'true')}`,
    `'cupid', 'dionysus' ➞ ${comparaStrings('cupid', 'dionysus')}`,
    `'futile', 'elephant' ➞ ${comparaStrings('futile', 'elephant')}`,
    `'', '' ➞ ${comparaStrings('', '')}`,
    `'', 'abc' ➞ ${comparaStrings('', 'abc')}`,
    `'a', 'a' ➞ ${comparaStrings('a', 'a')}`,
    `'a', 'b' ➞ ${comparaStrings('a', 'b')}`,
    `'&', '&' ➞ ${comparaStrings('&', '&')}`,
    `'&!', '!&' ➞ ${comparaStrings('&!', '!&')}`,
    `'5556', '65' ➞ ${comparaStrings('5556', '65')}`,
    '                                   ',
    `"No centro do sertão, o que é doideira às vezes pode ser a razão
    mais certa e de mais juízo!" - Grande Sertão: Veredas`
]



