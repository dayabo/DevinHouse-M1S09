class animal {
    nome:string;
    raca:string;
    corPelagem:string;
    peso:number;

    constructor (nome:string, raca:string,corPelagem:string,peso:number){
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso
    }
}

 const animalDescricao = new animal( "baby","yorkshaire", "caramelo",5.400);

 console.log(animalDescricao)