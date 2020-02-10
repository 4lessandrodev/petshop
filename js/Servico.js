export class Servico {
  constructor (codigo, descricao, preco) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._preco = preco;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(valor) {
    this._codigo = valor;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(valor) {
    this._descricao = valor;
  }

}