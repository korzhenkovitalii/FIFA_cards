import { playersData } from '../js/playersData.js';
import { createRadarRating } from '../js/createRadarRating.js';

const refs = {
  cardsEl: document.querySelectorAll('.card'),
};

refs.cardsEl.forEach(el => el.addEventListener('click', onClickCard));

function onClickCard(e) {
  const playerInfo = playersData.filter(el => el.name === e.currentTarget.id);
  const markupModal = createModalCard(playerInfo);
  document.body.insertAdjacentHTML('beforeend', markupModal);
  createRadarRating(playerInfo);

  onEscKeyPress();
  closeModalOnClickBackdrop();
}

function closeModalOnClickBackdrop(e) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.addEventListener('click', e => {
    if (e.currentTarget === e.target) {
      backdropEl.remove();
    }
  });
}

function onEscKeyPress(e) {
  const backdropEl = document.querySelector('.backdrop');
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      backdropEl.remove();
    }
  });
}

function createModalCard(data) {
  return data
    .map(el => {
      return `<div class="backdrop">
      <div class="modal-card">
        <div class="modal-card__top">
          <div class="player__badge">
            <img
              class="player__photo"
              src="${el.modalPhoto}"
              alt="${el.name}"
              width="150"
            />
            <div class="player-description">
              <span class="player__position">${el.position}</span>
              <div class="player__rating-range"></div>
              <p class="player__name">${el.name}</p>
              <span class="player__rating">${el.rating}</span>
            </div>
          </div>
          <div class="player__characteristics">
            <canvas id="${el.id}"></canvas>
          </div>
        </div>
        <h2 class="card__title-info">Player info comparison</h2>
        <div class="card__bottom">
          <ul class="player-info">
            <li class="player-info-item">
              <p class="player-info__rating">${el.position}</p>
              <p class="player-info__name">Positions</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.rating}</p>
              <p class="player-info__name">Fitness</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="pase__range"></span>${el.pase}</p>
              <p class="player-info__name">Pase</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="shooting__range"></span>${el.shooting}</p>
              <p class="player-info__name">Shooting</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="passing__range"></span>${el.passing}</p>
              <p class="player-info__name">Passing</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="dribling__range"></span>${el.dribbling}</p>
              <p class="player-info__name">Dribbling</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="defending__range"></span>${el.defending}</p>
              <p class="player-info__name">Defending</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating"><span class="physical__range"></span>${el.physical}</p>
              <p class="player-info__name">Physical</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.skillMoves}</p>
              <p class="player-info__name">Skill Moves</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.weakFoot}</p>
              <p class="player-info__name">Weak Foot</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.foot}</p>
              <p class="player-info__name">Foot</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.attackingWorkRate}</p>
              <p class="player-info__name">Attacking Work Rate</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.defensiveWorkRate}</p>
              <p class="player-info__name">Defensive Work Rate</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.age}</p>
              <p class="player-info__name">Age</p>
            </li>
            <li class="player-info-item">
              <p class="player-info__rating">${el.country}</p>
              <p class="player-info__name">Country</p>
            </li>
          </ul>
        </div>
      </div>
      </div>`;
    })
    .join('');
}
