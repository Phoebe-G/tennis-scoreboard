import styles from "./PlayerColumn.module.css"

const PlayerColumn = () => 
    <div className={styles.GTPlayerColumn}>
        <h2>Player #</h2>
        <button>Increment Score</button>
    </div>

export default PlayerColumn