import { Button, Fieldset, Grid, GridCol, Textarea, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultScore, Score } from "../../forms/score_3";

export default function ThirdPage() {
  const [scoreData, setScoreData] = useState<Score>(() => {
    const savedScoreData = localStorage.getItem("scoreData");
    return savedScoreData ? JSON.parse(savedScoreData) : defaultScore();
  });

  useEffect(() => {
    localStorage.setItem("scoreData", JSON.stringify(scoreData));
  }, [scoreData])

  return (
    <Fieldset>
      <Grid>

        <GridCol span={12}>
          <Title>Overall Score</Title>
        </GridCol>

        <GridCol span={12}>
          <Textarea
            label="Welfare Category"
            value={scoreData.welfare_category || ""}
            onChange={(e) => setScoreData({ ...scoreData, welfare_category: e.target.value })}
          />
        </GridCol>

        <GridCol span={12}>
          <Title order={2}>Principle Scoring</Title>
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Good Feeding"
            value={scoreData.principle_good_feeding || ""}
            onChange={(e) => setScoreData({ ...scoreData, principle_good_feeding: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Good Housing"
            value={scoreData.principle_good_housing || ""}
            onChange={(e) => setScoreData({ ...scoreData, principle_good_housing: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Good Health"
            value={scoreData.principle_good_health || ""}
            onChange={(e) => setScoreData({ ...scoreData, principle_good_health: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Good Behavior"
            value={scoreData.principle_good_behavior || ""}
            onChange={(e) => setScoreData({ ...scoreData, principle_good_behavior: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <Title order={2}>Criteria Scoring</Title>
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Absence of Prolonged Hunger"
            value={scoreData.absence_of_prolonged_hunger || ""}
            onChange={(e) => setScoreData({ ...scoreData, absence_of_prolonged_hunger: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Absence of Prolonged Thirst"
            value={scoreData.absence_of_prolonged_thirst || ""}
            onChange={(e) => setScoreData({ ...scoreData, absence_of_prolonged_thirst: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Comfort Around Resting"
            value={scoreData.comfort_around_resting || ""}
            onChange={(e) => setScoreData({ ...scoreData, comfort_around_resting: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Ease of Movement"
            value={scoreData.ease_of_movement || ""}
            onChange={(e) => setScoreData({ ...scoreData, ease_of_movement: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Absence of Injuries"
            value={scoreData.absence_of_injuries || ""}
            onChange={(e) => setScoreData({ ...scoreData, absence_of_injuries: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Absence of Disease"
            value={scoreData.absence_of_disease || ""}
            onChange={(e) => setScoreData({ ...scoreData, absence_of_disease: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Absence of Pain"
            value={scoreData.absence_of_pain || ""}
            onChange={(e) => setScoreData({ ...scoreData, absence_of_pain: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Social Behaviors"
            value={scoreData.expression_of_social_behaviors || ""}
            onChange={(e) => setScoreData({ ...scoreData, expression_of_social_behaviors: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Other Behaviors"
            value={scoreData.expression_of_other_behaviors || ""}
            onChange={(e) => setScoreData({ ...scoreData, expression_of_other_behaviors: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Human Animal Relationship"
            value={scoreData.good_human_animal_relationship || ""}
            onChange={(e) => setScoreData({ ...scoreData, good_human_animal_relationship: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Emotional State"
            value={scoreData.positive_emotional_state || ""}
            onChange={(e) => setScoreData({ ...scoreData, positive_emotional_state: Number(e.target.value) })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  );
}
