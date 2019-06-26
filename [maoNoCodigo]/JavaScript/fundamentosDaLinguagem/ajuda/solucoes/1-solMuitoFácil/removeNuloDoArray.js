/*                                            [ Mão no Código ]
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | 
----------------------------------------------------------------------------------------------------------------------------*/

/* Resolução do problema na primeira tentativa */
const apenasNull = callRemoveNuloDoArray => callRemoveNuloDoArray !== null
const removeNulo = (array) => array.filter(apenasNull)

/* Resolução do problema na segunda tentativa */
const removeNulo = (array) => array.filter(Boolean)

/****************************************************************************************************************************/


