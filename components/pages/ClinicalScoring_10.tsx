import { Button, Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { ClinicalScoring, defaultClinicalScoring } from "../../forms/clinicalScoring_10";

export default function TenthPage() {
  const [clinicalScoringData, setClinicalScoringData] = useState<ClinicalScoring>(() => {
    const savedClinicalScoringData = localStorage.getItem("clinicalScoringData");
    return savedClinicalScoringData ? JSON.parse(savedClinicalScoringData) : defaultClinicalScoring();
  });

  useEffect(() => {
    localStorage.setItem("clinicalScoringData", JSON.stringify(clinicalScoringData))
  }, [clinicalScoringData])

  return (
    <Fieldset>
      <Grid>
        <GridCol>
          <Title>Clinical Scoring</Title>
        </GridCol>
        <GridCol span={6}>
          <TextInput
            label="Group Name"
            value={clinicalScoringData.group_name}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, group_name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Ear Tag"
            value={clinicalScoringData.ear_tag}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, ear_tag: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Side"
            value={clinicalScoringData.side}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, side: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Breed"
            value={clinicalScoringData.breed || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, breed: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="BCS WQ"
            value={clinicalScoringData.bcs_wq || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, bcs_wq: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="BCS STD"
            value={clinicalScoringData.bcs_std || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, bcs_std: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Clean Scr Lower Hind Leg"
            value={clinicalScoringData.clean_scr_lower_hindleg || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, clean_scr_lower_hindleg: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Clean Scr Upper Hind Leg"
            value={clinicalScoringData.clean_scr_upper_hindleg || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, clean_scr_upper_hindleg: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Clean Scr Udder WQ"
            value={clinicalScoringData.clean_scr_udderwq || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, clean_scr_udderwq: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Clean Scr Udder"
            value={clinicalScoringData.clean_scr_udder || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, clean_scr_udder: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Clean Scr Teats"
            value={clinicalScoringData.clean_scr_teats || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, clean_scr_teats: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Tarsus"
            value={clinicalScoringData.integ_tarsus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_tarsus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Hairless Tarsus"
            value={clinicalScoringData.nr_hairless_tarsus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_hairless_tarsus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Lesion Tarsus"
            value={clinicalScoringData.nr_lesion_tarsus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_lesion_tarsus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Swelling Tarsus"
            value={clinicalScoringData.nr_swelling_tarsus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_swelling_tarsus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Hindquarter"
            value={clinicalScoringData.integ_hindquarter || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_hindquarter: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Hairless HQ"
            value={clinicalScoringData.nr_hairless_hq || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_hairless_hq: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Lesion HQ"
            value={clinicalScoringData.nr_lesion_hq || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_lesion_hq: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Swelling HQ"
            value={clinicalScoringData.nr_swelling_hq || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_swelling_hq: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Neck Shoulder Back"
            value={clinicalScoringData.integ_neck_shoulder_back || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_neck_shoulder_back: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Hairless NSB"
            value={clinicalScoringData.nr_hairless_nsb || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_hairless_nsb: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Lesion NSB"
            value={clinicalScoringData.nr_lesion_nsb || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_lesion_nsb: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Swelling NSB"
            value={clinicalScoringData.nr_swelling_nsb || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_swelling_nsb: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Carpus"
            value={clinicalScoringData.integ_carpus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_carpus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Hairless Carpus"
            value={clinicalScoringData.nr_hairless_carpus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_hairless_carpus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Lesion Carpus"
            value={clinicalScoringData.nr_lesion_carpus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_lesion_carpus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Swelling Carpus"
            value={clinicalScoringData.nr_swelling_carpus || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_swelling_carpus: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Flank Side Udder"
            value={clinicalScoringData.integ_flank_side_udder || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_flank_side_udder: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Hairless FSU"
            value={clinicalScoringData.nr_hairless_fsu || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_hairless_fsu: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Lesion FSU"
            value={clinicalScoringData.nr_lesion_fsu || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_lesion_fsu: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Swelling FSU"
            value={clinicalScoringData.nr_swelling_fsu || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, nr_swelling_fsu: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Other"
            value={clinicalScoringData.integ_other || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_other: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Integ Other Specify"
            value={clinicalScoringData.integ_other_specify || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, integ_other_specify: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Tail Broken"
            value={clinicalScoringData.tail_broken || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, tail_broken: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Hampered Respiration"
            value={clinicalScoringData.hampered_respiration || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, hampered_respiration: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Diarrhoea"
            value={clinicalScoringData.diarrhoea || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, diarrhoea: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Vulval Discharge"
            value={clinicalScoringData.vulval_discharge || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, vulval_discharge: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Lameness"
            value={clinicalScoringData.lameness || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, lameness: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Comment"
            value={clinicalScoringData.comment || ""}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, comment: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Farm ID"
            value={clinicalScoringData.farmId}
            onChange={(e) => setClinicalScoringData({ ...clinicalScoringData, farmId: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  );
}

