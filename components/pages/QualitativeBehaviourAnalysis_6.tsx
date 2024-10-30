import { Button, Fieldset, Grid, GridCol, Slider, Text, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultQualitativeBehaviourAnalysis, QualitativeBehaviourAnalysis } from "../../forms/qualitativeBehaviourAnalysis_6";

export default function SixthPage() {
  const [qualitativeBehaviourAnalysis, setQualitativeBehaviourAnalysis] = useState<QualitativeBehaviourAnalysis>(() => {
    const savedQualitativeBehaviourAnalysis = localStorage.getItem("qualitativeBehaviourAnalysisData");
    return savedQualitativeBehaviourAnalysis ? JSON.parse(savedQualitativeBehaviourAnalysis) : defaultQualitativeBehaviourAnalysis();
  });

  useEffect(() => {
    localStorage.setItem("qualitativeBehaviourAnalysisData", JSON.stringify(qualitativeBehaviourAnalysis));
  }, [qualitativeBehaviourAnalysis])

  return (
    <Fieldset>
      <Grid>

        <GridCol style={{ marginBottom: 20 }}>
          <Title>Qualitative Behaviour Analysis</Title>
        </GridCol>

        <GridCol>
          <Text>Active</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.active}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, active: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Relaxed</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.relaxed}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, relaxed: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Fearful</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.fearful}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, fearful: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Agitated</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.agitated}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, agitated: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Calm</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.calm}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, calm: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Content</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.content}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, content: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Indifferent</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.indifferent}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, indifferent: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Frustrated</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.frustrated}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, frustrated: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Friendly</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.friendly}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, friendly: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Bored</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.bored}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, bored: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Playful</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.playful}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, playful: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Positively Occupied</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.positively_occupied}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, positively_occupied: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Lively</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.lively}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, lively: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Inquisitive</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.inquisitive}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, inquisitive: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Irritable</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.irritable}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, irritable: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Calmless/Uneasy</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.calmless_uneasy}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, calmless_uneasy: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Sociable</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.sociable}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, sociable: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Apathetic</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.apathetic}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, apathetic: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Happy</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.happy}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, happy: Number(e) })}
          />
        </GridCol>

        <GridCol>
          <Text>Distressed</Text>
          <Slider
            value={qualitativeBehaviourAnalysis.distressed}
            onChange={(e) => setQualitativeBehaviourAnalysis({ ...qualitativeBehaviourAnalysis, distressed: Number(e) })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
