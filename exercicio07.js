"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, cadeiras, nome, idade, rua) {
        this.matricula = matricula;
        this.cadeiras = cadeiras;
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
    }
    Aluno.prototype.cadastrar = function () {
        console.log(aluno1);
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario(id, setor, nome, idade, rua) {
        this.identificador = id;
        this.setor = setor;
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
    }
    Funcionario.prototype.cadastrar = function () {
        console.log(funcionario1);
    };
    return Funcionario;
}());
var aluno1 = new Aluno(1001, ["HTML", "CSS", "AngularCLI", "Typescript"], "Dayane", 29, "italia");
aluno1.cadastrar();
var funcionario1 = new Funcionario(1001, "Desenvolvedor", "Dayane", 29, "italia");
funcionario1.cadastrar();
