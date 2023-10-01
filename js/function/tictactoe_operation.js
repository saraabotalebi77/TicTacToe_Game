import ResultGame from "./result-game.js";
// definition variables
let not_selected_homes = [1, 2, 3, 4, 5, 6, 7, 8, 9], selected_homes_by_user = [], selected_homes_by_system = [];
let winner_homes_list = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 5, 7], [4, 5, 6]]; 

function remove_selected_home(home_id){
    const index = not_selected_homes.indexOf(home_id);
    not_selected_homes.splice(index, 1);
}
function check_win(player_chosen_homes, player){
    for (let i = 0; i < winner_homes_list.length; i++) {
        if (player_chosen_homes.includes(winner_homes_list[i][0]) && player_chosen_homes.includes(winner_homes_list[i][1]) && player_chosen_homes.includes(winner_homes_list[i][2])) {
            if (player == "user") {
                document.querySelectorAll(".tictactoe--cell")[winner_homes_list[i][0]-1].classList.add("win-cells");
                document.querySelectorAll(".tictactoe--cell")[winner_homes_list[i][1]-1].classList.add("win-cells");
                document.querySelectorAll(".tictactoe--cell")[winner_homes_list[i][2]-1].classList.add("win-cells");
                ResultGame("Win");
            }
            else {
                ResultGame("Game Over !!!");
            }
            return 1;
        }
    }
    if(not_selected_homes.length==0){
       ResultGame("Draw !!!");
    }
}
function select_homes_for_winning_system(required_homes_for_winning_system,home_one,home_two){
    if(!required_homes_for_winning_system.includes(home_one)){
        required_homes_for_winning_system.push(home_one)
    }
    if(!required_homes_for_winning_system.includes(home_two)){
        required_homes_for_winning_system.push(home_two)
    }
}
function selecting_home_by_system() {
    const required_homes_for_winning_user = [];
    const required_homes_for_winning_system = [];
    let choosen_home;
    for (let i = 0; i < winner_homes_list.length; i++){
        //Choosing homes to win the system
        if (selected_homes_by_system.includes(winner_homes_list[i][0]) && selected_homes_by_system.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][2])){
            choosen_home = winner_homes_list[i][2];
            break;
        } else if (selected_homes_by_system.includes(winner_homes_list[i][0]) && selected_homes_by_system.includes(winner_homes_list[i][2]) && not_selected_homes.includes(winner_homes_list[i][1])){
            choosen_home = winner_homes_list[i][1];
            break;
        } else if (selected_homes_by_system.includes(winner_homes_list[i][2]) && selected_homes_by_system.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][0])){
            choosen_home = winner_homes_list[i][0];
            break;
        }
        //Choosing homes to win the user
        if (selected_homes_by_user.includes(winner_homes_list[i][0]) && selected_homes_by_user.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][2])) {
            required_homes_for_winning_user.push(winner_homes_list[i][2]);

        }else if (selected_homes_by_user.includes(winner_homes_list[i][0]) && selected_homes_by_user.includes(winner_homes_list[i][2]) && not_selected_homes.includes(winner_homes_list[i][1])) {
            required_homes_for_winning_user.push(winner_homes_list[i][1]);

        }else if (selected_homes_by_user.includes(winner_homes_list[i][2]) && selected_homes_by_user.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][0])) {
            required_homes_for_winning_user.push(winner_homes_list[i][0]);
        }
        //Selecting homes to get close to winning the system
        if(selected_homes_by_system.includes(winner_homes_list[i][0])
        && (not_selected_homes.includes(winner_homes_list[i][2]) || selected_homes_by_system.includes(winner_homes_list[i][2]))
        && (not_selected_homes.includes(winner_homes_list[i][1]) || selected_homes_by_system.includes(winner_homes_list[i][1]))){
            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][2],winner_homes_list[i][1]);
        }
        else if(selected_homes_by_system.includes(winner_homes_list[i][1])
        && (not_selected_homes.includes(winner_homes_list[i][2]) || selected_homes_by_system.includes(winner_homes_list[i][2]))
        && (not_selected_homes.includes(winner_homes_list[i][0]) || selected_homes_by_system.includes(winner_homes_list[i][0]))){
            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][2],winner_homes_list[i][0]);
        }
        else if(selected_homes_by_system.includes(winner_homes_list[i][2])
        && (not_selected_homes.includes(winner_homes_list[i][1]) || selected_homes_by_system.includes(winner_homes_list[i][1]))
        && (not_selected_homes.includes(winner_homes_list[i][0]) || selected_homes_by_system.includes(winner_homes_list[i][0]))){
            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][1],winner_homes_list[i][0]);
        }
    }
    //Home selection by the system
    if(!choosen_home){
        if (not_selected_homes.includes(5)){
            choosen_home = 5;
        }
        else if (required_homes_for_winning_system.length == 0 && required_homes_for_winning_user.length == 0){
            const random = parseInt(Math.random() * 10);
            const index = random >= not_selected_homes.length ? not_selected_homes.length-1 : random;
            choosen_home = not_selected_homes[index];
        }
        else if(required_homes_for_winning_user.length!=0 && required_homes_for_winning_system.length!=0){
            for(let i=0 ; i<required_homes_for_winning_system.length ; i++){
                if(required_homes_for_winning_user.includes(required_homes_for_winning_system[i])){
                    choosen_home = required_homes_for_winning_system[i];
                    break;
                }
            }
            if(!choosen_home){
                choosen_home = required_homes_for_winning_user[0];
            }
        }
        else if(required_homes_for_winning_user.length!=0){
            choosen_home = required_homes_for_winning_user[0];
        }
        else if(required_homes_for_winning_system.length!=0){
            choosen_home = required_homes_for_winning_system[0];
        }
    }
    selected_homes_by_system.push(choosen_home);
    document.querySelectorAll('.tictactoe--cell')[choosen_home-1].classList.add("system-selected");
    remove_selected_home(choosen_home);
    check_win(selected_homes_by_system, "system");
}
export default function TicTacToeOperation(restart_game,tictactoe__cells){
    const click_audio = document.querySelector("#audio-clicked");
    if(restart_game){
        not_selected_homes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        selected_homes_by_user = [];
        selected_homes_by_system = [];
    }
    tictactoe__cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if(not_selected_homes.includes(parseInt(cell.getAttribute("data-number")))){
                selected_homes_by_user.push(parseInt(cell.getAttribute("data-number")));
                cell.classList.add("user-selected");
                click_audio.play();
                remove_selected_home(parseInt(cell.getAttribute("data-number")));
                let result_game = check_win(selected_homes_by_user, "user");
                if(not_selected_homes.length!=0 && !result_game){
                    selecting_home_by_system();
                }
            }
        })
    });
}