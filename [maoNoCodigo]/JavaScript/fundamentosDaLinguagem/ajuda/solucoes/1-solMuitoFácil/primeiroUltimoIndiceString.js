/*                                            [ Mão no Código ]
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | 
----------------------------------------------------------------------------------------------------------------------------*/

const primeiroUltimoIndiceString = (palavra, letra) => {
    return palavra.includes(letra) ? [palavra.indexOf(letra), palavra.lastIndexOf(letra)] : undefined
}

/****************************************************************************************************************************/

