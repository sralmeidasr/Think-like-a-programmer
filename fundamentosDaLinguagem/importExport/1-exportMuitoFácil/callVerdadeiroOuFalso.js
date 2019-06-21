const verdadeiroOuFalso = require('../../1-muitoFácil/verdadeiroOuFalso')

module.exports = {
    dadosVouF1: `1 => ${verdadeiroOuFalso(1)}`,
    dadosVouF2: `-1 => ${verdadeiroOuFalso(-1)}`,
    dadosVouF3: `"false" => ${verdadeiroOuFalso('false')}`,
    dadosVouF4: `[] => ${verdadeiroOuFalso([])}`,
    dadosVouF5: `true => ${verdadeiroOuFalso(true)}`,
    dadosVouF6: `{} => ${verdadeiroOuFalso({})}`,
    dadosVouF7: `function(){} => ${verdadeiroOuFalso(function(){})}`,
    dadosVouF8: `" " => ${verdadeiroOuFalso(' ')}`,
    dadosVouF9: `"" => ${verdadeiroOuFalso("")}`,
    dadosVouF10: `null => ${verdadeiroOuFalso(null)}`,
    dadosVouF11: `undefined => ${verdadeiroOuFalso(undefined)}`,
    dadosVouF12: `false => ${verdadeiroOuFalso(false)}`,
    dadosVouF13: `NaN => ${verdadeiroOuFalso(NaN)}`,
    dadosVouF14: `"" => ${verdadeiroOuFalso('')}`,
    dadosVouF15: `0 => ${verdadeiroOuFalso(0)}`
}



