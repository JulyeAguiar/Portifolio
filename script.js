class Errocometido extends Error {
  constructor(message) { 
    super(message);
    this.name = "Erro: está faltando adicionar os atributos";
  }
}

class Card {
  constructor(nome, descricao, imagem) {
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
  }

  cardlist() {
    try {
      return this.atributos();
    } catch (erro) {
      console.error(erro); 
      return ""; 
    }
  }

  atributos() {
    if (this.nome != "" && this.descricao != "" && this.imagem != "") {
      return `
      <div class="container">
          <div class="card">
          <img src="${this.imagem}" />
          <div class="text">
              <h2>${this.nome}</h2>
              <p>${this.descricao}</p>
          </div>
        </div>
      </div>`;
    } else {
      throw new Errocometido(
        "Está faltando inserir alguma das informações necessárias para elaborar o Card :("
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const card1 = new Card( "Luminária de sapinho", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.","images/branca.png.jpg"  );

  const id2 = document.getElementById("card1");
  id2.insertAdjacentHTML('afterbegin',card1.cardlist())

});
