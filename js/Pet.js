export class Pet {
  constructor (codigo, nome, raca, genero, tipo, vacinado) {
    this._codigo = codigo;
    this._nome = nome;
    this._raca = raca;
    this._idade = idade;
    this._genero = genero;
    this._servicos = [];
    this._tipo = tipo;
    this._vacinado = vacinado;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(valor) {
    this._codigo = valor;
  }

  get nome() {
    return this._nome;
  }

  set nome(valor) {
    this._nome = valor;
  }

  get raca() {
    return this._raca;
  }

  set raca(valor) {
    this._raca = valor;
  }

  get idade() {
    return this._idade;
  }

  set idade(valor) {
    this._idade = valor;
  }

  get genero() {
    return this._genero;
  }

  set genero(valor) {
    this._genero = valor;
  }

  get servicos() {
    return this._servicos;
  }

  set servicos(valor) {
    this._servicos.push(valor);
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(valor) {
    this._tipo = valor;
  }

  get vacinado() {
    return this._vacinado;
  }

  set vacinado(valor = false) {
    this._vacinado = valor;
  }
}