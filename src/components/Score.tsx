
const translateScore = (score_0:Number, score_1:Number) => {
        return <>{score_0}-{score_1}</>
}
        
var scores:Array<Number> = Array(2);

scores[0] = 0;
scores[1] = 0;

let Score = (props:any) => {

        return  <div className="gt-score-card">
                    <h1>{translateScore(scores[0], scores[1])}</h1>
                </div>
}

export default Score