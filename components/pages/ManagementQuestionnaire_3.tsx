import { Button, Checkbox, Fieldset, Grid, GridCol, NumberInput, Textarea, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultManagementQuestionnaire, ManagementQuestionnaire } from "../../forms/managementQuestionnaire_3";
import { IconTemperatureCelsius } from "@tabler/icons-react";

export default function ThirdPage() {
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

        <GridCol span={12} style={{ marginBottom: 20 }}>
          <Title>Management Questionnaire Data</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Temperature Inside"
            rightSection={<IconTemperatureCelsius />}
            value={managementQuestionnaireData.temp_in || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, temp_in: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Temperature Outside"
            rightSection={<IconTemperatureCelsius />}
            value={managementQuestionnaireData.temp_out || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, temp_out: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <Checkbox
            label="Animals Go Out To Pasture"
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

        <GridCol span={12}>
          <Checkbox
            label="Acces To Outdoor Loafing Area"
            checked={managementQuestionnaireData.outdoor_access}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_access: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Outdoor Days Per Year"
            value={managementQuestionnaireData.outdoor_days_year || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_days_year: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Outdoor Hours Per Day"
            value={managementQuestionnaireData.outdoor_hours_day || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, outdoor_hours_day: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <Checkbox
            label="Loose Housed Cows"
            checked={managementQuestionnaireData.loose_housed}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, loose_housed: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Number Of Dystocia Cases In The Last 12 Months"
            value={managementQuestionnaireData.nr_dystocia_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_dystocia_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Number Of Downercows In The Last 12 Months"
            value={managementQuestionnaireData.nr_downercows_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_downercows_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Number Of Mortalities In The Last 12 Months"
            value={managementQuestionnaireData.nr_mortality_12_mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_mortality_12_mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <Title order={3} style={{ margin: 20 }}>Disbudding and Dehorning</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Calves Disbudded Or Dehorned On Farm"
            value={managementQuestionnaireData.disb_deho_on_farm || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_on_farm: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Method For Disbudding Or Dehorning "
            value={managementQuestionnaireData.disb_deho_method || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_method: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Anaesthesia, Disbudding Or Dehorning "
            value={managementQuestionnaireData.disb_deho_anaesthesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_anaesthesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Analgesia, Disbudding Or Dehorning "
            value={managementQuestionnaireData.disb_deho_analgesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, disb_deho_analgesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Hot-Air Gun Used For Thermocautery"
            value={managementQuestionnaireData.hot_air || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, hot_air: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <Title order={3} style={{ margin: 20 }}>Tail Docking</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Tail Docking Performed"
            value={managementQuestionnaireData.td_on_farm || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_on_farm: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Method For Tail Docking"
            value={managementQuestionnaireData.td_method || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_method: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Anaesthesia, For Tail Docking"
            value={managementQuestionnaireData.td_anaesthesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_anaesthesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Analgesia, For Tail Docking"
            value={managementQuestionnaireData.td_analgesia || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, td_analgesia: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <Title order={3} style={{ margin: 20 }}>Calf</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Calf Time with Mother"
            rightSection={"Days"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.calf_mother_time || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, calf_mother_time: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Time in Singlebox (Days)"
            rightSection={"Days"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.singlebox_time || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, singlebox_time: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Milk Volume - Daily"
            rightSection={"Litres"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.milk_volume_daily || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, milk_volume_daily: parseFloat(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Colostrum Volume - First Day"
            rightSection={"Litres"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.colostrum_volume || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, colostrum_volume: parseFloat(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Age When Recieving Concentrate Feed - First Time"
            rightSection={"Days"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.concentrate_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, concentrate_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Age When Recieving RoughageRoughage  - First Time"
            rightSection={"Days"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.roughage_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, roughage_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Age When Recieving Water - First Time"
            rightSection={"Days"}
            rightSectionWidth={60}
            value={managementQuestionnaireData.water_age || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, water_age: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol>
          <Title order={3} style={{ margin: 20 }}>Other</Title>
        </GridCol>

        <GridCol span={4}>
          <Checkbox
            label="Farmer Have Favorite Cow"
            checked={managementQuestionnaireData.fav_cow || false}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, fav_cow: e.target.checked })}
          />
        </GridCol>

        <GridCol span={8}>
          <Checkbox
            label="Farmer Does Something Special To Improve Animal Welfare"
            checked={managementQuestionnaireData.special_measure || false}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, special_measure: e.target.checked })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Special Measure"
            value={managementQuestionnaireData.special_measure_desc || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, special_measure_desc: e.target.value })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Milk Recordings In The Last 3 Months"
            value={managementQuestionnaireData.nr_milkrec_3mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, nr_milkrec_3mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Dairy Cows On The Unit Last 12 Months"
            value={managementQuestionnaireData.avg_dairy_cow_12mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, avg_dairy_cow_12mos: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Calvings Per Year"
            value={managementQuestionnaireData.avg_calvings_year || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, avg_calvings_year: Number(e.target.value) })}
          />
        </GridCol>

        <GridCol span={12}>
          <TextInput
            label="Percentage With SCC Above 400k In The Last 3 Months"
            value={managementQuestionnaireData.pct_scc400k_3mos || ""}
            onChange={(e) => setManagementQuestionnaireData({ ...managementQuestionnaireData, pct_scc400k_3mos: Number(e.target.value) })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  )
}
