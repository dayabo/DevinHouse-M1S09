class conta{
   protected numero:number;
   protected saldo:number;
   protected estaAtiva:boolean;
   protected dono:string

    constructor(numero:number, saldo:number,estaAtiva:boolean,cliente:string){
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = cliente;
    }

}

class contaEmpresa extends conta{
   private limiteDeDeposito:number = 1000;

   constructor(numero, saldo, estaAtiva, cliente){
       super(numero, saldo, estaAtiva, cliente)
   }

    deposito(valor:number){

           if(valor <= this.limiteDeDeposito){
            console.log(`Depósito efetuado com sucesso!`)
              this.saldo += valor
        } else {
          console.log(`Valor maior que o limite permitido, tente outro valor menor ou igual a ${this.limiteDeDeposito}`)
        };
    };
    

    imprimeValorConta(){
        console.log(`Saldo:${this.saldo.toFixed(2)}`)
    }


}

const transacao = new contaEmpresa(1001,0,true,"Dayane")
transacao.deposito(3500)
transacao.deposito(650)
transacao.deposito(1000)
transacao.deposito(500)
transacao.deposito(1000)
transacao.deposito(350)
transacao.imprimeValorConta()
