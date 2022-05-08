var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var conta = /** @class */ (function () {
    function conta(numero, saldo, estaAtiva, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = cliente;
    }
    return conta;
}());
var contaEmpresa = /** @class */ (function (_super) {
    __extends(contaEmpresa, _super);
    function contaEmpresa(numero, saldo, estaAtiva, cliente) {
        var _this = _super.call(this, numero, saldo, estaAtiva, cliente) || this;
        _this.limiteDeDeposito = 1000;
        return _this;
    }
    contaEmpresa.prototype.deposito = function (valor) {
        if (valor <= this.limiteDeDeposito) {
            console.log("Dep\u00F3sito efetuado com sucesso!");
            this.saldo += valor;
        }
        else {
            console.log("Valor maior que o limite permitido, tente outro valor menor ou igual a ".concat(this.limiteDeDeposito));
        }
        ;
    };
    ;
    contaEmpresa.prototype.imprimeValorConta = function () {
        console.log("Saldo:".concat(this.saldo.toFixed(2)));
    };
    return contaEmpresa;
}(conta));
var transacao = new contaEmpresa(1001, 0, true, "Dayane");
transacao.deposito(3500);
transacao.deposito(650);
transacao.deposito(1000);
transacao.deposito(500);
transacao.deposito(1000);
transacao.deposito(350);
transacao.imprimeValorConta();
