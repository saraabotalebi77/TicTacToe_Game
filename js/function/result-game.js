import {RestartTimer} from "./timer.js";
import showCountDown from "./count-down.js";
import ShowTicTacToe from "./tictactoe_elements.js";
export default function ResultGame(result_game){
    const audio_gameOver = document.querySelector("#audio-gameover");
    const popup  = document.querySelector(".popup");
    popup.className = "popup result-game-wrapper";
    popup.innerHTML = `<div class="result-game">
        <span class="result-game--title ${result_game=="Win" ? "Win" : result_game=="Game Over !!!" ? "GameOver" :"Draw"}">${result_game}</span>
        <div class="result-game--btns">
            <button class="restart-btn">
                <img src="images/restart.svg"/>
                <span>Restart</span> 
            </button>
            <button class="quit-btn">
                <img src="images/off.svg"/>
                <span>Quit</span>
            </button>
        </div>
    </div>
    `;
    RestartTimer();
    audio_gameOver.play();
    document.querySelector(".quit-btn").addEventListener("click",()=>{
        close();
    })
    document.querySelector(".restart-btn").addEventListener("click",()=>{
        document.querySelector(".tictactoe").remove();
        showCountDown();
        ShowTicTacToe(1);
    })

}