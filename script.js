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
  // Creating cards for each character inspired by Disney Princesses
  const cardBella = new Card(
    "Bella - Literary Analyst",
    "The team’s strategist, always with a smart solution inspired by books.",
    "images/bella.png"
  );
  const idBella = document.getElementById("cardBella");
  idBella.insertAdjacentHTML('afterbegin', cardBella.cardlist());

  const cardAurora = new Card(
    "Aurora - Dream Specialist",
    "Brings calm and clarity to missions with her enchanted magic.",
    "images/aurora.png"
  );
  const idAurora = document.getElementById("cardAurora");
  idAurora.insertAdjacentHTML('afterbegin', cardAurora.cardlist());

  const cardMerida = new Card(
    "Merida - Explorer",
    "Fearless and precise, leading the team through challenging terrains.",
    "images/merida.png"
  );
  const idMerida = document.getElementById("cardMerida");
  idMerida.insertAdjacentHTML('afterbegin', cardMerida.cardlist());

  const cardMoana = new Card(
    "Moana - Aquatic Navigator",
    "Guides the team through water and communicates with nature.",
    "images/moana.png"
  );
  const idMoana = document.getElementById("cardMoana");
  idMoana.insertAdjacentHTML('afterbegin', cardMoana.cardlist());

  const cardAnna = new Card(
    "Anna - Unifier",
    "The team’s morale booster, always bringing everyone together with her positive energy.",
    "images/anna.png"
  );
  const idAnna = document.getElementById("cardAnna");
  idAnna.insertAdjacentHTML('afterbegin', cardAnna.cardlist());

  const cardElsie = new Card(
    "Elsie - Ice Strategist",
    "The team’s ice expert, controlling snow and ice to create safe paths and manage extreme weather.",
    "images/elsie.png"
  );
  const idElsie = document.getElementById("cardElsie");
  idElsie.insertAdjacentHTML('afterbegin', cardElsie.cardlist());

  const cardEsme = new Card(
    "Esme - Street Artist",
    "Spreads creativity and messages, ensuring the team is always well-received.",
    "images/esme.png"
  );
  const idEsme = document.getElementById("cardEsme");
  idEsme.insertAdjacentHTML('afterbegin', cardEsme.cardlist());

  const cardRapha = new Card(
    "Rapha - Healer & Rescuer",
    "The team’s medic, using her golden ropes for elevated rescues and to heal injuries.",
    "images/rapha.png"
  );
  const idRapha = document.getElementById("cardRapha");
  idRapha.insertAdjacentHTML('afterbegin', cardRapha.cardlist());

  const cardTia = new Card(
    "Tia - Chef & Motivator",
    "Keeps the team energized with delicious meals and helps them through difficult terrains.",
    "images/tia.png"
  );
  const idTia = document.getElementById("cardTia");
  idTia.insertAdjacentHTML('afterbegin', cardTia.cardlist());

  const cardAri = new Card(
    "Ari - Underwater Rescuer",
    "Specializes in underwater rescues with seashell-inspired tools and bubble gear.",
    "images/ari.png"
  );
  const idAri = document.getElementById("cardAri");
  idAri.insertAdjacentHTML('afterbegin', cardAri.cardlist());


});
