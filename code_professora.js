const PETSHOP = "Petshop DH";
console.log("** " + PETSHOP + " **");

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa", "corte de unha"]
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log("Pet vacinado com sucesso!");
  } else {
    console.log("Opa, seu pet já está vacinado!");
  }
};

const listarPets = () => {
  for (let i = 0; i < pets.length; i++) {
    console.log("---------------------");
    console.log("Nome: " + pets[i].nome);
    console.log("Tipo: " + pets[i].tipo);
    console.log("Raça: " + pets[i].raca);
    console.log("Idade: " + pets[i].idade);
    console.log("Genero: " + (pets[i].genero == "F" ? "Femea" : "Macho"));
    console.log("Vacinado: " + (pets[i].vacinado ? "Sim" : "Não"));
    console.log("Serviços: " + pets[i].servicos);
  }
};

const validarDados = dadosPet => {
  return (
    dadosPet.nome &&
    dadosPet.idade &&
    dadosPet.genero &&
    dadosPet.tipo &&
    dadosPet.raca
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    console.log(novoPet.nome + " foi adicionado com sucesso!");
  } else {
    console.log("Ops, insira um objeto válido!");
  }
};

adicionarPet({
  nome: "Costelinha",
  tipo: "cão",
  raca: "vira-lata",
  idade: "6a",
  genero: "M"
});

adicionarPet("scooby");