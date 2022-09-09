import { baseUrl, scoreBoard } from "./getElements.js";

const display = async () => {
  try {
    const response = await fetch(baseUrl);
    const { result } = await response.json();
    let row = "";
    result.map((player) => {
      const { user, score } = player;
      row += `
    <tr>
    <td>${user}</td>
    <td>${score}</td>
    </tr>
    `;
      return player;
    });
    scoreBoard.innerHTML = row;
  } catch (error) {
    console.error(error.message);
  }
};
export default display;
