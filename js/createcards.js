import { playersData } from '../js/playersData.js';

const refs = {
  containerEl: document.querySelector('.card-set'),
};

export function createCards(data) {
  return data
    .map(el => {
      return `  <li class="card" id='${el.name}'>
        <div class="card-rating">${el.rating}</div>
        <div class="card-position">${el.position}</div>
        <div class="card-nation">
          <img src="${el.countryPicture}" alt="${el.country}" />
        </div>
        <div class="card-club">
          <img src="${el.clubPhoto}" alt="${el.club}" />
        </div>
        <div class="card-picture">
          <img
            src="${el.cardPhoto}"
            alt="${el.name}"
          />
        </div>
        <div class="card-name">${el.name}</div>
        <div class="card-attr card-attr1"><span>${el.pase}</span>Pac</div>
        <div class="card-attr card-attr2"><span>${el.shooting}</span>Sho</div>
        <div class="card-attr card-attr3"><span>${el.passing}</span>Pas</div>
        <div class="card-attr card-attr4"><span>${el.dribbling}</span>Dri</div>
        <div class="card-attr card-attr5"><span>${el.defending}</span>Def</div>
        <div class="card-attr card-attr6"><span>${el.physical}</span>Phy</div>
      </li>`;
    })
    .join('');
}

const markup = createCards(playersData);
refs.containerEl.insertAdjacentHTML('beforeend', markup);
