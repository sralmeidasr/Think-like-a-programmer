const contandoParametros = require('../../1-muitoFácil/conteOsParametros')

module.exports =  {
    parametro1: `() => ${contandoParametros()}`,
    parametro2: `("foo") => ${contandoParametros("foo")}`,
    parametro3: `("foo", "bar") => ${contandoParametros("foo", "bar")}`,
    parametro4: `(null, null) => ${contandoParametros(null, null)}`,
    parametro5: `("foo", "bar", 5, null) => ${contandoParametros("foo", "bar", 5, null)}`,
    parametro6: `(false) => ${contandoParametros(false)}`,
    parametro7: `("foo", {}) => ${contandoParametros("foo", {})}`,
    parametro8: `("foo", "bar", {}) => ${contandoParametros("foo", "bar", {})}`,
    parametro9: `([], [], {}) => ${contandoParametros([], [], {})}`,
    parametro10: `("foo", "bar", true, null, 0) => ${contandoParametros("foo", "bar", true, null, 0)}`,
    parametro11: `("comida") => ${contandoParametros("comida")}`,
    parametro12: `("comida", "boteco") => ${contandoParametros("comida", "boteco")}`,
    parametro13: `(null, undefined, null) => ${contandoParametros(null, undefined, null)}`,
    parametro14: `([], {}, {}, [], function() { return 1 + 2 }) => ${contandoParametros([], {}, {}, [], function() { return 1 + 2 })}`,
    parametro15: `(function() { return 10 + 57 }, [], true, false, 21) => ${contandoParametros(function() { return 10 + 57 }, [], true, false, 21)}`,
    parametro16: `(["banana", "maça", "uva"], "Casa", 1.8, false) => ${contandoParametros(["banana", "maça", "uva"], "Casa", 1.8, false)}`
}



