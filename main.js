import axios from "axios";

async function ipAdresimiAl() {
  return await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  }).then((response) => response.data);
}

async function getData() {
  const ip = await ipAdresimiAl();
  const response = await axios.get(`https://apis.ergineer.com/ipgeoapi/${ip}`);
  return response.data;
}

function cardOlustur(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  const flag = document.createElement("img");
  flag.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ülkeKodu}.png`;
  flag.alt = `${data.ülke} bayrağı`;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const ipElem = document.createElement("h3");
  ipElem.classList.add("ip");
  ipElem.textContent = data.sorgu;

  const ulkeElem = document.createElement("p");
  ulkeElem.classList.add("ulke");
  ulkeElem.textContent = `${data.ülke} (${data.ülkeKodu})`;

  const enlemBoylam = document.createElement("p");
  enlemBoylam.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

  const sehir = document.createElement("p");
  sehir.textContent = `Şehir: ${data.şehir}`;

  const saatDilimi = document.createElement("p");
  saatDilimi.textContent = `Saat dilimi: ${data.saatdilimi}`;

  const paraBirimi = document.createElement("p");
  paraBirimi.textContent = `Para birimi: ${data.parabirimi}`;

  const isp = document.createElement("p");
  isp.textContent = `ISP: ${data.isp}`;

  cardInfo.appendChild(ipElem);
  cardInfo.appendChild(ulkeElem);
  cardInfo.appendChild(enlemBoylam);
  cardInfo.appendChild(sehir);
  cardInfo.appendChild(saatDilimi);
  cardInfo.appendChild(paraBirimi);
  cardInfo.appendChild(isp);

  card.appendChild(flag);
  card.appendChild(cardInfo);

  return card;
}

getData().then((response) => {
  const cardContent = cardOlustur(response);
  const container = document.querySelector(".container");
  container.appendChild(cardContent);
});
