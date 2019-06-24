const contandoParametros = require('../../1-muitoFácil/conteOsParametros')

module.exports =  [
    `() ➞ ${contandoParametros()}`,
    `('foo') ➞ ${contandoParametros('foo')}`,
    `('foo', 'bar') ➞ ${contandoParametros('foo', 'bar')}`,
    `(null, null) ➞ ${contandoParametros(null, null)}`,
    `('foo', 'bar', 5, null) ➞ ${contandoParametros('foo', 'bar', 5, null)}`,
    `(false) ➞ ${contandoParametros(false)}`,
    `('foo', {}) ➞ ${contandoParametros('foo', {})}`,
    `('foo', 'bar', {}) ➞ ${contandoParametros('foo', 'bar', {})}`,
    `([], [], {}) ➞ ${contandoParametros([], [], {})}`,
    `('foo', 'bar', true, null, 0) ➞ ${contandoParametros('foo', 'bar', true, null, 0)}`,
    `('comida') ➞ ${contandoParametros('comida')}`,
    `('comida', 'boteco') ➞ ${contandoParametros('comida', 'boteco')}`,
    `(null, undefined, null) ➞ ${contandoParametros(null, undefined, null)}`,
    `([], {}, {}, [], function() { return 1 + 2 }) ➞ ${contandoParametros([], {}, {}, [], function() { return 1 + 2 })}`,
    `(function() { return 10 + 57 }, [], true, false, 21) ➞ ${contandoParametros(function() { return 10 + 57 }, [], true, false, 21)}`,
    `(['banana', 'maça', 'uva'], 'Casa', 1.8, false) ➞ ${contandoParametros(['banana', 'maça', 'uva'], 'Casa', 1.8, false)}`
]



