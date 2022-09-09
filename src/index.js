import './index.css';
import { refreshBtn, submitBtn } from './getElements.js';
import addScore from './addScores.js';
import display from './displayScore.js';

document.addEventListener('DOMContentLoaded', () => {
  submitBtn.addEventListener('click', () => {
    addScore();
  });
  refreshBtn.addEventListener('click', () => {
    display();
  });
});
