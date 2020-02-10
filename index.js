import { Pet } from './js/Pet.js';
import { Servico } from './js/Servico.js';

//Criar variavel de pets vazia
let pets = [];
let servicos = [];
//Formulario de cadastro de novo pet
const FORMNOVOPET = document.querySelector('#formularioNovoPet');
//Formulario de cadastro de novo servico 
const FORMNOVOSERV = document.querySelector('#formularioNovoServico');
//Formulario de execução de serviço em um pet 
const FORMEXECSERV = document.querySelector('#formularioRealizarServico');
const BTNEXECUTARSERV = document.querySelector('#executar-servico');

//Obter todos os dados cadastrados no arquivo json
async function getJson(url) {
  let promise = await fetch(url);
  if (!promise.ok) {
    throw new Error(`FALHA AO BUSCAR JSON ${url}--- `);
  }
  let res = await promise.json();
  return res;
}

//-----------------------------------------------------------
//Chamar a função de obter pets do arquivo json
getJson('./json/pets.json')
  .then(res => {
    return res;
  }).then(res => {
    //Chamar função para popular a tabela (View.js)
    pets = res;
    imprimirPetsNaTabela(res);
    criarListaDeOptionsPets(res);
  })
  .catch(err => {
    console.log(`Ocorreu erro ao obter json de pets ${err.message}`);
  });


//----------------------------------------------------------
//Chamar a função de obter serviços do arquivo json
getJson('./json/servicos.json')
  .then(res => {
    return res;
  }).then(res => {
    //Chamar função para listar servicos em (View.js)
    servicos = res;
    criarListaDeOptionsServicos(res);
  })
  .catch(err => {
    console.log(`Ocorreu erro ao obter json de servicos ${err.message}`);
  });

//----------------------------------------------------------
//Gerar um novo codigo de cadastro para um cadastro
const gerarCodigoAutoIncremento = (arrayDeObjetos) => {
  let ultimoRegistro = arrayDeObjetos.slice(-1);
  return (ultimoRegistro[0] == '') ? 1 : ultimoRegistro[0].codigo + 1;
};


//----------------------------------------------------------
//Cadastrar novo pet de acordo com os dados informados no formulario
const salvarNovoPet = () => {
  //Esta variavel tem como objetivo validar se os valores foram informados corretamente
  let exitFunction = false;
  //Criar novo pet de acordo com a classe Pet.js
  let pet = new Pet();
  //Chamar função para gerar o codigo autoincremento do novo pet
  pet.codigo = gerarCodigoAutoIncremento(pets);
  let inputs = FORMNOVOPET.querySelectorAll('input, select');
  for (let input of inputs) {
    //Percorrer cada input do formulário 
    switch (input.type) {
      case 'text':
      case 'range':
        (input.value.trim() != '') ? pet[input.name] = input.value : '';
        break;
      case 'checkbox':
      case 'radio':
        (input.checked) ? pet[input.name] = input.value : '';
        break;
      default:
        break;
    }
    (input.name == 'raca' && input.value.trim() != '') ? pet.raca = input.value : '';
  }

  //Validar campos obrigatórios
  for (let campo of inputs) {
    if (pet[campo.name] == '' || pet[campo.name] == undefined && campo.required) {
      validarCampoObrigatorio(campo, pet, '#mensagem', '#div-alert', 'pet');
      exitFunction = true;
      break;
    }
  }
  (!exitFunction) ? adicionarPet(pet) : '';
};
//--------------------------------------------------------------
//Adicionar listenner ao botao salvar, esta função só pode ser chamada após a declaração acima
document.querySelector('#btn-salvar-novo-pet').addEventListener('click', salvarNovoPet);



//Adicionar pet ao array
const adicionarPet = (pet) => {
  pets.push(pet);
  mensageDeSucesso(pet.nome, 'Cadastrado com sucesso');
  closeAlert('#div-alert');
  limparFormulario('#formularioNovoPet');
  imprimirPetsNaTabela(pets);
  criarListaDeOptionsPets(pets);
};



//--------------------------------------------------------------
//Salvar novo serviço
const salvarNovoServico = () => {
  let exitFunction = false;
  let servico = new Servico();
  servico.codigo = gerarCodigoAutoIncremento(servicos);

  let inputs = FORMNOVOSERV.querySelectorAll('input');
  for (let input of inputs) {
    if (input.value == '') {
      validarCampoObrigatorio(input, servico, '#mensagem-servico', '#div-alert-servico', 'serviço');
      exitFunction = true;
      break;
    } else {
      servico[input.name] = input.value;
    }
  }
  (!exitFunction) ? adicionarServico(servico) : '';
};
//--------------------------------------------------------------
//Adicionar listenner ao botao salvar, esta função só pode ser chamada após a declaração acima
document.querySelector('#btn-salvar-novo-servico').addEventListener('click', salvarNovoServico);


//Adicionar serviço a lista de serviços 
const adicionarServico = (servico) => {
  servicos.push(servico);
  mensageDeSucesso(servico.descricao, 'Cadastrado com sucesso');
  closeAlert('#div-alert-servico');
  limparFormulario('#formularioNovoServico');
  criarListaDeOptionsServicos(servicos);
};

//Executar o serviço em um tipo de pet
//-------------------------------------------------------------
const executarServicoEmUmPet = () => {
  let inputs = FORMEXECSERV.querySelectorAll('input, select');
  let exitFunction = false;
  let codigoPet;
  let servicos = [];

  for (let input of inputs) {
    if (input.value == '') {
      (input.value == '') ? mensageDeErro('Erro', 'Preencha todos os campos obrigatorios') : '';
      input.focus();
      exitFunction = true;
      break;
    } else {
      (input.name == 'pet') ? codigoPet = input.value : '';
      if (input.name == 'servico') {
        let _servicos = document.querySelector('#servicos').selectedOptions;
        for (let servico of _servicos) {
          servicos.push(servico.value);
        }
      }
      exitFunction = false;
    }
  }

  if (!exitFunction) {
    let pet = pets.filter(function (pet) {
      return pet.codigo == codigoPet;
    });
    executarFuncao(servicos, pet[0]);
  }
};
BTNEXECUTARSERV.addEventListener('click', executarServicoEmUmPet);
//-------------------------------------------------------------

//Executar todos os serviços solicitados 
//-------------------------------------------------------------
const executarFuncao = (servicos, pet) => {
  let mensagem;
  for (let servico of servicos) {
    if (servico == 'Vacinar') {
      if (pet.vacinado) {
        mensageDeInfo(pet.nome, 'Já é vacinado!');
        break;
      } else if (!pet.vacinado && pet.tipo == 'Passaro') {
        mensageDeInfo(pet.nome, 'É um passáro, não recebe vacina XD');
      } else {
        pet.vacinado = true;
        mensageDeSucesso(pet.nome, 'Vacinado com sucesso!');
      }
    } else {
      (servicos.length > 1) ? mensagem = 'Recebeu os serviços: ' : mensagem = 'Recebeu o serviço: ';
      mensageDeSucesso(pet.nome, mensagem + [...servicos] + ' com sucesso!');
      pet.servicos.push(servico);
    }
  }
  imprimirPetsNaTabela(pets);
  FORMEXECSERV.reset();
};

