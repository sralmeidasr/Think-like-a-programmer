/*----------------------------------------------------------------------------------------------------------------------------
                                                 [ O que é JSON? ]
------------------------------------------------------------------------------------------------------------------------------
                                    Vamos utilizar um exemplo para explicar isso: 
----------------------------------------------------------------------------------------------------------------------------*/

    let escopo = "escopo abrangente"
     
     
    function imprimir() {
        let escopo = "escopo mais restrito"
        console.log(escopo);
    }
     
    imprimir()

/*---------------------------------------------------------------------------------------------------------------------------
Qual valor você acha que vai ser impresso no console? Se você responder "escopo mais restrito" respondeu certo! Isso acontece 
justamente por conta do Shadowing que também é conhecido como escopo de variável. Variáveis que são declaradas em um determinado 
escopo são sobrescritas se a mesma variável for declarada em um escopo mais restrito, como ocorreu nesse exemplo. Foi declarado 
a variável escopo num escopo mais abrangente e mais a frente foi declarada outra variável com o mesmo nome porém em um escopo 
mais restrito. Resultando na prioridade dessa variável declarada nesse escopo mais restrito.

Se eu declara a variável escopo em um escopo mais restrito ainda, essa variável terá a prioridade. Segue um exemplo:
----------------------------------------------------------------------------------------------------------------------------*/

    let escopo = "escopo abrangente"
     
     
    function imprimir() {
        let escopo = "escopo mais restrito"
        
        function escopoMaisRestritoAinda() {
            let escopo = "escopo mais restrito ainda"
            console.log(escopo)
        }
     
        escopoMaisRestritoAinda()
    }
     
    imprimir() 


/*---------------------------------------------------------------------------------------------------------------------------
**Polimorfismo**
"Polimorfismo é a capacidade de um objeto poder ser referenciado de várias formas. " – Caelum
 
**Essa segunda definição também é bem legal**
"Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou seja, temos os mesmo métodos, com os 
mesmos nomes mas com diferentes comportamentos." – Nicolas Bontempo(Medium) 

Mas podemos exemplificar isso? É pra já!
----------------------------------------------------------------------------------------------------------------------------*/

    class Animal {
        respirar() {
            console.log("Respirando...");
        }
    }
     
    class Peixe extends Animal {
    }
     
    class Sapo extends Animal {
    }
     
    let a1 = new Animal()
    let p1 = new Peixe()
    let s1 = new Sapo()
    a1.respirar()
    p1.respirar()
    s1.respirar()

/*---------------------------------------------------------------------------------------------------------------------------
Na classe Animal defini um método respirar,  as outras classes Sapo e Peixe herdam de Animal e consequentemente possuem o 
método respirar. Porém  eles não respiram da mesma forma. Como resolver isso? Sobrescrevendo o método respirar! 
----------------------------------------------------------------------------------------------------------------------------*/

    class Animal {
        respirar() {
            console.log("Respirando...");
        }
    }
     
    class Peixe extends Animal {
        respirar() {
            console.log("Respirando embaixo da agua"); 
        }
    }
     
    class Sapo extends Animal {
        respirar() {
            console.log("Respirando pela pele!");
        }
    }
     
    let a1 = new Animal()
    let p1 = new Peixe()
    let s1 = new Sapo()
    a1.respirar()
    p1.respirar()
    s1.respirar()

/*---------------------------------------------------------------------------------------------------------------------------
                                                [ Think like a programmer ]
-----------------------------------------------------------------------------------------------------------------------------
/* Com essa simples refatoração, Peixe e Sapo possuem o mesmo comportamento de Animal(a classe Pai) porém eles realizam de sua 
forma específica. 
 
**Conclusão**
Podemos uma semelhança entre Shadowing e Polimorfismo pela questão de sobrescrever váriáveis(Shadowing) e sobrescrever 
métodos(Polimorfismo) contudo estes atuam em áreas diferentes. Onde um está relacionado ao escopo da variável(Shadowing) e o 
outro está relacionado à herança/reaproveitamento de código! 

Espero ter sido claro e didático nos exemplos e bons estudos!
-----------------------------------------------------------------------------------------------------------------------------
Developer: Sr&Almeida | GitHub: https://github.com/sralmeidasr | e-mail: alan@sralmeida.com.br | Slack: 
----------------------------------------------------------------------------------------------------------------------------*/