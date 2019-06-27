/*                                            [ Mão no Código ]
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | 
----------------------------------------------------------------------------------------------------------------------------*/

/* Resolução do problema na primeira tentativa */
const incremenDecremenArray = array => array.map(e => {
    if(e %2 == 0) {
        return --e
    } else {
        return ++e
    }
})

/* Resolução do problema na segunda tentativa */
const incremenDecremenArray = array => array.map(e => {
    return e%2 == 0 ? --e : ++e
})

/****************************************************************************************************************************/


