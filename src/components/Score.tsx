/*
* Map raw points to their representational score value
*/
const scoreMap = new Map<number, number>([
    [0, 0],
    [1, 15],
    [2, 30],
    [3, 40]
]);

/*
* Take the current scores and apply the scoring logic to produce
* the appropriate output.
*/
const translateScore = (score_0:number, score_1:number) => {
    if(Math.max(score_0, score_1) > 3) {
        return <>{"Endgame edge cases.."}</>
    } else {
        return <>{scoreMap.get(score_0)}-{scoreMap.get(score_1)}</>
    }
}
	
/*
* Score component, tracks & displays the game score / result
*/

let Score = (
    { player1, player2, scores }: { player1:string, player2:string, scores:Map<string,number> }
) => {
    console.log("Score rendered");
    /* non-null assertion required because map returns undefined if the key is not present.
    (We only call with the strings used to initialise the map so this is unlikely to be an issue) */
	return  <div className="gt-score-card">
			    <h1>{translateScore(scores.get(player1)!, scores.get(player2)!)}</h1>
		    </div>
}

export default Score;