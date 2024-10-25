import { Button, Checkbox, Fieldset, Grid, GridCol, NumberInput, Textarea, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultManagementQuestionnaire, ManagementQuestionnaire } from "../../forms/managementQuestionnaire_5";

export default function FifthPage() {
  const [managementQuestionnaireData, setManagementQuestionnaireData] = useState<ManagementQuestionnaire>(() => {
    const savedManagementQuestionnaireData = localStorage.getItem("managementQuestionnaireData");
    return savedManagementQuestionnaireData ? JSON.parse(savedManagementQuestionnaireData) : defaultManagementQuestionnaire();
  });

  useEffect(() => {
    localStorage.setItem("managementQuestionnaireData", JSON.stringify(managementQuestionnaireData));
  }, [managementQuestionnaireData])

  return (

    <Fieldset>
      <Grid>

        <GridCol span={12}>
          <Title>Management Questionnaire Data</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Temperature Inside"
            value={managementQuestionnaireData.temp_in || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, temp_in: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Temperature Outside"
            value={managementQuestionnaireData.temp_out || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, temp_out: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <Checkbox
            label="Pasture Access ??"
            checked={managementQuestionnaireData.pasture_access}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pasture_access: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Pasture Days Per Year"
            value={managementQuestionnaireData.pasture_days_year || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pasture_days_year: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Pasture Hours Per Day"
            value={managementQuestionnaireData.pasture_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pasture_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            label="Pasture Days Comment"
            value={managementQuestionnaireData.pasture_days_comment || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pasture_days_comment: e.target.value })}
          />
        </GridCol>

        <GridCol span={3}>
          <Checkbox
            label="Outdoor Access?"
            checked={managementQuestionnaireData.outdoor_access}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_access: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Outdoor Days Per Year"
            value={managementQuestionnaireData.outdoor_days_year || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_days_year: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={3}>
          <TextInput
            label="Outdoor Hours Per Day"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={3}>
          <Checkbox
            label="Loose Housed?"
            checked={managementQuestionnaireData.loose_housed}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, loose_housed: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number Of Dystocia Cases In The Last 12 Months"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number Of Downercows In The Last 12 Months"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Number Of Mortalities In The Last 12 Months"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Outdoor Hours Per Day"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Dystocia (12 mos)"
            value={managementQuestionnaireData.nr_dystocia_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_dystocia_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Downer Cows (12 mos)"
            value={managementQuestionnaireData.nr_downercows_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_downercows_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr Mortality (12 mos)"
            value={managementQuestionnaireData.nr_mortality_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_mortality_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Disbudding/Dehorning on Farm"
            value={managementQuestionnaireData.disb_deho_on_farm || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_on_farm: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Disbudding/Dehorning Method"
            value={managementQuestionnaireData.disb_deho_method || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_method: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Hot Air"
            value={managementQuestionnaireData.hot_air || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, hot_air: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Disbudding/Dehorning Anaesthesia"
            value={managementQuestionnaireData.disb_deho_anaesthesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_anaesthesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Disbudding/Dehorning Analgesia"
            value={managementQuestionnaireData.disb_deho_analgesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_analgesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Teat Disinfection on Farm"
            value={managementQuestionnaireData.td_on_farm || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_on_farm: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Teat Disinfection Method"
            value={managementQuestionnaireData.td_method || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_method: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Teat Disinfection Anaesthesia"
            value={managementQuestionnaireData.td_anaesthesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_anaesthesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Teat Disinfection Analgesia"
            value={managementQuestionnaireData.td_analgesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_analgesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Calf Time with Mother (Days)"
            value={managementQuestionnaireData.calf_mother_time || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, calf_mother_time: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Time in Singlebox (Days)"
            value={managementQuestionnaireData.singlebox_time || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, singlebox_time: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Milk Volume Daily"
            value={managementQuestionnaireData.milk_volume_daily || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, milk_volume_daily: parseFloat(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Colostrum Volume"
            value={managementQuestionnaireData.colostrum_volume || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, colostrum_volume: parseFloat(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Concentrate Age"
            value={managementQuestionnaireData.concentrate_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, concentrate_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Roughage Age"
            value={managementQuestionnaireData.roughage_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, roughage_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Water Age"
            value={managementQuestionnaireData.water_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, water_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <Checkbox
            label="Favorite Cow"
            checked={managementQuestionnaireData.fav_cow || false}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, fav_cow: e.target.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <Checkbox
            label="Special Measure"
            checked={managementQuestionnaireData.special_measure || false}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, special_measure: e.target.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Special Measure Description"
            value={managementQuestionnaireData.special_measure_desc || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, special_measure_desc: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Nr of Milk Recordings (3 mos)"
            value={managementQuestionnaireData.nr_milkrec_3mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_milkrec_3mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Avg Dairy Cows (12 mos)"
            value={managementQuestionnaireData.avg_dairy_cow_12mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, avg_dairy_cow_12mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Avg Calvings per Year"
            value={managementQuestionnaireData.avg_calvings_year || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, avg_calvings_year: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Percentage SCC over 400k (3 mos)"
            value={managementQuestionnaireData.pct_scc400k_3mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pct_scc400k_3mos: Number(e.target.value) })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
