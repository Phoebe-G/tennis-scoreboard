import PlayerColumn from "./PlayerColumn"
import styles from "./PlayerControls.module.css"

const PlayerControls = (props:any) => 
    <div className={styles.GTPlayerControls}>
        <PlayerColumn/>
        <PlayerColumn/>
    </div>

export default PlayerControls