import PlayerColumn from "./PlayerColumn"
import styles from "./PlayerControls.module.css"

const PlayerControls = (props:any) => 
    <div className={styles.GTPlayerControls}>
        <PlayerColumn playerName={props.player1}/>
        <PlayerColumn playerName={props.player2}/>
    </div>

export default PlayerControls