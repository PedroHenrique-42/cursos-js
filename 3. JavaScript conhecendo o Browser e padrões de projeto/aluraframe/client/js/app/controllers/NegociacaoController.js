class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem)
  }

  // Cria uma nova negociação
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  // Limpa o formulário
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;
    this._inputData.focus();
  }

  // Adiciona uma nova negociação na lista de negociações
  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = "Negociação adicionada com sucesso";
    this._mensagemView.update(this._mensagem)

    setTimeout(() => {
      this._mensagem.texto = "";
      this._mensagemView.update(this._mensagem);
    }, 2000);

    this._limpaFormulario();
  }
}
