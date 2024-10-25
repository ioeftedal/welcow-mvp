
import { useEffect, useState } from "react";
import { TextInput, GridCol, Grid, Fieldset, Title, Button } from "@mantine/core";
import { defaultSocialBehaviourAndCoughing, SocialBehaviourAndCoughing } from "../../forms/socialBehaviourAndCoughing_8";

export default function SocialBehaviourAndCoughingForm() {
  const [socialBehaviourAndCoughing, setSocialBehaviourAndCoughing] = useState<SocialBehaviourAndCoughing>(() => {
    const savedSocialBehaviourAndCoughing = localStorage.getItem("socialBehaviourAndCoughingData");
    return savedSocialBehaviourAndCoughing ? JSON.parse(savedSocialBehaviourAndCoughing) : defaultSocialBehaviourAndCoughing();
  });

  useEffect(() => {
    localStorage.setItem("socialBehaviourAndCoughingData", JSON.stringify(socialBehaviourAndCoughing))
  }, [socialBehaviourAndCoughing])

  return (
    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Social Behaviour and Coughing</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Segment"
            value={socialBehaviourAndCoughing.segment}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, segment: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Group Name"
            value={socialBehaviourAndCoughing.group_name}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Start"
            value={socialBehaviourAndCoughing.start}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, start: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Finish"
            value={socialBehaviourAndCoughing.finish}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, finish: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Duration"
            value={socialBehaviourAndCoughing.duration || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, duration: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Standing Start"
            value={socialBehaviourAndCoughing.standing_start || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, standing_start: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Standing Finish"
            value={socialBehaviourAndCoughing.standing_finish || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, standing_finish: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Eat/Drink Start"
            value={socialBehaviourAndCoughing.eat_drink_start || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, eat_drink_start: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Eat/Drink Finish"
            value={socialBehaviourAndCoughing.eat_drink_finish || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, eat_drink_finish: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lying Start"
            value={socialBehaviourAndCoughing.lying_start || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, lying_start: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lying Finish"
            value={socialBehaviourAndCoughing.lying_finish || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, lying_finish: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Sum Start"
            value={socialBehaviourAndCoughing.sum_start || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, sum_start: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Sum Finish"
            value={socialBehaviourAndCoughing.sum_finish || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, sum_finish: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lying Out Start"
            value={socialBehaviourAndCoughing.lying_out_start || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, lying_out_start: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lying Out Finish"
            value={socialBehaviourAndCoughing.lying_out_finish || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, lying_out_finish: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Headbutt"
            value={socialBehaviourAndCoughing.headbutt || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, headbutt: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Displacement"
            value={socialBehaviourAndCoughing.displacement || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, displacement: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Fighting"
            value={socialBehaviourAndCoughing.fighting || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, fighting: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Chasing"
            value={socialBehaviourAndCoughing.chasing || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, chasing: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Chasing Up"
            value={socialBehaviourAndCoughing.chasing_up || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, chasing_up: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Coughing"
            value={socialBehaviourAndCoughing.coughing || ""}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, coughing: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Farm ID"
            value={socialBehaviourAndCoughing.farmId}
            onChange={(e) => setSocialBehaviourAndCoughing({ ...socialBehaviourAndCoughing, farmId: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  );
}
