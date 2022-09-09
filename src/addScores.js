import {
  name, score, baseUrl, successMsg, errorMsg,
} from './getElements.js';

const addScore = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',

      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    });
    const { result, message } = await response.json();
    if (result) {
      successMsg.innerText = result;
      successMsg.className = 'alert alert-success';
      setInterval(() => {
        successMsg.className = 'd-none';
      }, 3000);
    } else {
      errorMsg.innerText = message;
      errorMsg.className = 'alert alert-danger';
      setInterval(() => {
        errorMsg.className = 'd-none';
      }, 3000);
    }
    name.value = '';
    score.value = '';
  } catch (error) {
    console.error(error.message);
  }
};

export default addScore;
