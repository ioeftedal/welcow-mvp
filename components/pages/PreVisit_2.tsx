import { Checkbox, Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultPreVisit, PreVisit } from "../../forms/preVisit_2";

export default function SecondPage() {
  const [preVisitData, setPreVisitData] = useState<PreVisit>(() => {
    const savedPreVisit = localStorage.getItem("preVisitData");
    return savedPreVisit ? JSON.parse(savedPreVisit) : defaultPreVisit();
  });

  // Store `farmData` in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("preVisitData", JSON.stringify(preVisitData));
  }, [preVisitData]);

  return (

    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Pre Visit</Title>
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Herd Size"
            value={preVisitData.herd_size || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, herd_size: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Sample Size"
            value={preVisitData.sample_size || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, sample_size: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Number of Groups"
            value={preVisitData.nr_groups || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, nr_groups: Number(e.target.value) })}
          />
        </GridCol>


        <GridCol span={4}>
          <Checkbox
            label="Pregheifers Mixed ???"
            checked={preVisitData.pregheifers_mixed || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, pregheifers_mixed: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="Dry Cows Mixed ???"
            checked={preVisitData.drycows_mixed || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, drycows_mixed: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="Bull ???"
            checked={preVisitData.bull || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, bull: e.currentTarget.checked })}
          />
        </GridCol>


        <GridCol span={6}>
          <TextInput
            label="Feeding ???"
            value={preVisitData.feeding}
            onChange={(e) => setPreVisitData({ ...preVisitData, feeding: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Milking System"
            value={preVisitData.milking_system || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, milking_system: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Morning Routines"
            value={preVisitData.morning_routines || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, morning_routines: e.target.value })}
          />
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="Headlock"
            checked={preVisitData.headlock || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, headlock: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number of Headlocks"
            value={preVisitData.nr_headlocks || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, nr_headlocks: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="On Pasture?"
            checked={preVisitData.on_pasture || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, on_pasture: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Date of Last Claw Trim"
            value={preVisitData.date_last_claw_trim || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, date_last_claw_trim: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Interferance ???"
            value={preVisitData.interference || ""}
            onChange={(e) => setPreVisitData({ ...preVisitData, interference: e.target.value })}
          />
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="Stock Person Available ???"
            checked={preVisitData.stockperson_available || undefined}
            onChange={(e) => setPreVisitData({ ...preVisitData, stockperson_available: e.currentTarget.checked })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
