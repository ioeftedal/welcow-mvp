import { useEffect, useState } from "react";
import { TextInput, GridCol, Grid, Text, Title, Button, Fieldset } from "@mantine/core";
import { defaultGroup, Group } from "../../forms/group_7";

export default function SeventhPage() {
  const [groupData, setGroupData] = useState<Group>(() => {
    const savedGroupData = localStorage.getItem("groupData");
    return savedGroupData ? JSON.parse(savedGroupData) : defaultGroup();
  });

  useEffect(() => {
    localStorage.setItem("groupData", JSON.stringify(groupData))
  }, [groupData])

  return (
    <Fieldset>
      <Grid>
        <GridCol>
          <Title>Groups</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Name"
            value={groupData.group_name || ""}
            onChange={(e) => setGroupData({ ...groupData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Size"
            value={groupData.group_size || ""}
            onChange={(e) => setGroupData({ ...groupData, group_size: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Sample"
            value={groupData.group_sample || ""}
            onChange={(e) => setGroupData({ ...groupData, group_sample: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Farm ID"
            value={groupData.farmId || ""}
            onChange={(e) => setGroupData({ ...groupData, farmId: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  );
}
