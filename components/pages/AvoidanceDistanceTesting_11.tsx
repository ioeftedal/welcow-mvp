import { Button, Fieldset, Grid, GridCol, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { AvoidanceDistanceTest, defaultAvoidanceDistanceTest } from "../../forms/avoidanceDistanceTesting_11";

export default function TenthPage() {
  const [avoidanceDistanceData, setAvoidanceDistanceData] = useState<AvoidanceDistanceTest>(() => {
    const savedAvoidanceDistanceData = localStorage.getItem("avoidanceDistanceData");
    return savedAvoidanceDistanceData ? JSON.parse(savedAvoidanceDistanceData) : defaultAvoidanceDistanceTest();
  })

  useEffect(() => {
    localStorage.setItem("avoidanceDistanceData", JSON.stringify(avoidanceDistanceData))
  }, [avoidanceDistanceData])

  return (
    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Avoidance Distance Test</Title>
        </GridCol>

        <GridCol>
          <Title order={4}>Individual - ???</Title>
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Group"
            value={avoidanceDistanceData.group_name}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Side"
            value={avoidanceDistanceData.side}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, side: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Ear Tag"
            value={avoidanceDistanceData.ear_tag}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, ear_tag: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Test"
            value={avoidanceDistanceData.a_d_t1 || ""}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, a_d_t1: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Second Test (If Required)"
            value={avoidanceDistanceData.a_d_t2 || ""}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, a_d_t2: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nasal Discharge"
            value={avoidanceDistanceData.nasal_discharge}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, nasal_discharge: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Ocular Discharge"
            value={avoidanceDistanceData.ocular_discharge}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, ocular_discharge: e.target.value })}
          />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            label="Comment"
            value={avoidanceDistanceData.comment || ""}
            onChange={(e) => setAvoidanceDistanceData({ ...avoidanceDistanceData, comment: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>

  );
}
