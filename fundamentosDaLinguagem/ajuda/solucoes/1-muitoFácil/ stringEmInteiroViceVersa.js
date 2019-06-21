/*                                             Think like a programmer 
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | Slack:
----------------------------------------------------------------------------------------------------------------------------*/

const converteParaInteiro = (string) => `De ${typeof string} '${string}' virou ${parseInt(string)}`
const converteParaString = (inteiro) => `De ${typeof inteiro} ${inteiro} virou '${inteiro.toString()}'`

console.log(converteParaInteiro('58'))
console.log(converteParaInteiro('13'))
console.log(converteParaInteiro('48512'))
console.log(converteParaInteiro('2'))
console.log('                          ')
console.log(converteParaString(325))
console.log(converteParaString(17))
console.log(converteParaString(78964))
console.log(converteParaString(56))

/* Na linha 2 'parseInt()' converte uma String em um Número, na linha 3 o método 'toString()' retorna uma string e 'typeof' 
retorna o tipo do dado.
*****************************************************************************************************************************/
