/*-----------------------------------------------------------------------------------------------------------------------------
    Executa a função 'saudacao' em (desafiosJS/fundamentosDaLinguagem/1-muitoFácil/saudacoes.js)
------------------------------------------------------------------------------------------------------------------------------*/
const saudacao = require('../1-muitoFácil/saudacoes')

console.log(saudacao('João'))
console.log(saudacao('Maria'))
console.log(saudacao('Carlos'))
console.log(saudacao('Alex'))
console.log(saudacao('Fatima'))

/*-----------------------------------------------------------------------------------------------------------------------------
    Executa a função 'verdadeiroOuFalso' em (desafiosJS/fundamentosDaLinguagem/1-muitoFácil/verdadeiroOuFalso.js)
------------------------------------------------------------------------------------------------------------------------------*/
const verdadeiroOuFalso = require('../1-muitoFácil/verdadeiroOuFalso')

console.log(`1 => ${verdadeiroOuFalso(1)}`)
console.log(`-1 => ${verdadeiroOuFalso(-1)}`)
console.log(`'false' => ${verdadeiroOuFalso('false')}`)
console.log(`[] => ${verdadeiroOuFalso([])}`)
console.log(`true => ${verdadeiroOuFalso(true)}`)
console.log(`{} => ${verdadeiroOuFalso({})}`)
console.log(`function(){} => ${verdadeiroOuFalso(function(){})}`)
console.log(`0 => ${verdadeiroOuFalso(0)}`)
console.log(`"" => ${verdadeiroOuFalso("")}`)
console.log(`null => ${verdadeiroOuFalso(null)}`)
console.log(`undefined => ${verdadeiroOuFalso(undefined)}`)
console.log(`false => ${verdadeiroOuFalso(false)}`)
console.log(`NaN => ${verdadeiroOuFalso(NaN)}`)
console.log(`'' => ${verdadeiroOuFalso('')}`)
console.log(`' ' => ${verdadeiroOuFalso(' ')}`)

/*-----------------------------------------------------------------------------------------------------------------------------
    Executa a função 'contandoParametros' em (desafiosJS/fundamentosDaLinguagem/1-muitoFácil/conteOsParametros.js)
------------------------------------------------------------------------------------------------------------------------------*/
const contandoParametros = require('../1-muitoFácil/conteOsParametros')

console.log(`() => ${contandoParametros()}`)
console.log(`('foo') => ${contandoParametros('foo')}`)
console.log(`('foo', 'bar') => ${contandoParametros('foo', 'bar')}`)
console.log(`(null, null) => ${contandoParametros(null, null)}`)
console.log(`('foo', 'bar', 5, null) => ${contandoParametros('foo', 'bar', 5, null)}`)
console.log(`(false) => ${contandoParametros(false)}`)
console.log(`('foo', {}) => ${contandoParametros('foo', {})}`)
console.log(`('foo', 'bar', {}) => ${contandoParametros('foo', 'bar', {})}`)
console.log(`([], [], {}) => ${contandoParametros([], [], {})}`)
console.log(`('foo', 'bar', true, null, 0) => ${contandoParametros('foo', 'bar', true, null, 0)}`)
console.log(`('comida') => ${contandoParametros('comida')}`)
console.log(`('comida', 'boteco') => ${contandoParametros('comida', 'boteco')}`)
console.log(`(null, undefined, null) => ${contandoParametros(null, undefined, null)}`)
console.log(`([], {}, {}, [], function() { return 1 + 2 }) => ${contandoParametros([], {}, {}, [], function() { return 1 + 2 })}`)
console.log(`(function() { return 10 + 57 }, [], true, false, 21) => ${contandoParametros(function() { return 10 + 57 }, [], true, false, 21)}`)
console.log(`(['banana', 'maça', 'uva'], "Casa", 1.8, false) => ${contandoParametros(['banana', 'maça', 'uva'], "Casa", 1.8, false)}`)

/*-----------------------------------------------------------------------------------------------------------------------------
    Executa a função 'concatenarArrays' em (desafiosJS/fundamentosDaLinguagem/1-muitoFácil/concatenandoDoisArrays.js)
------------------------------------------------------------------------------------------------------------------------------*/
const concatenarArrays = require('../1-muitoFácil/concatenandoDoisArrays')

console.log(`[20, 19, 18, 17, 16], [15, 14, 13, 12, 11, 10] => [${concatenarArrays([20, 19, 18, 17, 16], [15, 14, 13, 12, 11, 10])}]`)
console.log(`[1, 3, 5], [2, 6, 8] => [${concatenarArrays([1, 3, 5], [2, 6, 8])}]`)
console.log(`[7, 8], [10, 9, 1, 1, 2] => [${concatenarArrays([7, 8], [10, 9, 1, 1, 2])}]`)
console.log(`[4, 5, 1], [3, 3, 3, 3, 3] => [${concatenarArrays([4, 5, 1], [3, 3, 3, 3, 3])}]`)

/*-----------------------------------------------------------------------------------------------------------------------------
    
------------------------------------------------------------------------------------------------------------------------------*/