import PlayerControls from "./PlayerControls";
import Score from "./Score";
import React from "react";
import { stringify } from "querystring";

var Scoreboard = (
    { player1, player2 }: { player1:string, player2:string }
) => {

    const [scores, setScores] = React.useState(new Map<string,number>([[player1, 0], [player2, 0]]));

    var increment = (playerName:string) => {
        // scores.set(playerName, scores.get(playerName)! + 1);

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

    return (
    <div className="gt-scoreboard">
        <h1>Grok Tennis</h1>
        <PlayerControls player1={player1} player2={player2} callback={increment}/>
        <Score player1={player1} player2={player2} scores={scores}/>
    </div>
    );
}

export default Scoreboard;