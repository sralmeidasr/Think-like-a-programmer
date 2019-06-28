/*                                               [ Mão no Código ]
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ 
A função recebe por parâmetro uma 'string' e uma 'letra'. Você deve verificar se a 'letra' existe dentro da 'string', e 
retornar qual é o índice dessa 'letra'. Caso essa 'letra' apareça mais vezes dentro da 'string', você deve retornar o índice
da primeira vez que a 'letra' aparece e o índice da última vez que a 'letra' aparece dentro da 'string'. Se a 'letra' não
existir dentro da 'string' retorne undefined.
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
- Exemplos:
primeiroUltimoIndiceString('hello', 'l') ➞ [2, 3] 
=> [Na palavra 'hello', o primeiro 'l' é o index 2, o último 'l' é o index 3.]

primeiroUltimoIndiceString('circulação', 'c') ➞ [0, 3]
=> [Na palavra 'circulação', o primeiro 'c' é o index 0, o último 'c' é o index 3.]

primeiroUltimoIndiceString('happy', 'h') ➞ [0, 0]
=> [Na palavra 'happy', o único 'h' existente é o index 0, e como é único 'h' é também o último index 0.]

primeiroUltimoIndiceString('happy', 'e') ➞ undefined
'e' does not exist in 'happy', so we return undefined.
=> [Na palavra 'happy', 'e' não existe dentro da palavra 'happy', então devemos retornar 'undefined'.]
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
Envie sua esposta depois de concluir um desafio com sucesso, seu código é adicionado ao banco de dados de soluções e você 
poderá visualizar as soluções de todos os outros programadores. Esta é uma ótima maneira de melhorar rapidamente a qualidade 
do seu código, porque você pode ver as muitas maneiras diferentes que um único desafio pode ser resolvido.
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
---------------------------------------------- Escreva seu código abaixo ---------------------------------------------------*/
const primeiroUltimoIndiceString = (palavra, letra) => {
    
}









/*-------------------------------------------- Escreva seu código acima -------------------------------------------------------

- Notas
1. Se a letra não existir dentro da palavra, retorne undefined.
2. Se apenas uma instância do caractere existir, o primeiro e o último índice serão os mesmos.
3. Não esqueça do return da função.
4. Não esqueça de instalar o plugin 'Code Runner' para o Nodejs executar seu código com 'ctrl+shift+n'.  

- Ajuda
1. Se você ficar preso em um desafio, encontre ajuda no arquivo 'Recursos'. Porém, se você está realmente preso, veja como 
outros programadores resolveram esse desafio no arquivo 'Soluções'.
* Recursos ➞ [fundamentosDaLinguagem/ajuda/recursos/1-recMuitoFácil/primeiroUltimoIndiceString.md]
* Soluções ➞ {fundamentosDaLinguagem/ajuda/solucoes/1-solMuitoFácil/primeiroUltimoIndiceString.js}

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
module.exports = primeiroUltimoIndiceString
const callPrimeiroUltimoIndiceString = require('../importExport/1-exportMuitoFácil/callPrimeiroUltimoIndiceString')
callPrimeiroUltimoIndiceString.forEach(teste => console.log(teste))
/*****************************************************************************************************************************/