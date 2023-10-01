import TicTacToeOperation from "./tictactoe_operation.js";
import Timer from "./timer.js";

export default function ShowTicTacToe(restart_game){
    setTimeout(()=>{
        document.body.insertAdjacentHTML("afterbegin",`
        <div class="tictactoe">
            <div class="tictactoe--timer">
                <span class="hour">00</span> : 
                <span class="minute">00</span> : 
                <span class="second">00</span>
            </div>
            <div class="tictactoe--game">
                <span data-number="1" class="tictactoe--cell"></span>
                <span data-number="2" class="tictactoe--cell"></span>
                <span data-number="3" class="tictactoe--cell"></span>
                <span data-number="4" class="tictactoe--cell"></span>
                <span data-number="5" class="tictactoe--cell"></span>
                <span data-number="6" class="tictactoe--cell"></span>
                <span data-number="7" class="tictactoe--cell"></span>
                <span data-number="8" class="tictactoe--cell"></span>
                <span data-number="9" class="tictactoe--cell"></span>
            </div>
        </div>
        `);
        Timer();
        TicTacToeOperation(restart_game,document.querySelectorAll(".tictactoe--cell"));
    },4200)
} 