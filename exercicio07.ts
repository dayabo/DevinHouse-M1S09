import {Pessoa} from "./exercicio08"


class Aluno implements Pessoa {
    matricula:number;
    cadeiras:string[];
    nome: string;
    idade: number;
    rua: string;

    constructor(matricula:number, cadeiras:string[], nome:string, idade:number, rua:string){
      this.matricula = matricula;
       this.cadeiras = cadeiras;
       this.nome = nome;
       this.idade = idade;
       this.rua = rua;
      
    }
 

    cadastrar() {
       console.log(aluno1)
    }
}

class Funcionario implements Pessoa{
    identificador:number;
    setor:string;
    nome: string;
    idade: number;
    rua: string;

    constructor(id:number, setor:string, nome:string, idade:number, rua:string){
        this.identificador= id;
        this.setor= setor;
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
       
    }



    cadastrar() {
       console.log(funcionario1)
    }
    
}

let aluno1 = new Aluno(1001,["HTML", "CSS", "AngularCLI", "Typescript"], "Dayane", 29,"italia" );
aluno1.cadastrar()
let funcionario1 = new Funcionario(1001, "Desenvolvedor",  "Dayane", 29,"italia")
funcionario1.cadastrar()