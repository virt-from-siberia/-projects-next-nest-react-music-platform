import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import TrackList from "../../compoentns/TrackList";
import { ITrack } from "../../types/track";

const Tracks = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Трек 1",
      artist: "M shumaher",
      text: "Some text",
      listens: 5,
      picture: "string",
      audio: "string",
      comments: [],
    },
    {
      _id: "2",
      name: "Трек 2",
      artist: "Trulli",
      text: "Some text",
      listens: 2,
      picture: "string",
      audio: "string",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button
                onClick={() =>
                  router.push("/tracks/create")
                }
              >
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;
