'use strict';

const CloudColor = `#fff`;
const CloudShadow = `rgba(0, 0, 0, 0.7)`;
const LabelColor = `#000`;
const YouFill = `rgba(255, 0, 0, 1)`;

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;


const BAR_WIDTH = 40;
const SHADOW_GAP = 10;
const FONT_GAP = 18;

const title = {
  INITIAL_X: 120,
  INITIAL_Y: 40,
  GAP: 20
};

const FONT_SIZE = `18px`;
const FONT_FAMILY = `Tahoma`;

const GAP = 50;
const GAP_VERTICAL = 20;
const TEXT_HIGHT = 18;
const barHeight = CLOUD_HEIGHT - GAP_VERTICAL - (TEXT_HIGHT * 2 + title.GAP * 3) - GAP_VERTICAL;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, CloudShadow);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CloudColor);

  ctx.font = `${FONT_SIZE} ${FONT_FAMILY}`;
  ctx.fillStyle = LabelColor;
  ctx.fillText(`Ура вы победили!`, title.INITIAL_X, title.INITIAL_Y);
  ctx.fillText(`Список результатов:`, title.INITIAL_X, title.INITIAL_Y + title.GAP);

  const maxTime = getMaxElement(times);
  for (let i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP_VERTICAL);

    if (players[i] === `Вы`) {
      ctx.fillStyle = YouFill;
    } else {
      ctx.fillStyle = `hsl(242, ${Math.floor(Math.random() * 100)}%, 40%)`;
    }

    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (GAP_VERTICAL * 2), BAR_WIDTH, (-barHeight * times[i] / maxTime));
    ctx.fillStyle = LabelColor;

    for (let j = 0; j < times.length; j++) {
      ctx.fillText(times[j], CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * j, CLOUD_HEIGHT - (GAP_VERTICAL * 2.5) + (-barHeight * times[j] / maxTime));
    }
  }
};
