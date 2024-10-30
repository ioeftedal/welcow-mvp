import { Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultResources, Resources } from "../../forms/resources_8";
import { defaultWaterPoint, WaterPoint } from "../../forms/waterPoint_8";

export default function EighthPage() {
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

        {/* TODO: Make it possible to add multiple accounts of pens/groups */}
        <GridCol>
          <Title>Resources</Title>
        </GridCol>

        <GridCol>
          <Title order={2}>Pens / Groups</Title>
        </GridCol>

        <GridCol>
          <Title order={3}>Pen - ???</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Name"
            value={resourcesData.group_name || ""}
            onChange={(e) => setResourcesData({ ...resourcesData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number of Water Points"
            value={resourcesData.nr_wps || ""}
            onChange={(e) => setResourcesData({ ...resourcesData, nr_wps: Number(e.target.value) })}
          />
        </GridCol>

        {/* TODO: Make it possible to add multiple accounts of water points */}
        <GridCol>
          <Title order={2}>Water Points</Title>
        </GridCol>

        <GridCol>
          <Title order={3}>Water Point - ???</Title>
        </GridCol>

        <GridCol span={12}>
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
            label="Through Length"
            rightSection={"cm"}
            rightSectionWidth={60}
            value={waterPointData.troughlength || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, troughlength: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Type of Water Point"
            value={waterPointData.type || ""}
            onChange={(e) => setWaterPointData({ ...waterPointData, type: Number(e.target.value) })}
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
            label="Function"
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

      </Grid>
    </Fieldset>
  )
}
