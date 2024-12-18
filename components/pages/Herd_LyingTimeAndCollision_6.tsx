import { Button, Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultHerd, Herd } from "../../forms/herd_4";
import { defaultLyingTimeAndCollision, LyingTimeAndCollision } from "../../forms/lyingTimeAndCollision_6";

export default function SixthPage() {
  const [herdData, setHerdData] = useState<Herd>(() => {
    const savedHerdData = localStorage.getItem("herdData");
    return savedHerdData ? JSON.parse(savedHerdData) : defaultHerd();
  });

  const [lyingTimeAndCollissionData, setLyingTimeAndCollissionData] = useState<LyingTimeAndCollision>(() => {
    const savedLyingTimeAndCollissionData = localStorage.getItem("lyingTimeAndCollissionData");
    return savedLyingTimeAndCollissionData ? JSON.parse(savedLyingTimeAndCollissionData) : defaultLyingTimeAndCollision();
  });

  useEffect(() => {
    localStorage.setItem("herdData", JSON.stringify(herdData))
  }, [herdData])
  useEffect(() => {
    localStorage.setItem("lyingTimeAndCollissionData", JSON.stringify(lyingTimeAndCollissionData))
  }, [lyingTimeAndCollissionData])


  return (
    <Fieldset>
      <Grid>

        <GridCol span={12}>
          <Title>Lying Time and Collision</Title>
        </GridCol>

        {/* TODO: Make it possible to add multiple registrations */}
        <GridCol span={12}>
          <Title order={3}>Registration - ???</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lying Time"
            value={lyingTimeAndCollissionData.lie_t || ""}
            onChange={(e) => setLyingTimeAndCollissionData({ ...lyingTimeAndCollissionData, lie_t: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Collission"
            value={lyingTimeAndCollissionData.collision || ""}
            onChange={(e) => setLyingTimeAndCollissionData({ ...lyingTimeAndCollissionData, collision: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
