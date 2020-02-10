//Exibir os modais ao clicar no botão
//------------------------------------------------------------------------
const exibirModal = (modalId, clearModal = false, idFormulario = '', idAlert = '') => {
  $(modalId).modal('show');

  //Verificar se é necessário limpar o formulário
  if (clearModal && idFormulario != '') {
    limparFormulario(idFormulario);
    (idAlert != '') ? closeAlert(idAlert) : '';
  }
};
//------------------------------------------------------------------------
//Fim do codigo que exibe os modais 


//Atribuir label ao span referente ao tipo de pet selecionado
//------------------------------------------------------------------------
const selectedPet = document.querySelector('#selectedPet');
const atribuirLabelPetSelecionado = (event) => {
  let petSelecionado = event.parentNode.querySelector('input').value;
  selectedPet.textContent = petSelecionado;
  //Chamar a função para aplicar a lista de raças na View.js 
  listarRacasRelacionadasAoPetSelecionado(petSelecionado);
};
//------------------------------------------------------------------------

//Atribuir idade ao pet
//------------------------------------------------------------------------
const idade = document.querySelector('#idade');
const imprimirIdade = (element) => {
  idade.textContent = (parseFloat(element.value) > 1) ? `${element.value} anos` : `Até 12 meses`;
};
//------------------------------------------------------------------------


//Limpar o formulário dos valores inseridos anteriormente
//------------------------------------------------------------------------
const limparFormulario = (idFormulario) => {
  let form = document.querySelector(idFormulario);
  form.reset();
  //As spans são legendas impressas no formulário referente às seleções realizadas pelo usuário 
  let spans = (form.querySelectorAll('span')) ? form.querySelectorAll('span') : '';
  if (spans != '') {
    for (let span of spans) {
      span.textContent = '';
    }
  }
};

//Validar campo de valor de serviço (numerico) para não aceitar número maior que 999
//------------------------------------------------------------------------
const validarValor = (input) => {
  let valor = parseFloat(input.value);
  if (valor >= 999) {
    input.value = 999;
  }
};
