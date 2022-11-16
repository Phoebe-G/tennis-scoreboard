import PlayerColumn from "./PlayerColumn";
import styles from "./PlayerControls.module.css";
import React from "react";

const PlayerControls = (props:any) => 
    <div className={styles.GTPlayerControls}>
        <PlayerColumn playerName={props.player1} callback={props.callback}/>
        <PlayerColumn playerName={props.player2} callback={props.callback}/>
    </div>

export default React.memo(PlayerControls);