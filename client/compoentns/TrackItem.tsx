import { useRouter } from "next/router";
import React from "react";

import { Card, Grid, IconButton } from "@mui/material";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import {
  Pause,
  PlayArrow,
  Delete,
} from "@mui/icons-material";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({
  track,
  active = false,
}) => {
  const router = useRouter();
  return (
    <Card
      className={styles.track}
      onClick={() => router.push("tracks/" + track._id)}
    >
      <IconButton onClick={e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid
        container
        direction="column"
        style={{ width: "200px", margin: "0 20px" }}
      >
        <div> {track.name}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>
          {track.artist}
        </div>
      </Grid>
      {active && <div>02 : 32 / 03 : 14</div>}
      <IconButton
        onClick={e.stopPropagation()}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
