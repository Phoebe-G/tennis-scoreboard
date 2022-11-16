import PlayerControls from "./PlayerControls"
import Score from "./Score"

const Scoreboard = (props:any) => 
    <div className="gt-scoreboard">
        <h1>Grok Tennis</h1>
        <PlayerControls player1={props.player1} player2={props.player2}/>
        <Score player1={props.player1} player2={props.player2}/>
    </div>

export default Scoreboard