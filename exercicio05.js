var animal = /** @class */ (function () {
    function animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return animal;
}());
var animalDescricao = new animal("baby", "yorkshaire", "caramelo", 5.400);
console.log(animalDescricao);
