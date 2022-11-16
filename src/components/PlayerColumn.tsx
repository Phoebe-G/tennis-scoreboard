import styles from "./PlayerColumn.module.css"

const PlayerColumn = (props:any) => 
    <div className={styles.GTPlayerColumn}>
        <h2>{props.playerName}</h2>
        <button>Increment Score</button>
    </div>

export default PlayerColumn