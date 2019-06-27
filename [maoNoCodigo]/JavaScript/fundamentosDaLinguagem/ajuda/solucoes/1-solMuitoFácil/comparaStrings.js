/*                                            [ Mão no Código ]
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | 
----------------------------------------------------------------------------------------------------------------------------*/

/* Resolução do problema na primeira tentativa */
const comparaStrings = (string1, string2) => string1[0] === string2[string2.length-1] && string1[string1.length-1] === string2[0]

/* Resolução do problema na segunda tentativa */
const comparaStrings = (string1, string2) => string2.endsWith(string1.charAt(0)) && string1.endsWith(string2.charAt(0))

/****************************************************************************************************************************/


