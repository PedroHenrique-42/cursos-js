class ArquivoHelper {
  constructor() {
    throw new Error("Essa classe não pode ser instanciada");
  }

  static novoArquivo(dado) {
    return new Arquivo(...dado.toUpperCase().split("/"));
  }
}
