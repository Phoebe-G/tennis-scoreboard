import PlayerControls from "./PlayerControls";
import Score from "./Score";
import React from "react";

const Scoreboard = (
    { player1, player2 }: { player1:string, player2:string }
) => {
    
    let score = new Map<string, number>();
    score.set(player1, 0);
    score.set(player2, 0);

    const [scores, setScores] = React.useState(score);

    var increment = () => {
        alert("increment!");
    }

    return (
    <div className="gt-scoreboard">
        <h1>Grok Tennis</h1>
        <PlayerControls player1={player1} player2={player2} callback={increment}/>
        <Score player1={player1} player2={player2} scores={scores}/>
    </div>
    );
}

export default React.memo(Scoreboard);