/*                                             Think like a programmer
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ 
Em JavaScript, qualquer dado pode ser traduzido para o contexto booleano. Todos os valores são verdadeiros, a menos que 
sejam definidos como falsos, mas existe valores falsos por padrão, que são os seguintes:
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
valor falso por padrão - false     | A função 'verdadeiroOuFalso' | - Exemplos:
valor falso por padrão - null      | recebe um parâmetro de       | 1 - verdadeiroOuFalso(0) ➞ 0
valor falso por padrão - undefined | qualquer tipo de dados. Faça | 2 - verdadeiroOuFalso(false) ➞ 0
valor falso por padrão - 0         | com que ela retorne 1 se o   | 3 - verdadeiroOuFalso("") ➞ 0
valor falso por padrão - NaN       | dado for verdadeiro e 0 se   | 4 - verdadeiroOuFalso("false") ➞ 1
valor falso por padrão - ""        | for falso.                   |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
Envie sua esposta depois de concluir um desafio com sucesso, seu código é adicionado ao banco de dados de soluções e você 
poderá visualizar as soluções de todos os outros programadores. Esta é uma ótima maneira de melhorar rapidamente a qualidade 
do seu código, porque você pode ver as muitas maneiras diferentes que um único desafio pode ser resolvido.
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
---------------------------------------------- Escreva seu código abaixo ---------------------------------------------------*/

const verdadeiroOuFalso = (dadosVF) => dadosVF ? 1 : 0






/*-------------------------------------------- Escreva seu código acima -------------------------------------------------------

- Notas
1. Não esqueça de instalar o plugin 'Code Runner' para o Nodejs executar seu código.  
2. A entrada é sempre um nome (como string).
3. Não esqueça o ponto de exclamação!
4. Se você ficar preso em um desafio, encontre ajuda no arquivo 'Recursos'. Porém, se você está realmente preso, veja como 
outros programadores resolveram esse desafio no arquivo 'Soluções'.
5. Nem só de código vive o homem, visite 'Nem só CODE' um guia completo, cheio de artigos sobre todas as coisas relacionadas 
à programação, para você se tornar um verdadeiro mestre.

* Recursos => [desafiosJS/fundamentosDaLinguagem/ajuda/recursos/1-muitoFácil/verdadeiroOuFalso.md]
* Soluções => {desafiosJS/fundamentosDaLinguagem/ajuda/solucoes/1-muitoFácil/verdadeiroOuFalso.js}
* Nem só CODE => (desafiosJS/nemSóCODE)

******************************************************************************************************************************
*******ATENÇÃO: Não apague ou faça qualquer alteração nos códigos abaixo, são eles que executam a função 'saudacao'.**********
******************************************************************************************************************************/
module.exports = verdadeiroOuFalso
const callverdadeiroOuFalso = require('../interoperabilidade/exportMuitoFácil')
