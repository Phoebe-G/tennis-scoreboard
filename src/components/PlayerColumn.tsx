import styles from "./PlayerColumn.module.css";
import { useState, memo } from "react";

const PlayerColumn = (
    {playerName, callback}: {playerName:string, callback:Function}
) => {
    let increment = () => callback(playerName);

    return (
    <div className={styles.GTPlayerColumn}>
        <h2>{playerName}</h2>
        <button onClick={increment}>Increment Score</button>
    </div>
    );
}

export default memo(PlayerColumn);