import { Button, Fieldset, Grid, GridCol, Text, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultResources, Resources } from "../../forms/resources_9";
import { defaultWaterPoint, WaterPoint } from "../../forms/waterPoint_9";

export default function NinthPage() {
  const [resourcesData, setResourcesData] = useState<Resources>(() => {
    const savedResourcesData = localStorage.getItem("resourcesData");
    return savedResourcesData ? JSON.parse(savedResourcesData) : defaultResources();
  })

  const [waterPointData, setWaterPointData] = useState<WaterPoint>(() => {
    const savedWaterPointData = localStorage.getItem("waterPointData");
    return savedWaterPointData ? JSON.parse(savedWaterPointData) : defaultWaterPoint();
  })

  useEffect(() => {
    localStorage.setItem("resourcesData", JSON.stringify(resourcesData));
  }, [resourcesData])

  useEffect(() => {
    localStorage.setItem("waterPointData", JSON.stringify(waterPointData));
  }, [waterPointData])

  return (
    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Resources</Title>
        </GridCol>

        <GridCol>
          <TextInput
            label="Group Name"
            value={resourcesData.group_name || ""}
            onChange={(e) => setResourcesData({ ...resourcesData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol>
          <TextInput
            label="Number of Water Points"
            value={resourcesData.nr_wps || ""}
            onChange={(e) => setResourcesData({ ...resourcesData, nr_wps: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <TextInput
            label="Farm ID"
            value={resourcesData.farmId || ""}
            onChange={(e) => setResourcesData({ ...resourcesData, farmId: e.target.value })}
          />
        </GridCol>

        <GridCol>
          <Title>Water Points</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Name"
            value={waterPointData.group_name || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number of Animals Using Water Points"
            value={waterPointData.nr_animals_using_wps || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, nr_animals_using_wps: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Type"
            value={waterPointData.type || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, type: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Through Length"
            value={waterPointData.troughlength || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, troughlength: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Cleanliness"
            value={waterPointData.cleanliness || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, cleanliness: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Functioning"
            value={waterPointData.functioning || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, functioning: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Waterflow"
            value={waterPointData.waterflow || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, waterflow: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Farm ID"
            value={waterPointData.farmId || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, farmId: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
