//Controlar os slides, passando cada um em determinado intervalo
//------------------------------------------------------------------------
let i = 0;
const slide = document.querySelector('#slide');
//Array de links das imagens para slides do banner -- também pode ser substituido por array de caminhos de imagens na pasta imagens = ./images/nomeImage.Extensao ou link http;//www.imagem
const SLIDES = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg'];
//Lista de serviços no formulario 
const OPTIONSLISTSERVICOS = document.querySelector('#servicos');
//Lista de pets no formulario 
const OPTIONSLISTPETS = document.querySelector('#petsList');
//Tabela de pets cadastrados 
const TABELA = document.querySelector('#tabelaPets');
//Lista de raças de pets no formulario de cadastro de novo pet
let listaDeRacas = document.querySelector('#listaDeRacas');


//Função de time para realizar a cada 9 segundos a transição de slides no banner
setInterval(function () {

  exibirSlide(i);
  i = incrementar(i);

}, 9000);
//----------------------
const exibirSlide = (i) => {
  slide.src = SLIDES[i];
};
//----------------------
const incrementar = (i) => {
  (i + 1 == SLIDES.length) ? i = 0 : i++;
  return i;
};
//------------------------------------------------------------------------
//Fim do codigo que passa os slides 


//Listar raças e especies de pet relacionado ao pet selecionado
//------------------------------------------------------------------------
const listarRacasRelacionadasAoPetSelecionado = (tipoDePet) => {
  if (tipoDePet == 'Gato') {
    listaDeRacas.innerHTML = `
          <option value="SRD" selected>SRD - Sem Raça Definida</option>
          <option value="Persa">Persa</option>
          <option value="Siamês">Siamês</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Angorá">Angorá</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Ragdoll">Ragdoll</option>
          <option value="Ashera">Ashera</option>
          <option value="Ragdoll">American Shorthair</option>
          `;
  } else if (tipoDePet == 'Cachorro') {
    listaDeRacas.innerHTML = `
          <option value="SRD" selected>SRD - Sem Raça Definida</option>
          <option value="Poodle">Poodle</option>
          <option value="Pinscher">Pinscher</option>
          <option value="Labrador">Labrador</option>
          <option value="Yorkshire">Yorkshire</option>
          <option value="Shih Tzu">Shih Tzu</option>
          <option value="Maltês">Maltês</option>
          <option value="Pug">Pug</option>
          <option value="Golden Retriever">Golden Retriever</option>
          `;
  } else if (tipoDePet == 'Passaro') {
    listaDeRacas.innerHTML = `
          <option value="SRD" selected>SRD - Sem Raça Definida</option>
          <option value="Papagaio">Papagaio</option>
          <option value="Curica">Curica</option>
          <option value="Arara">Arara</option>
          <option value="Periquito">Periquito</option>
          <option value="Curio">Curió</option>
          <option value="Cacatua">Cacatua</option>
          <option value="Mandarim">Mandarim</option>
          <option value="Agaponis">Agaponis</option>
          <option value="Calopsita">Calopsita</option>
          <option value="Canario">Canário</option>
          `;
  }
};
//------------------------------------------------------------------------

//Popular os valores e dados dos pets na tabela html na listagem de pets
//------------------------------------------------------------------------
const imprimirPetsNaTabela = (pets) => {
  TABELA.innerHTML = '';
  for (let pet of pets) {
    TABELA.innerHTML += `
    <tr>
    <th scope="row">${pet.nome}</th>
    <td>${pet.tipo}</td>
    <td>${pet.raca}</td>
    <td>${(pet.idade == 1) ? pet.idade + ' ano' : pet.idade + ' anos'}</td>
    <td>${(pet.genero == 'M') ? 'Macho' : 'Fêmea'}</td>
    <td>${(pet.vacinado) ? 'Sim' : 'Não'}</td>
    <td>${pet.servicos}</td>
    </tr>
    `;
  }
};


//-----------------------------------------------------------------------
//Criar as opções de pets na listagem do formulario 'Realizar serviço'
const criarListaDeOptionsPets = (pets) => {
  OPTIONSLISTPETS.innerHTML = '';
  for (let pet of pets) {
    OPTIONSLISTPETS.innerHTML += ` 
  <option value="${pet.codigo}">${pet.nome}</option>
  `;
  }
};


//----------------------------------------------------------------------
//Criar a listagem de serviços no formulario 'Realizar serviço'
const criarListaDeOptionsServicos = (servicos) => {
  OPTIONSLISTSERVICOS.innerHTML = '';
  for (let servico of servicos) {
    OPTIONSLISTSERVICOS.innerHTML += ` 
  <option value="${servico.descricao}">${servico.descricao}</option>
  `;
  }
};


//---------------------------------------------------------------------
//Validar os campos obrigatorios, recebe varios parametros para se tornar uma funcao generica
const validarCampoObrigatorio = (campo, objeto, idMensagem, idAlerta, objName = 'item') => {

  let alert = document.querySelector(idAlerta);
  let mensagem = document.querySelector(idMensagem);

  //Validar campos obrigatorios de um objeto sem a propriedade aplicada 
  if (campo.required && objeto[campo.name] == undefined || objeto[campo.name] == '') {
    mensagem.textContent = ` informe o ${campo.name} de seu ${objName}`;
    alert.classList.remove('hidden');
    campo.focus();
  }
};

//---------------------------------------------------------------------
//Fechar o alerta de mensagem do formulario 
const closeAlert = (idAlerta) => {
  let alert = document.querySelector(idAlerta);
  alert.classList.add('hidden');
};


//---------------------------------------------------------------------
//Exibir uma mensagem de sucesso para o usuario 
const mensageDeSucesso = (title = 'Feito', message = 'Operação realizada com sucesso!') => {
  swal(title, message, "success");
};

//---------------------------------------------------------------------
//Exibir uma mensagem de erro para o usuario 
const mensageDeErro = (title = 'Erro', message = 'A operação não pode ser realizada!') => {
  swal(title, message, "error");
};

//---------------------------------------------------------------------
//Exibir uma mensagem de alerta para o usuario 
const mensageDeInfo = (title = 'Atenção', message = 'Verifique o resultado') => {
  swal(title, message, "info");
};


