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
const translateScore = (player1:string, player2:string, scores:Map<string,number>, gameoverCallback:Function) => {
    let score0 = scores.get(player1) || 0,
        score1 = scores.get(player2) || 0;

    if(Math.max(score0, score1) > 3) {
        if(Math.abs(score0 - score1) >= 2) {
            // a player has achieved a winstate of > 40 && 2 points ahead
            gameoverCallback();
            return <>{(score0 > score1 ? player1 : player2) + " Wins!" }</>
        } else if(Math.abs(score0 - score1) == 0) {
            // both scores are equal, it must be deuce
            return <>{"Deuce"}</>
        } else {
            // the only remaining case is Advantage to one player or another
            return <>{(score0 > score1 ? player1 : player2) + " Advantage" }</>
        }
    } else {
        // neither player has passed the 40 point minimum for the game to have a winner yet
        return <>{scoreMap.get(score0)}-{scoreMap.get(score1)}</>
    }
}
	
/*
* Score component, displays the game score / result
*/
const Score = (
    { player1, player2, scores, gameoverCallback }: { player1:string, player2:string, scores:Map<string,number>, gameoverCallback:Function }
) => {
	return  <div className="GTScoreCard">
			    <h1>{translateScore(player1, player2, scores, gameoverCallback)}</h1>
		    </div>
}

export default Score;