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
* Take the current points tally and apply the scoring logic to produce
* the appropriate output.
*/
const translateScore = (player1:string, player2:string, scores:Map<string,number>) => {
    let score0 = scores.get(player1) || 0,
        score1 = scores.get(player2) || 0;

    if(Math.max(score0, score1) > 3) {
        if(Math.abs(score0 - score1) >= 2) {
            return <>{(score0 > score1 ? player1 : player2) + " Wins!" }</>
        } else if(Math.abs(score0 - score1) == 0) {
            return <>{"Deuce"}</>
        } else {

            return <>{(score0 > score1 ? player1 : player2) + " Advantage" }</>
        }
    } else {
        return <>{scoreMap.get(score0)}-{scoreMap.get(score1)}</>
    }
}
	
/*
* Score component, displays the game score / result
*/
const Score = (
    { player1, player2, scores }: { player1:string, player2:string, scores:Map<string,number> }
) => {
    /* non-null assertion required because map returns undefined if the key is not present.
    (We only call with the strings used to initialise the map so this is unlikely to be an issue) */
	return  <div className="gt-score-card">
			    <h1>{translateScore(player1, player2, scores)}</h1>
		    </div>
}

export default Score;