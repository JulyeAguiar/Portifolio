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
      <div>
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


  const cardBella = new Card(
    "Bella - Literary Analyst",
    "The team’s strategist, always with a smart solution inspired by books.",
    "images/bela pc.png"
  );
  const idBella = document.getElementById("cardBella");
  idBella.insertAdjacentHTML('afterbegin', cardBella.cardlist());

  const cardAurora = new Card(
    "Aurora - Dream Specialist",
    "Brings calm and clarity to missions with her enchanted magic.",
    "images/aurora pc.png"
  );
  const idAurora = document.getElementById("cardAurora");
  idAurora.insertAdjacentHTML('afterbegin', cardAurora.cardlist());

  const cardMerida = new Card(
    "Merida - Explorer",
    "Fearless and precise, leading the team through challenging terrains.",
    "images/merida pc.png"
  );
  const idMerida = document.getElementById("cardMerida");
  idMerida.insertAdjacentHTML('afterbegin', cardMerida.cardlist());

  const cardMoana = new Card(
    "Moana - Aquatic Navigator",
    "Guides the team through water and communicates with nature.",
    "images/moana pc.png"
  );
  const idMoana = document.getElementById("cardMoana");
  idMoana.insertAdjacentHTML('afterbegin', cardMoana.cardlist());

  const cardAnna = new Card(
    "Anna - Unifier",
    "The team’s morale booster, always bringing everyone together with her positive energy.",
    "images/ana pc.png"
  );
  const idAnna = document.getElementById("cardAnna");
  idAnna.insertAdjacentHTML('afterbegin', cardAnna.cardlist());

  const cardElsie = new Card(
    "Elsie - Ice Strategist",
    "The team’s ice expert, controlling snow and ice to create safe paths and manage extreme weather.",
    "images/elsa pc.png"
  );
  const idElsie = document.getElementById("cardElsie");
  idElsie.insertAdjacentHTML('afterbegin', cardElsie.cardlist());

  const cardEsme = new Card(
    "Esme - Street Artist",
    "Spreads creativity and messages, ensuring the team is always well-received.",
    "images/esmeralda pc.png"
  );
  const idEsme = document.getElementById("cardEsme");
  idEsme.insertAdjacentHTML('afterbegin', cardEsme.cardlist());

  const cardRapha = new Card(
    "Rapha - Healer & Rescuer",
    "The team’s medic, using her golden ropes for elevated rescues and to heal injuries.",
    "images/rapunzel pc.png"
  );
  const idRapha = document.getElementById("cardRapha");
  idRapha.insertAdjacentHTML('afterbegin', cardRapha.cardlist());

  const cardTia = new Card(
    "Tia - Chef & Motivator",
    "Keeps the team energized with delicious meals and helps them through difficult terrains.",
    "images/tiana pc.png"
  );
  const idTia = document.getElementById("cardTia");
  idTia.insertAdjacentHTML('afterbegin', cardTia.cardlist());

  const cardAri = new Card(
    "Ari - Underwater Rescuer",
    "Specializes in underwater rescues with seashell-inspired tools and bubble gear.",
    "images/ariel pc.png"
  );
  const idAri = document.getElementById("cardAri");
  idAri.insertAdjacentHTML('afterbegin', cardAri.cardlist());

  const cardCinderella = new Card(
    "Cindy - Midnight Planner",
    "Always ready to assist the team with her clockwork precision and elegant problem-solving skills.",
    "images/cinderela pc.jpg"
  );
  const idCinderella = document.getElementById("cardCinderella");
  idCinderella.insertAdjacentHTML('afterbegin', cardCinderella.cardlist());

  const cardJasmine = new Card(
    "Jaz - Sky Adventurer",
    "With her flying carpet tools, Jaz leads the team on aerial adventures and daring rescues.",
    "images/jasmine pc.png"
  );
  const idJasmine = document.getElementById("cardJasmine");
  idJasmine.insertAdjacentHTML('afterbegin', cardJasmine.cardlist());

  const cardMulan = new Card(
    "Mila - Courage Specialist",
    "A brave and fearless leader, Mila uses her battle-tested tactics to guide the team to victory.",
    "images/mulan pc.png"
  );
  const idMulan = document.getElementById("cardMulan");
  idMulan.insertAdjacentHTML('afterbegin', cardMulan.cardlist());

  const cardSnowWhite = new Card(
    "Snowy - Wildlife Whisperer",
    "Snowy charms forest creatures to assist the team with her kindness and gentle leadership.",
    "images/neve pc.png"
  );
  const idSnowWhite = document.getElementById("cardSnowWhite");
  idSnowWhite.insertAdjacentHTML('afterbegin', cardSnowWhite.cardlist());

  const cardPocahontas = new Card(
    "Poca - Nature Navigator",
    "Guides the team through nature with her wisdom and connection to the environment.",
    "images/pocahontas pc.png"
  );
  const idPocahontas = document.getElementById("cardPocahontas");
  idPocahontas.insertAdjacentHTML('afterbegin', cardPocahontas.cardlist());


  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.setProperty('--animate-delay', `${index * 0.2}s`);
    card.classList.add("animate__animated", "animate__fadeInUp");
  });

});
