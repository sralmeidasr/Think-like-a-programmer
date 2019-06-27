/*                                               [ Mão no Código ]
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ 
A função 'comparaStrings' recebe duas strings por parâmetro, veja o que deve ser feito: 
Se a primeira letra da 'string1' === a última letra da 'string2' && a última letra da 'string1' === a primeira letra
da 'string2' retorne true, caso contrário retorne false.
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
- Exemplos:
1. comparaStrings("rato", "orador") ➞ true
2. comparaStrings("1895656", "61") ➞ true
3. comparaStrings("mente", "entrem") ➞ true
4. comparaStrings("bush", "hubris") ➞ false
5. comparaStrings("", "") ➞ true

Exemplo1 ➞ "[r]ato" começa com "r" e "orado[r]" termina com "r". && "rat(o)" termina com "o" e "(o)rador" começa com "o".

¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
Envie sua esposta depois de concluir um desafio com sucesso, seu código é adicionado ao banco de dados de soluções e você 
poderá visualizar as soluções de todos os outros programadores. Esta é uma ótima maneira de melhorar rapidamente a qualidade 
do seu código, porque você pode ver as muitas maneiras diferentes que um único desafio pode ser resolvido.
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
---------------------------------------------- Escreva seu código abaixo ---------------------------------------------------*/
const comparaStrings = (string1, string2) => 









/*-------------------------------------------- Escreva seu código acima -------------------------------------------------------

- Notas
1. Não esqueça de instalar o plugin 'Code Runner' para o Nodejs executar seu código com 'ctrl+shift+n'.

- Ajuda
1. Se você ficar preso em um desafio, encontre ajuda no arquivo 'Recursos'. Porém, se você está realmente preso, veja como 
outros programadores resolveram esse desafio no arquivo 'Soluções'.
* Recursos ➞ [fundamentosDaLinguagem/ajuda/recursos/1-recMuitoFácil/comparaStrings.md]
* Soluções ➞ {fundamentosDaLinguagem/ajuda/solucoes/1-solMuitoFácil/comparaStrings.js}

- Extras
1. Nem só de código vive o homem, visite o 'Dicionário do Programador', um guia completo cheio de artigos sobre todas as coisas 
relacionadas à programação, para você se tornar um verdadeiro [R]ock’n’rolla.
2. Preparamos para você o 'Algoritimo da Fluência', um programa de estudos de inglês com 6 meses de duração, que visa 
proporcionar resultados equivalentes a anos de estudos em escolas tradicionais de idiomas, capacitando você a estudar conteúdos
100% em inglês, o que consideramos o “ponto da virada” para se chegar à fluência no idioma.
3. 'Show Me The Code' é uma maratona de projetos desafiadores, aqui você será avaliado pela usabilidade, por respeitar o design
e pela arquitetura dos apps. Além de ser esperado que você consiga explicar as decisões que tomou durante o desenvolvimento 
através de commits. Adicione um arquivo README.md com os procedimentos para executar o projeto, e comente qualquer coisa nele 
que você gostaria de nos contar, como a abordagem que você utilizou na solução do desafio.

* Dicionário do Programador ➞ (dicionárioDoProgramador)
* Algoritimo da Fluência ➞ (algoritimoDaFluência)
* Show Me The Code ➞ (showMeTheCode)

******************************************************************************************************************************
**********ATENÇÃO: Não apague ou faça qualquer alteração nos códigos abaixo, são eles que executam a função acima.************
******************************************************************************************************************************/
module.exports = comparaStrings
const callComparaStrings = require('../importExport/1-exportMuitoFácil/callComparaStrings')
callComparaStrings.forEach(teste => console.log(teste))
/*****************************************************************************************************************************/