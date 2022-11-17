import PlayerControls from "./PlayerControls";
import Score from "./Score";
import React from "react";
import styles from "./Scoreboard.module.css";

var Scoreboard = (
    { player1, player2 }: { player1:string, player2:string }
) => {

    const [scores, setScores] = React.useState(new Map<string,number>([[player1, 0], [player2, 0]]));
    var gameover = false;

    const increment = (playerName:string) => {
        if(gameover) return;
        
        let newScores:Map<string, number> = new Map();

        scores.forEach((value, key) => {
            if (key == playerName) {
                newScores.set(key, value + 1);
            } else {
                newScores.set(key, value);
            }
        });

        setScores(newScores);
    }

    const setGameover = (value?:boolean) => {
        if(typeof value == "boolean") {
            gameover = value;
        } else {
            gameover = true;
        }
    }


    return (
    <div className={styles.GTScoreboard}>
        <h1>Grok Tennis</h1>
        <PlayerControls player1={player1} player2={player2} callback={increment}/>
        <Score player1={player1} player2={player2} scores={scores} gameoverCallback={setGameover} />
    </div>
    );
}

export default Scoreboard;