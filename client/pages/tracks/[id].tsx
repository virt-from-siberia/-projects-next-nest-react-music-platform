import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage: React.FC = () => {
  const router = useRouter();

  const track: ITrack = {
    _id: "1",
    name: "Трек 1",
    artist: "M shumaher",
    text: "Some text",
    listens: 5,
    picture: "string",
    audio: "string",
    comments: [],
  };
  return (
    <MainLayout>
      <Button onClick={() => router.push("/tracks")}>
        Загрузить
      </Button>
    </MainLayout>
  );
};

export default TrackPage;
