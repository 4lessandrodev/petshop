/*
console.log('Hello World');

//Utilizar let para separar o escopo de acesso 
let escola = 'DIGITAL HOUSE';


let nome = 'Snow Bell';
let raca = 'Persa';
let idade = 1;
let genero = 'Macho';
let servicos = ['Vacinar', 'Vermifugar'];
let tipo = 'Gato';
let vacinado = false;

let pet = {
  nome: 'Snow Bell',
  raca: 'Persa',
  idade: 1,
  genero: 'Macho',
  servicos: ['Vacinar', 'Vermifugar'],
  tipo: 'Gato',
  vacinado: false
};

console.log(pet.nome);
console.log(pet.servicos[0]);


*/

//Const 
const PETSHOP = "Petshop DH";
console.log('** ' + PETSHOP + ' **');
console.log('-----------------------------');

let pets = [{
  nome: 'Panda',
  raca: 'Vira Lata',
  idade: 4,
  genero: 'M',
  servicos: [],
  tipo: 'Gato',
  vacinado: true
}, {
  nome: 'Macia',
  raca: 'Vira Lata',
  idade: 1,
  genero: 'F',
  servicos: ['Vacinar', 'Vermifugar'],
  tipo: 'Gato',
  vacinado: false
}, {
  nome: 'Prince',
  raca: 'Persa',
  idade: 8,
  genero: 'M',
  servicos: ['Vacinar', 'Vermifugar'],
  tipo: 'Gato',
  vacinado: false
}, {
  nome: 'Nina',
  raca: 'Vira Lata',
  idade: 4,
  genero: 'F',
  servicos: ['Vacinar', 'Vermifugar'],
  tipo: 'Cão',
  vacinado: false
}, {
  nome: 'Naninho',
  raca: 'Vira Lata',
  idade: 2,
  genero: 'M',
  servicos: ['Vacinar', 'Vermifugar'],
  tipo: 'Gato',
  vacinado: true
}];


//console.log(pets);


const anoDeNascimento = pet => 2020 - pet.idade;

const vacinar = (pet) => {
  if (!pet.vacinado) {
    console.log('Pet vacinado com sucesso!');
    return (pet.vacinado = true);
  } else {
    console.log('Pet já é vacinado');
  }
};

/*
vacinar(pets[1]);
vacinar(pets[1]);
//console.log(pets[1]);
*/

function listarPets(pets) {
  console.log('-----------------------------');
  for (i = 0; i < pets.length; i++) {
    console.log('Nome: ' + pets[i].nome);
    console.log('Raça: ' + pets[i].raca);
    console.log('Idade: ' + pets[i].idade);
    console.log('Genero: ' + (pets[i].genero == 'F' ? "Fêmea" : 'Macho'));
    console.log('Serviço: ' + pets[i].servicos.toString());
    console.log('Tipo: ' + pets[i].tipo);
    console.log('Vacinado: ' + (pets[i].vacinado ? "Sim" : "Não"));
    console.log('_________________________________');
  }
}

//listarPets(pets);


const adicionarPet = (pet) => {
  if (typeof (pet) == 'object') {
    if (validarDadosPet) {
      pets.push(pet);
      console.log('Novo pet adicionado com sucesso!');
    }
  } else {
    console.log('Ops, os dados não foram passados no padrão de objeto');
  }
};





const validarDadosPet = pet => {
  return pet.nome && pet.idade && pet.genero && pet.tipo && pet.raca;
};






const novoPet = (nome, raca, idade, genero, servicos, tipo, vacinado) => {
  pet = {
    nome: nome,
    raca: raca,
    idade: idade,
    genero: genero,
    servicos: servicos,
    tipo: tipo,
    vacinado: vacinado
  };
  adicionarPet(pet);
};

/*
novoPet('Chiquinho', 'Vira Lata', 7, 'M', ['Vacinar', 'Tosar'], 'Cão', true);


//Exemplo de while
let i = 0;

while (i < pets.length) {
  console.log('Nome: ' + pets[i].nome);
  console.log('Raça: ' + pets[i].raca);
  console.log('Idade: ' + pets[i].idade);
  console.log('Genero: ' + (pets[i].genero == 'F' ? "Fêmea" : 'Macho'));
  console.log('Serviço: ' + pets[i].servicos.toString());
  console.log('Tipo: ' + pets[i].tipo);
  console.log('Vacinado: ' + (pets[i].vacinado ? "Sim" : "Não"));
  console.log('_________________________________');
  i++;
}
*/

const tosarPet = (pet) => {
  pet.servicos.push('Tosa');
  console.log(pet.nome, ', tosado com sucesso!');
};


const darBanho = (pet) => {
  pet.servicos.push('Banho');
  console.log(pet.nome + ' está limpinho!');
};


const cortarAsUnhas = (pet) => {
  pet.servicos.push('Cortar as unhas');
  console.log('Unhas do seu pet cortadas!!!');
};

const atenderPet = (pet, servicos) => {
  console.log('Bem vindo ' + pet.nome);
  for (let servico of servicos) {
    servico(pet); //utilizar callback 
  }
  const pagar = () => {
    console.log('Pagamento realizado com sucesso!');
  };
  console.log(pet.servicos);
  pagar();
  console.log('Volte sempre');
};

//atenderPet(pets[0], [darBanho, cortarAsUnhas, tosarPet]);



const quantidadePetsVacinados = (pets) => {
  let petsVacinados = [];
  let petsNaoVacinados = [];

  for (let pet of pets) {
    if (pet.vacinado) {
      petsVacinados.push(pet);
    } else {
      petsNaoVacinados.push(pet);
    }
  }
  console.log('Foram encontrados ' + petsNaoVacinados.length + ' não vacinados');
  console.log('Foram encontrados ' + petsVacinados.length + ' vacinados');
};

//quantidadePetsVacinados(pets);

const campanhaVacina = pets => {
  let contador = 0;
  for (let pet of pets) {
    if (!pet.vacinado) {
      pets.vacinado = true;
      contador++;
    }
  }
  console.log(contador + ' Pets foram vacinados nessa campanha!');
};

//campanhaVacina(pets);

const diaDeTrabalho = (dia) => {
  switch (dia) {
    case 'segunda-feira':
    case 'terça-feira':
    case 'quarta-feira':
    case 'quinta-feira':
    case 'sexta-feira':
      console.log('Dia de trabalho');
      break;
    default:
      console.log('Dia de descansar');
  }
};

diaDeTrabalho('segunda-feira');  